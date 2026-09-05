import { cookies } from "next/headers";
import { auth } from "@/app/_lib/auth";
const DEMO_SESSION = {
  user: {
    name: "Demo User",
    email: "demo@spk.pl",
    image: "/demoPicture.jpg",
    userId: 9999,
    isAuthoried: true,
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

export async function getSession() {
  const cookieStore = await cookies();
  const hasDemoCookie = cookieStore.has("demo_session");

  if (hasDemoCookie) {
    return DEMO_SESSION;
  }

  return await auth();
}
