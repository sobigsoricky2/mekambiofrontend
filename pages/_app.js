import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { useEffect } from "react";
//  wow aos 
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  }, []);

  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "es" },
      "google_translate_element"
    );
  }
  console.log(Router);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="shortcut icon"
          href="https://yelodotred.s3-us-west-2.amazonaws.com/images/communities/favicons/7252/favicon/logo-icono-170x170px.png?1649233490"
          type="image/x-icon"
        />
        <title>meKambio</title>
        <meta name="theme-color" content="#000" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="/apple-icon.png"></link>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          async
        ></script>
        <script async></script>

        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          defer
          async
        />
      </Head>
      <div
        style={{
          padding: "5px",
          cursor: "pointer",
          background: "#f6eb3c",
          color: "#1b658e",
          textAlign: "center",
          position: "fixed",
          bottom: "0px",
          zIndex: "99",
          fontSize: "15px",
          fontWeight: "bold",
        }}
        id="google_translate_element"
        onClick={googleTranslateElementInit}
      >
        Change Language
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
