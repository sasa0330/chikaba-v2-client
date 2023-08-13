import { useUtilityContext } from "@/context/utility";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { isLoadingShow } = useUtilityContext();

  return (
    <Html lang="en">
      <Head />
      <body className="container p-2">
        <Main />
        <NextScript />
        {isLoadingShow && <div>ローディング</div>}
      </body>
    </Html>
  );
}
