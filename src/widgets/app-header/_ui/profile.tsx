"use client";
import { ProfileAvatar, getProfileDisplayName } from "@/entities/user/profile";
import { useAppSession } from "@/entities/user/session";
import { SignInButton } from "@/features/auth/sign-in-button";
import { useSignOut } from "@/features/auth/use-sign-out";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Skeleton } from "@/shared/ui/skeleton";
import { LogOut, ShieldPlus, User } from "lucide-react";
import Link from "next/link";

export function Profile() {
  const session = useAppSession();
  const { signOut, isPending: isLoadingSignOut } = useSignOut();

  if (session.status === "loading") {
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (session.status === "unauthenticated") {
    return <SignInButton />;
  }

  const user = session?.data?.user;
  const isAdmin = session?.data?.user.role === "ADMIN";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-px rounded-full self-center h-8 w-8"
        >
          <ProfileAvatar profile={user} className="w-8 h-8" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2 ">
        <DropdownMenuLabel>
          <p>Мой аккаунт</p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            {user ? getProfileDisplayName(user) : undefined}
          </p>
          <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            {user ? user.role : undefined}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/${user?.id}`}>
              <User className="mr-2 h-4 w-4" />
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isLoadingSignOut}
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Выход</span>
          </DropdownMenuItem>
          {isAdmin ? (
            <DropdownMenuItem asChild>
              <Link href="/admin">
                <ShieldPlus className="mr-2 h-4 w-4" />
                <span>Админкa</span>
              </Link>
            </DropdownMenuItem>
          ) : (
            ""
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
