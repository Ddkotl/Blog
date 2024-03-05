import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/shared/ui/utils";
import { Inter as FontSans } from "next/font/google";
import { AppProvider } from "./_providers/app-provider";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog health",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {" "}
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
