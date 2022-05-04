import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SnakeOilSoftware({ Component, pageProps }) {
  useEffect(() => document.body.classList.add("bg-dark", "text-light"));

  return <Component {...pageProps} />;
}
