"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { loginAction } from "./actions";

export function LoginForm() {
  const searchParams = useSearchParams();
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <form className="auth-form" action={action}>
      <input type="hidden" name="from" value={searchParams.get("from") || "/cuenta"} />
      <label>
        Correo electrónico
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Ingresa tu correo electrónico"
          required
        />
      </label>
      <label>
        Contraseña
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </label>
      {state?.error ? <p className="auth-error">{state.error}</p> : null}
      <button type="submit" disabled={pending}>
        {pending ? "Ingresando..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
