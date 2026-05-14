import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "SARMED",
    template: "%s | SARMED",
  },
  description: "SARMED imports medical and dental equipment and materials.",
  icons: {
    icon: "/s_logo.svg",
    shortcut: "/s_logo.svg",
    apple: "/s_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
