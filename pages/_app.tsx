import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SiteNav from "../components/sitenav";
import Footer from "../components/footer";

export default function SnakeOilSoftware({ Component, pageProps }) {
  useEffect(() => document.body.classList.add("bg-dark", "text-light"));

  return (
    <>
      <SiteNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
