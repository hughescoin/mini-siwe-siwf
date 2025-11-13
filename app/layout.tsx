import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import { SafeArea } from "@coinbase/onchainkit/minikit";
import { minikitConfig } from "../minikit.config";
import { RootProvider } from "./rootProvider";
import { AuthProvider } from "./authProvider";
import "./globals.css";

const miniapp = {
  version: "1",
  imageUrl: minikitConfig.miniapp.heroImageUrl,
  button: {
    title: `Woopsie Doopsie`,
    action: {
      name: `Launch Woopsie Doopsie`,
      type: "launch_frame",
    },
  },
  buttons: [
    {
      title: `Woopsie`,
      action: {
        type: "sdk_action",
        sdkAction: "actions.composeCast",
        options: {
          text: "Woopsie Doopsie",
          embeds: [process.env.NEXT_PUBLIC_URL || ""],
        },
      },
    },
    {
      title: `Zoopsie`,
      action: {
        type: "launch_frame_tray",
        url: process.env.NEXT_PUBLIC_URL 
      },
    },
  ],  
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: minikitConfig.miniapp.name,
    description: minikitConfig.miniapp.description,
    openGraph: {
      title: minikitConfig.miniapp.name,
      description: minikitConfig.miniapp.description,
    },
    other: {
      "fc:miniapp": JSON.stringify(miniapp),
      'base:miniapp': JSON.stringify(miniapp),
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootProvider>
      <AuthProvider>
        <html lang="en">
          <body className={`${inter.variable} ${sourceCodePro.variable}`}>
            <SafeArea>{children}</SafeArea>
          </body>
        </html>
      </AuthProvider>
    </RootProvider>
  );
}
