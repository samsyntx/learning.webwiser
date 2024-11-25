import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Web Wiser Learning Technologies",
  description: "A platform dedicated to effective and innovative learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A platform dedicated to effective and innovative learning experiences." />
        <meta name="keywords" content="learning, education, innovation, online platform" />
        <meta name="author" content="Web Wiser Team" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Web Wiser Learning" />
        <meta property="og:description" content="A platform dedicated to effective and innovative learning experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webwiserlearning.com" />
        <meta property="og:image" content="https://webwiserlearning.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Wiser Learning" />
        <meta name="twitter:description" content="A platform dedicated to effective and innovative learning experiences." />
        <meta name="twitter:image" content="https://webwiserlearning.com/twitter-image.jpg" />
        <meta name="twitter:creator" content="@webwiser" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Custom Fonts */}
        <style>{`
          :root {
            ${geistSans.variable};
            ${geistMono.variable};
          }
        `}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
