import { logoutAction } from "@/app/login/actions";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button className="button outline" type="submit">
        Cerrar sesión
      </button>
    </form>
  );
}
