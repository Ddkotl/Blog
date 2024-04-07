"use client";
import { useAppSession } from "@/entities/user/session";
import { AdminIcon } from "@/shared/ui/admin-icon";
import Link from "next/link";

export function Admin() {
  const session = useAppSession();

  if (
    session.status === "unauthenticated" ||
    session.status === "loading" ||
    session.data?.user.role !== "ADMIN"
  ) {
    return;
  }
  return (
    <Link className="flex items-center space-x-2" href="/admin">
      <AdminIcon className="h-6 w-6" />
    </Link>
  );
}
