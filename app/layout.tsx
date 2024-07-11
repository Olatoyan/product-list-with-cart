import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./_context/CartContext";

const RedHat = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product list with cart",
  description:
    "This is the product list with cart challenge from Frontend Mentor. And it was built with NextjS and TailwindCSS. The demo is available on https://toyan-product-list.vercel.app/. And it was built by Olatoyan George https://twitter.com/_annonnymouss_",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[62.5%]">
      <body
        className={`${RedHat.className} bg-[#fcf8f6] px-16 py-[8.8rem] font-normal tablet:p-16 mobile:p-10`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
