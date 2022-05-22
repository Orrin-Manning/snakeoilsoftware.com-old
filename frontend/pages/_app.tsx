import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import SiteNav from "../components/sitenav";
import Footer from "../components/footer";
import * as gtag from "../lib/gtag";

export default function SnakeOilSoftware({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.on("routeChangeComplete", handleRouteChange);
      router.events.on("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NXQXPK9159"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <SiteNav />
      <Component {...pageProps} />
      <Footer className="mt-3" />
    </>
  );
}
