import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emytic",
  description: "Emytic un espacio para aprender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#FF5733" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
