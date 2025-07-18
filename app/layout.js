import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import AOSWrapper from "./aos-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hirondev – Full-stack Web Developer Portfolio",
  description: "Hiron is a creative full-stack web developer specializing in Next.js, Tailwind CSS, WordPress, and scalable web applications.",
  keywords: [
    "Hiron",
    "Full-stack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "WordPress Developer",
    "Web Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Hiron", url: "https://hirondev.com" }],
  creator: "Hiron",
  metadataBase: new URL("https://hirondev.com"),
  openGraph: {
    title: "Hiron.dev – Full-stack Web Developer",
    description: "Building scalable web applications with modern technologies like Next.js, Tailwind, WordPress.",
    url: "https://hirondev.com",
    siteName: "Hirondev",
    images: [
      {
        url: "/hiron.png",
        width: 500,
        height: 500,
        alt: "Hiron.dev Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121417] text-white font-sans`}
      >
        <AOSWrapper>
          <Header />
          {children}
          <Footer />
        </AOSWrapper>
      </body>
    </html>
  );
}
