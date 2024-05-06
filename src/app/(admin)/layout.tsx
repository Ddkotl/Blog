import AdminGuard from "@/features/admin/admin-guard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { AdminSidebarPK } from "@/widgets/admin/admin-nav/admin-sidebar-pk";
import { AppHeader } from "@/widgets/app-header/app-header";
import {
  BookCheck,
  BookKey,
  Home,
  LineChart,
  MessageCircle,
  PanelLeft,
  Search,
  Settings,
  Tag,
  Users2,
} from "lucide-react";
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
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <AdminSidebarPK />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Админ меню</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="/admin"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Главная админки
                    </Link>
                    <Link
                      href="/admin/post"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <BookCheck className="h-5 w-5" />
                      Статьи
                    </Link>
                    <Link
                      href="/admin/category"
                      className="flex items-center gap-4 px-2.5  hover:text-foreground"
                    >
                      <BookKey className="h-5 w-5" />
                      Категории
                    </Link>
                    <Link
                      href="/admin/tag"
                      className="flex items-center gap-4 px-2.5  hover:text-foreground"
                    >
                      <Tag className="h-5 w-5" />
                      Тэги
                    </Link>
                    <Link
                      href="/admin/user"
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Пользователи
                    </Link>
                    <Link
                      href="/admin/comment"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Комментарии
                    </Link>

                    <Link
                      href="/admin/statistics"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Cтатистика
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Settings className="h-5 w-5" />
                      Настройки
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/admin">Главная админки</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="#">Статьи</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск по названию..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </AdminGuard>
    </>
  );
}
