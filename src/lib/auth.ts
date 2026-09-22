import { cookies } from "next/headers";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

export const AUTH_COOKIE = "oxigenarte_token";
export const AUTH_MAX_AGE = 60 * 60 * 24 * 7;

export type AuthSession = {
  email: string;
  name: string;
};

type TokenPayload = JWTPayload & AuthSession;

function getSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("Falta la variable JWT_SECRET");
  }

  return new TextEncoder().encode(secret);
}

export function getAuthCookieOptions() {
  return {
    name: AUTH_COOKIE,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_MAX_AGE,
  };
}

export async function signAuthToken(session: AuthSession) {
  return new SignJWT(session)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${AUTH_MAX_AGE}s`)
    .sign(getSecret());
}

export async function verifyAuthToken(token: string): Promise<AuthSession | null> {
  try {
    const { payload } = await jwtVerify<TokenPayload>(token, getSecret());

    if (!payload.email) {
      return null;
    }

    return {
      email: payload.email,
      name: payload.name || payload.email,
    };
  } catch {
    return null;
  }
}

export async function getSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifyAuthToken(token);
}

export function getDemoCredentials() {
  return {
    email: process.env.AUTH_EMAIL ?? "admin@oxigenarte.com.ve",
    password: process.env.AUTH_PASSWORD ?? "oxigenarte123",
    name: process.env.AUTH_NAME ?? "Administrador",
  };
}
