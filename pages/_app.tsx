import "bootstrap/dist/css/bootstrap.min.css";

export default function SnakeOilSoftware({ Component, pageProps }) {
  document.body.classList.add("bg-dark", "text-light");

  return <Component {...pageProps} />;
}
