import { Inter } from "next/font/google";
import "./globals.scss";
import TopHeader from "./header/page"
import Footer from "./footer/page"
import Logo from "../../public/logo.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indian Seller Buyer",
  description: "Indian Seller Buyer your reseller and buying service provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href={Logo.src}
  type="image/svg"
  sizes="16"
/>
      </head>
      <body className={inter.className}>
        <TopHeader />
          <main className={`main`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
