import "@/app/_styles/global.css";
import { Rubik } from "next/font/google";
import { NavigationProvider } from "./_context/NavigationContext";

export const metadata = {
  title: "Omnifood - Never cook again",
  description:
    "Omnifood is an AI-powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal taste and nutritional needs.",
};

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${rubik.variable} overflow-x-hidden font-sans`}>
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  );
}
