const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

function loadEnv(filePath) {
  const env = {};
  const text = fs.readFileSync(filePath, "utf8");

  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    env[trimmed.slice(0, eq)] = trimmed.slice(eq + 1);
  }

  return env;
}

async function runSql(url, serviceKey, sql) {
  const endpoints = [
    `${url}/pg/query`,
    `${url}/pg-meta/default/query`,
    `${url}/pg-meta/query`,
  ];

  const bodies = [{ query: sql }, { sql }];

  for (const endpoint of endpoints) {
    for (const body of bodies) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const text = await response.text();
      if (response.ok) {
        return { ok: true, endpoint, text };
      }
    }
  }

  return { ok: false };
}

async function main() {
  const env = loadEnv(path.join(__dirname, "..", ".env.local"));
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  const email = env.AUTH_EMAIL || "admin@oxigenarte.com.ve";
  const password = env.AUTH_PASSWORD || "oxigenarte123";
  const name = env.AUTH_NAME || "Administrador";

  if (!url || !serviceKey) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY");
  }

  const sql = fs.readFileSync(
    path.join(__dirname, "..", "supabase", "schema.sql"),
    "utf8",
  );

  const sqlResult = await runSql(url, serviceKey, sql);
  if (!sqlResult.ok) {
    console.log("SQL_ENDPOINT_UNAVAILABLE");
  } else {
    console.log("SQL_APPLIED");
  }

  const admin = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: existing, error: listError } = await admin.auth.admin.listUsers();
  if (listError) {
    throw listError;
  }

  let user = existing.users.find((item) => item.email === email);

  if (!user) {
    const created = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: name },
      app_metadata: { role: "admin" },
    });

    if (created.error) {
      throw created.error;
    }

    user = created.data.user;
    console.log("MASTER_CREATED");
  } else {
    const updated = await admin.auth.admin.updateUserById(user.id, {
      password,
      email_confirm: true,
      user_metadata: { full_name: name },
      app_metadata: { role: "admin" },
    });

    if (updated.error) {
      throw updated.error;
    }

    user = updated.data.user;
    console.log("MASTER_UPDATED");
  }

  const { error: profileError } = await admin.from("profiles").upsert({
    id: user.id,
    email,
    full_name: name,
    role: "admin",
    updated_at: new Date().toISOString(),
  });

  if (profileError) {
    console.log("PROFILE_ERROR:" + profileError.message);
  } else {
    console.log("PROFILE_READY");
  }
}

main().catch((error) => {
  console.error("SETUP_FAILED:" + error.message);
  process.exit(1);
});
