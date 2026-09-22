import { NextResponse } from "next/server";
import { AUTH_COOKIE, getAuthCookieOptions } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    ...getAuthCookieOptions(),
    name: AUTH_COOKIE,
    value: "",
    maxAge: 0,
  });

  return response;
}
