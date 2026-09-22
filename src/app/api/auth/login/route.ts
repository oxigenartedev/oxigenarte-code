import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import {
  getAuthCookieOptions,
  getDemoCredentials,
  signAuthToken,
} from "@/lib/auth";

function matches(expected: string, received: string) {
  const left = Buffer.from(expected);
  const right = Buffer.from(received);

  if (left.length !== right.length) {
    timingSafeEqual(left, left);
    return false;
  }

  return timingSafeEqual(left, right);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  const email = body?.email?.trim().toLowerCase() ?? "";
  const password = body?.password ?? "";
  const demo = getDemoCredentials();

  const emailOk = matches(demo.email.toLowerCase(), email);
  const passwordOk = matches(demo.password, password);

  if (!emailOk || !passwordOk) {
    return NextResponse.json(
      { error: "Correo o contraseña incorrectos." },
      { status: 401 },
    );
  }

  const token = await signAuthToken({
    email: demo.email,
    name: demo.name,
  });

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    ...getAuthCookieOptions(),
    value: token,
  });

  return response;
}
