import AdminGuard from "@/features/admin/admin-guard";
import { AppHeader } from "@/widgets/app-header/app-header";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="admin" />
      <AdminGuard>
        <ul className="flex gap-10">
          <li>
            <Link href="/admin">dashbord</Link>
          </li>
          <li>
            <Link href="/admin/post">post</Link>
          </li>
          <li>
            <Link href="/admin/user">user</Link>
          </li>
          <li>
            <Link href="/admin/statistics">statistics</Link>
          </li>
        </ul>
        {children}
      </AdminGuard>
    </>
  );
}
