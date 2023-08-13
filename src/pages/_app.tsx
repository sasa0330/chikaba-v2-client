import "@/styles/globals.css";
import { ShopProvider } from "@/context/shop";
import type { AppProps } from "next/app";
import { UtilityProvider } from "@/context/utility";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UtilityProvider>
        <ShopProvider>
          <Component {...pageProps} />
        </ShopProvider>
      </UtilityProvider>
    </>
  );
}
