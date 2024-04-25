import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./prismaClient";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  secret: "secret",
  providers: [
    Credentials({
      async authorize(credentials: any): Promise<any> {
        const email = credentials.email;
        const password = credentials.password;

        const user = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });

        if (user) {
          const isMatched = await bcrypt.compare(password, user?.password);
          if (isMatched) {
            return {
              id: user.user_id,
              name: user?.username,
              email: user?.email,
              role: user?.role,
              gender: user.gender_id,
            };
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async authorized({ request, auth }) {
      if (auth) {
        return true;
      }
      return false;
    },

    async jwt({ user, token }: any) {
      if (user) {
        token.role = user.role;
        token.gender = user.gender_id;
      }
      return token;
    },

    async session({ session, user, token }: any) {
      // session.user.id = user.user_id;
      session.user.role = token.role;
      session.user.id = token.sub;


      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
