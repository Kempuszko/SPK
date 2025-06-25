import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: [
    "/application/dashboard",
    "/application/calendar",
    "/application/posts",
    "/application/files",
  ],
};
