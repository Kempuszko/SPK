import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/app/_lib/auth";

export default async function middleware(req) {
  const hasDemoCookie = req.cookies.has("demo_session");

  return hasDemoCookie ? NextResponse.next() : auth(req);
}

export const config = {
  matcher: [
    "/application/dashboard",
    "/application/calendar",
    "/application/posts",
    "/application/files",
  ],
};
