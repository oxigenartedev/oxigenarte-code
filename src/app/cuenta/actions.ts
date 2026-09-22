"use server";

import { requireAdmin } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

export async function createUserAction(
  _prev: { error?: string; success?: string } | null,
  formData: FormData,
) {
  const adminSession = await requireAdmin();

  if (!adminSession) {
    return { error: "No tienes permisos para crear usuarios." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("full_name") ?? "").trim();
  const role = String(formData.get("role") ?? "user") === "admin" ? "admin" : "user";

  if (!email || !password || password.length < 6) {
    return { error: "Completa correo y una contraseña de al menos 6 caracteres." };
  }

  const admin = createSupabaseAdminClient();
  const created = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName || email },
    app_metadata: { role },
  });

  if (created.error || !created.data.user) {
    return { error: created.error?.message || "No se pudo crear el usuario." };
  }

  await admin.from("profiles").upsert({
    id: created.data.user.id,
    email,
    full_name: fullName || email,
    role,
    updated_at: new Date().toISOString(),
  });

  revalidatePath("/cuenta");
  return { success: `Usuario ${email} creado con rol ${role}.` };
}
