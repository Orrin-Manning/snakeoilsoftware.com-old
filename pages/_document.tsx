import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-dark text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
