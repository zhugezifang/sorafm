import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { getDictionary } from "@/services/i18n";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    title:`${dict.brand.title}`,
    description: `${dict.brand.sub_title}`,
    keywords: `${dict.brand.keywords}`,
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y65J1475LV`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y65J1475LV');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" richColors />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
