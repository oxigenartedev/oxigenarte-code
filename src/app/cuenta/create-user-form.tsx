"use client";

import { useActionState } from "react";
import { createUserAction } from "./actions";

export function CreateUserForm() {
  const [state, action, pending] = useActionState(createUserAction, null);

  return (
    <form className="auth-form" action={action}>
      <label>
        Nombre
        <input type="text" name="full_name" placeholder="Nombre completo" />
      </label>
      <label>
        Correo electrónico
        <input type="email" name="email" placeholder="correo@oxigenarte.com.ve" required />
      </label>
      <label>
        Contraseña
        <input type="password" name="password" placeholder="Mínimo 6 caracteres" required />
      </label>
      <label>
        Rol
        <select name="role" defaultValue="user">
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </label>
      {state?.error ? <p className="auth-error">{state.error}</p> : null}
      {state?.success ? <p className="auth-success">{state.success}</p> : null}
      <button type="submit" disabled={pending}>
        {pending ? "Creando..." : "Crear usuario"}
      </button>
    </form>
  );
}
