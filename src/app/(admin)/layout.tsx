import AdminGuard from '@/features/admin/admin-guard'
import { AppHeader } from "@/widgets/app-header/app-header"

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="admin" />
      <AdminGuard>{children}</AdminGuard>
    </>
  );
}
