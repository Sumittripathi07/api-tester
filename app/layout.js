import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/marketing/navbar";
import Providers from "@/components/global/providers";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/marketing/footer";

export const metadata = {
  title: "RapidReq",
  description: "Test your apis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        <Providers>
          <div
            id="home"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px"
          />
          <Navbar />
          <main className="relative z-40 w-full mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
