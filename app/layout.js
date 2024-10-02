export const metadata = {
  title: "Omnifood",
  description: "Omnifood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
