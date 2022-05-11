import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NXQXPK9159"
        />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </Head>
      <body className="bg-dark text-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
