import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yours.cards"),
  title: "BUY NOW PAY NEVER",
  description: "BUY NOW PAY NEVER",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/yours-logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/yours-logo.png",
  },
  openGraph: {
    title: "BUY NOW PAY NEVER",
    description: "BUY NOW PAY NEVER",
    type: "website",
    siteName: "Yours",
    url: "https://www.yours.cards",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "yours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUY NOW PAY NEVER",
    description: "BUY NOW PAY NEVER",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void font-sans text-star">
        {children}
      </body>
    </html>
  );
}
