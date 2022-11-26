import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "es" },
      "google_translate_element"
    );
  }
  return (
    <>
      <Head>
        <script src=" /assets/js/jquery-3.6.0.min.js" defer async />

        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          defer
          async
        />

        <script
          type="text/javascript"
          src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
          defer
          async
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
          defer
          async
        />

        <script src=" /assets/js/bootstrap.min.js" defer async />
       
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
        Change Languge
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
