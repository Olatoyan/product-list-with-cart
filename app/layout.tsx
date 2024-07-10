import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./_context/CartContext";

const RedHat = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product list with cart",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[62.5%]">
      <body className={`${RedHat.className} bg-[#fcf8f6] px-16 py-[8.8rem]`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
