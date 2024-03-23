'use client';

import MainNav from "@/library/components/organisms/MainNav";
import { cn } from "@/library/utils";
import "@/library/styles/globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import WalletButton from "@/library/components/Button";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
  zerionWallet,
  rainbowWallet,
  phantomWallet,
  en,
} from "@thirdweb-dev/react";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  preload: true,
  variable: "--font-bebas-neue",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider
      activeChain={OpSepoliaTestnet}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      locale={en()}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        zerionWallet(),
        rainbowWallet(),
        phantomWallet(),
      ]}
    >
      <body
        className={cn(
          bebas_neue.variable,
          "relative flex w-full min-h-screen gap-4 flex-col items-center bg-[#fff] bg-[url(/grid--light.svg)]"
        )}
      >
        <MainNav />
        <WalletButton />
        {children}
      </body>
    </ThirdwebProvider>
  );
}
