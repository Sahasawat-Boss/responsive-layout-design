import "./globals.css";
import localFont from "next/font/local";

//Only supermarket font here 
const supermarket = localFont({
  src: "../fonts/supermarket.ttf",
  variable: "--font-supermarket",
  display: "swap",
});

export const metadata = {
  title: "S-One Services",
  description: "S-One Services",
  icons: {
    icon: "/favicon.ico", // Ensure favicon path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${supermarket.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
