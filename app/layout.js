import "@/app/_styles/global.css";
import { Rubik } from "next/font/google";
import { StickyHeaderProvider } from "./_context/StickyHeaderContext";

export const metadata = {
  title: "Omnifood",
  description: "Omnifood",
};

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className={`${rubik.variable} overflow-x-hidden font-sans`}>
        <StickyHeaderProvider>{children}</StickyHeaderProvider>
      </body>
    </html>
  );
}
