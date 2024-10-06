import "@/app/_styles/global.css";
import { Rubik } from "next/font/google";

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
    <html lang="en" className="overflow-x-hidden">
      <body className={`${rubik.variable} overflow-x-hidden font-sans`}>
        {children}
      </body>
    </html>
  );
}
