import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import SiteNav from "../components/sitenav";
import Footer from "../components/footer";

export default function SnakeOilSoftware({ Component, pageProps }) {
  return (
    <>
      <SiteNav />
      <Component {...pageProps} />
      <Footer className="mt-3" />
    </>
  );
}
