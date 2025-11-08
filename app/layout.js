import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import AOSWrapper from "./aos-wrapper";
import Script from "next/script";
import CookieBanner from "./cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HironDev | Freelance Full-Stack Web Developer",
  description:
    "HironDev is a freelance full-stack web developer helping businesses across Europe, Australia, and America build fast, modern, and scalable websites using WordPress, Next.js, and custom APIs.",
  keywords: [
    "full-stack web developer",
    "freelance web developer",
    "Next.js developer",
    "React.js developer",
    "WordPress developer",
    "API integration",
    "website redesign",
    "web developer for startups",
    "Europe",
    "Australia",
    "America",
  ],
  openGraph: {
    title: "HironDev | Freelance Full-Stack Web Developer",
    description:
      "Build your next website with HironDev — professional full-stack web developer specializing in WordPress, Next.js, and API integration for global clients.",
    url: "https://hirondev.com",
    siteName: "HironDev",
    images: [
      {
        url: "https://hirondev.com/og.webp",
        width: 1200,
        height: 630,
        alt: "HironDev - Freelance Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HironDev | Freelance Full-Stack Web Developer",
    description:
      "Freelance full-stack web developer specializing in WordPress, Next.js, and API integration for businesses in Europe, Australia, and America.",
    images: ["https://hirondev.com/og.webp"],
  },
  alternates: {
    canonical: "https://hirondev.com",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Load Google Tag Manager only after cookie consent
              function loadGTM() {
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P75R2RT9');
              }

              // Check cookie consent
              if (localStorage.getItem('cookieAccepted')) {
                loadGTM();
              } else {
                document.addEventListener('cookieAccepted', loadGTM);
              }
            `,
          }}
        />

        <Script
          src={`https://www.google.com/recaptcha/api.js?render=6Le7Z4grAAAAADQHrgivW_qnuaMexQzcHWLVJJFM`}
          strategy="afterInteractive"
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121417] text-white font-sans`}
      >
        {/* ✅ NoScript GTM (loads only after consent) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <div id="gtm-noscript"></div>
                <script>
                  // Create GTM noscript iframe after cookie consent
                  function loadGTMNoScript() {
                    var iframe = document.createElement('iframe');
                    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-P75R2RT9';
                    iframe.height = '0';
                    iframe.width = '0';
                    iframe.style.display = 'none';
                    iframe.style.visibility = 'hidden';
                    document.getElementById('gtm-noscript').appendChild(iframe);
                  }

                  if (localStorage.getItem('cookieAccepted')) {
                    loadGTMNoScript();
                  } else {
                    window.addEventListener('cookieAccepted', loadGTMNoScript);
                  }
                </script>
              `,
            }}
          />

        <AOSWrapper>
          <Header />
            {children}
          <Footer />
          <CookieBanner />
        </AOSWrapper>
      </body>
    </html>
  );
}
