import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Iniciar sesión | Oxigenarte",
};

export default function LoginPage() {
  return (
    <main>
      <SiteHeader />
      <section className="auth-page">
        <div className="auth-card">
          <h1>Iniciar sesión</h1>
          <p>Accede a tu cuenta para continuar al área privada.</p>
          <Suspense fallback={<p>Cargando formulario...</p>}>
            <LoginForm />
          </Suspense>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
