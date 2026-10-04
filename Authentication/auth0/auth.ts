import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  pages: { signIn: "/login", error: "/login" },
  session: { strategy: "jwt", maxAge: 3600 },
  callbacks: {
    async jwt({ token, account }) {
      token.role = "user";

      console.log("account", token, account);

      if (token?.email === "techwavedy@gmail.com") {
        token.role = "admin";
      }
      if (account?.provider === "google") {
        token.role = "user";
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});
