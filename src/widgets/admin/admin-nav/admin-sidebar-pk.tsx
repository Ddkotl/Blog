"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/ui/utils";
import {
  BookCheck,
  BookKey,
  Home,
  LineChart,
  MessageCircle,
  Settings,
  Tag,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminSidebarPK() {
  const pathName = usePathname();
  return (
    <aside className="fixed pt-6 inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 mt-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin"
                className={cn(
                  `${
                    pathName === "/admin"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Главная админки</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Главная админки</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/post"
                className={cn(
                  `${
                    pathName === "/admin/post"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <BookCheck className="h-5 w-5" />
                <span className="sr-only">Статьи</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Статьи</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/category"
                className={cn(
                  `${
                    pathName === "/admin/category"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <BookKey className="h-5 w-5" />
                <span className="sr-only">Категории</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Категории</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/tag"
                className={cn(
                  `${
                    pathName === "/admin/tag"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <Tag className="h-5 w-5" />
                <span className="sr-only">Тэги</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Тэги</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/user"
                className={cn(
                  `${
                    pathName === "/admin/user"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Пользователи</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Пользователи</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/comment"
                className={cn(
                  `${
                    pathName === "/admin/comment"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Комментарии</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Комментарии</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/statistics"
                className={cn(
                  `${
                    pathName === "/admin/statistics"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`,
                  "flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                )}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Статистика</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Статистика</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          {" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Настройки</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Настройки</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
