import { useRouter } from "next/router";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import SiteNav from "../components/sitenav";
import Footer from "../components/footer";
import { pageview } from "../lib/gtag";

export default function SnakeOilSoftware({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
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
      <SiteNav />
      <Component {...pageProps} />
      <Footer className="mt-3" />
    </>
  );
}
