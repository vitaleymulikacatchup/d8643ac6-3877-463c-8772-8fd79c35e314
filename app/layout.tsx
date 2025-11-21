import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import Tag from "@/tag/Tag";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "F1 Racing 2026 - Next Generation Formula 1 Championship",
  description: "Experience the future of Formula 1 racing with revolutionary 2026 cars featuring sustainable fuels, hybrid technology, and unmatched performance on the world's greatest racing circuits.",
  keywords: "Formula 1, F1 2026, racing cars, hybrid technology, sustainable fuels, championship, motorsport",
  metadataBase: new URL("https://f1racing2026.com"),
  alternates: {
    canonical: "https://f1racing2026.com"
  },
  openGraph: {
    title: "F1 Racing 2026 - Revolutionary Formula 1 Cars",
    description: "Discover the next generation of Formula 1 racing with advanced hybrid technology, sustainable fuels, and incredible performance.",
    url: "https://f1racing2026.com",
    siteName: "F1 Racing 2026",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723602851-c7jojtqe.jpg",
        alt: "Formula 1 racing car 2026"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "F1 Racing 2026 - Revolutionary Formula 1 Cars",
    description: "Experience the future of motorsport with next-generation F1 technology and sustainable racing.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763723602851-c7jojtqe.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          <ThemeProvider
            defaultButtonVariant="expand-hover"
            defaultTextAnimation="reveal-blur"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="animatedGrid"
            cardStyle="glass-depth"
            primaryButtonStyle="diagonal-gradient"
            secondaryButtonStyle="glass"
            showBlurBottom={true}
          >
            {children}
          </ThemeProvider>
        </body>
      </PostHogWrapper>
    </html>
  );
}