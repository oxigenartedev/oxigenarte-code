import { createSupabaseServerClient } from "@/lib/supabase/server";

export type UserRole = "user" | "admin";

export type AuthSession = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};

function readRole(value: unknown): UserRole {
  return value === "admin" ? "admin" : "user";
}

export async function getSession(): Promise<AuthSession | null> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }

  const metadataRole = readRole(user.app_metadata?.role);
  const metadataName =
    typeof user.user_metadata?.full_name === "string" && user.user_metadata.full_name
      ? user.user_metadata.full_name
      : user.email;

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, email")
    .eq("id", user.id)
    .maybeSingle();

  return {
    id: user.id,
    email: profile?.email || user.email,
    name: profile?.full_name || metadataName,
    role: profile?.role ? readRole(profile.role) : metadataRole,
  };
}

export async function requireAdmin() {
  const session = await getSession();

  if (!session || session.role !== "admin") {
    return null;
  }

  return session;
}
