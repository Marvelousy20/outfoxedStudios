import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";
const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});

const lackFont = localFont({
  src: "./fonts/Lack-Regular.otf",
  variable: "--font-fontlack",
});

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";

export const metadata = {
  title: "Outfoxed Productions",
  description:
    "Welcome to OutfoxedProductions, your trusted partner for professional video editing services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${lackFont.variable} ${redHatDisplay.className}`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
