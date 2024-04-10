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
        <div className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4  flex ">
              <Link href="/admin">dashbord</Link>
            </div>
            <div className="mr-4  flex ">
              <Link href="/admin/post">post</Link>
            </div>
            <div className="mr-4  flex ">
              <Link href="/admin/user">user</Link>
            </div>
            <div className="mr-4  flex ">
              <Link href="/admin/statistics">statistics</Link>
            </div>
          </div>
        </div>
        {children}
      </AdminGuard>
    </>
  );
}
