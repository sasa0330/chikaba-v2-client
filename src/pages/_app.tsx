import "@/styles/globals.css";
import { ShopProvider } from "@/hooks/useShop";
import type { AppProps } from "next/app";
import { UtilityProvider } from "@/hooks/useUtility";

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
