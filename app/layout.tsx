import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ToDo",
  description: "The most convenient way to keep track of your tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="h-screen flex bg-slate-100">
          
          {children}
        </main>
      </body>
    </html>
  );
}
