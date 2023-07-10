import Navigation from "@/components/Navigation";
import "./globals.css";

import { Inter } from "next/font/google";
import QueryProvider from "@/components/QueryProvider";
import RecommendationProvider from "@/providers/RecommendationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Pal",
  description:
    "Music Pal is an app that generates you music recommendations based on your liking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <RecommendationProvider>
            <Navigation />
            {children}
          </RecommendationProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
