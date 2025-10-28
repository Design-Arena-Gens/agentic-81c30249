import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Ofkhn | Emergent Creative Systems",
  description:
    "Ofkhn is an emergent creative interface that weaves narrative systems, audio-reactive visuals, and generative design into a single studio-grade playground.",
  metadataBase: new URL("https://agentic-81c30249.vercel.app"),
  openGraph: {
    title: "Ofkhn | Emergent Creative Systems",
    description:
      "Discover Ofkhn, a speculative studio experience combining generative design rituals, modular workflows, and interactive story lattices.",
    url: "https://agentic-81c30249.vercel.app",
    siteName: "Ofkhn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ofkhn emergent creative systems interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofkhn | Emergent Creative Systems",
    description:
      "A future-facing creative OS blending rituals, signal processing, and narrative architectures for curious minds.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-[#06071a] text-white`}
    >
      <body>{children}</body>
    </html>
  );
}
