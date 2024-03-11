import { privateConfig } from "@/shared/config/private";
import { dbClient } from "@/shared/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compact } from "lodash-es";
import { AuthOptions } from "next-auth";
import Email from "next-auth/providers/email";

import GithubProvider from "next-auth/providers/github";

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
  pages: {
    signIn: "/auth/sign-in",
    newUser: "/auth/new-user",
    verifyRequest: "/auth/verify-request",
  },
  providers: compact([
    Email({
      server: {
        host: privateConfig.EMAIL_SERVER_HOST,
        port: +privateConfig.EMAIL_SERVER_PORT,
        auth: {
          user: privateConfig.EMAIL_SERVER_USER,
          pass: privateConfig.EMAIL_SERVER_PASSWORD,
        },
      },
      from: privateConfig.EMAIL_FROM,
    }),
    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_ID,
        clientSecret: privateConfig.GITHUB_SECRET,
      }),
  ]),
};
