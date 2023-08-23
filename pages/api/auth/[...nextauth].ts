import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import "../../../config/supertokens/backend";
import SessionNode from "supertokens-node/recipe/session";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/custom-signin"
  },
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const session = await SessionNode.getSessionWithoutRequestResponse(
          req.headers!.authorization.replace(/^Bearer /, ""),
          undefined,
          { sessionRequired: false, checkDatabase: true, antiCsrfCheck: false })

        if (!session) {
          return null;
        }

        await session.revokeSession();

        return {
          id: session.getUserId(),
        };
      },
      credentials: {}
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
