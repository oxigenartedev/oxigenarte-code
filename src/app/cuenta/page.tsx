import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSession } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { CreateUserForm } from "./create-user-form";
import { LogoutButton } from "./logout-button";

export const metadata: Metadata = {
  title: "Mi cuenta | Oxigenarte",
};

export default async function CuentaPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login?from=/cuenta");
  }

  const listed = session.role === "admin"
    ? await createSupabaseAdminClient().auth.admin.listUsers()
    : { data: { users: [] } };

  const users = listed.data?.users ?? [];

  return (
    <main>
      <SiteHeader />
      <section className="auth-page">
        <div className="auth-card account-card">
          <p className="auth-kicker">Área privada</p>
          <h1>Hola, {session.name}</h1>
          <p>Esta página solo es visible con una sesión de Supabase válida.</p>
          <dl className="account-details">
            <div>
              <dt>Correo</dt>
              <dd>{session.email}</dd>
            </div>
            <div>
              <dt>Rol</dt>
              <dd>{session.role}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>Sesión activa</dd>
            </div>
          </dl>
          <LogoutButton />
        </div>

        {session.role === "admin" ? (
          <div className="auth-card account-card admin-panel">
            <h2>Gestión de usuarios</h2>
            <p>Crea cuentas con rol user o admin. Solo los administradores ven este panel.</p>
            <CreateUserForm />
            <div className="user-list">
              {users.map((user) => (
                <article key={user.id}>
                  <strong>{user.email}</strong>
                  <span>{user.app_metadata?.role === "admin" ? "admin" : "user"}</span>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
      <SiteFooter />
    </main>
  );
}
