import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";

export function AppHeader() {
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={<Logo />}
      actions={<ToggleTheme />}
    />
  );
}
