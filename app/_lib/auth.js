import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUserByEmail } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const hasDemoCookie = request.cookies.has("demo_session");

      return hasDemoCookie ? true : !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUserByEmail(user.email);

        if (!existingUser)
          await createUser({
            email: user.email,
            image: user.image,
            fullName: user.name,
            authorized: false,
          });

        if (!existingUser.authorized) return false;

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      if (!session?.user?.email) return session;

      try {
        const appUser = await getUserByEmail(session.user.email);
        if (appUser) {
          session.user.userId = appUser.id;
          session.user.isAuthoried = appUser.authorized;
        }
      } catch (err) {
        console.error("Blad podczas pobierania danych użytkownika:", err);
      }

      return session;
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
