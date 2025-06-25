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
      return !!auth?.user;
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
    async session({ session, user }) {
      const appUser = await getUserByEmail(session.user.email);
      session.user.userId = appUser.id;
      session.user.isAuthoried = appUser.authorized;
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
