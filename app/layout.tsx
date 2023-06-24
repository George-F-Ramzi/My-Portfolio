import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "George F.Ramzi",
  description: "Your Talented Front-End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-8 leading-LH max-[440px]:px-4 text-white relative m-auto max-w-[1280px] bg-[#0F0F0F] `}
      >
        {children}
      </body>
    </html>
  );
}
