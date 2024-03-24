import { NeedAuthError } from "@/shared/lib/errors";
import { getServerSession } from "next-auth";
import { nextAuthConfig } from "./next-auth-config";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
export const getAppSessionStrictServer = async () => {
  const session = await getAppSessionServer();
  if (session === null) {
    throw new NeedAuthError();
  }
  return session;
};
