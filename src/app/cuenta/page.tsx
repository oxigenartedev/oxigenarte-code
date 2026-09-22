import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSession } from "@/lib/auth";
import { LogoutButton } from "./logout-button";

export const metadata: Metadata = {
  title: "Mi cuenta | Oxigenarte",
};

export default async function CuentaPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login?from=/cuenta");
  }

  return (
    <main>
      <SiteHeader />
      <section className="auth-page">
        <div className="auth-card account-card">
          <p className="auth-kicker">Área privada</p>
          <h1>Hola, {session.name}</h1>
          <p>
            Esta página solo es visible si tu sesión JWT es válida.
            El siguiente paso será definir qué pueden hacer los usuarios logueados.
          </p>
          <dl className="account-details">
            <div>
              <dt>Correo</dt>
              <dd>{session.email}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>Sesión activa</dd>
            </div>
          </dl>
          <LogoutButton />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
