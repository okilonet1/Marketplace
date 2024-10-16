import type { Metadata } from "next";

import Header from "@/components/Header";
import { CartProvider } from "@/providers/cart.provider";
import cartService from "@/services/cart.service";
import { validateRequest } from "@/lucia";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "FundusAI Marketplace",
  description: `FundusAI's marketplace connects diabetics with partner pharmacies to purchase discounted medications using "Fundus Points" earned via daily health data logs.`,
  openGraph: {
    images: [
      {
        url: "https://marketplace.fundusai.com/og.png",
        width: 1200,
        height: 630,
        alt: "FundusAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://marketplace.fundusai.com/og.png",
        width: 1200,
        height: 630,
        alt: "FundusAI Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function MarketPlaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartResponse = await cartService.getCart();
  const cartData = cartResponse.success ? cartResponse.data : null;
  const { account } = await validateRequest();

  if (account) {
    if (account.admin) {
      redirect("/admin");
    }

    if (account.pharmacy) {
      redirect("/pharmacy");
    }
  }

  return (
    <CartProvider initialValue={cartData}>
      <Header />
      <div className="flex w-full justify-center">{children}</div>
    </CartProvider>
  );
}
