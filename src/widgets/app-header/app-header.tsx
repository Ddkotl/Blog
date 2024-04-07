import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Admin } from "./_ui/admin";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "private" | "public" | "admin";
}) {
  const isProfile = variant !== "auth";
  const isAdmin = variant !== "admin";
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
      admin={isAdmin && <Admin />}
    />
  );
}
