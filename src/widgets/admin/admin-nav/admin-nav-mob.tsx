"use client";
import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { cn } from "@/shared/ui/utils";
import {
  BookCheck,
  BookKey,
  Home,
  LineChart,
  MessageCircle,
  PanelLeft,
  Settings,
  Tag,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminNavMob() {
  const pathName = usePathname();
  return (
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
            className={cn(
              `${
                pathName === "/admin"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <Home className="h-5 w-5" />
            Главная админки
          </Link>
          <Link
            href="/admin/post"
            className={cn(
              `${
                pathName === "/admin/post"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <BookCheck className="h-5 w-5" />
            Статьи
          </Link>
          <Link
            href="/admin/category"
            className={cn(
              `${
                pathName === "/admin/category"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <BookKey className="h-5 w-5" />
            Категории
          </Link>
          <Link
            href="/admin/tag"
            className={cn(
              `${
                pathName === "/admin/tag"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <Tag className="h-5 w-5" />
            Тэги
          </Link>
          <Link
            href="/admin/user"
            className={cn(
              `${
                pathName === "/admin/user"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <Users2 className="h-5 w-5" />
            Пользователи
          </Link>
          <Link
            href="/admin/comment"
            className={cn(
              `${
                pathName === "/admin/comment"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <MessageCircle className="h-5 w-5" />
            Комментарии
          </Link>

          <Link
            href="/admin/statistics"
            className={cn(
              `${
                pathName === "/admin/statistics"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <LineChart className="h-5 w-5" />
            Cтатистика
          </Link>
          <Link
            href="/admin/settings"
            className={cn(
              `${
                pathName === "/admin/settings"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              }`,
              "flex items-center gap-4 px-2.5  transition-colors hover:text-foreground ",
            )}
          >
            <Settings className="h-5 w-5" />
            Настройки
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
