import { Inter } from "next/font/google";
import "./globals.scss";
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
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3589128738879163"
     crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
