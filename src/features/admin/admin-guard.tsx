"use client";

import { useAppSession } from "@/entities/user/session";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useAppSession();

  const isLoading =
    session.status === "loading" || session.status === "unauthenticated";
  const isUnauthenticated = session.status === "unauthenticated";
  const isAdmin = session.data?.user.role === "ADMIN";
  useEffect(() => {
    if (isUnauthenticated) {
      signIn();
    }
  }, [isUnauthenticated]);
  useEffect(() => {
    if (!isLoading && !isAdmin) {
      signOut({ callbackUrl: "/" });
    }
  }, [isAdmin, isLoading]);

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === "authenticated" && isAdmin && children}
    </>
  );
}
