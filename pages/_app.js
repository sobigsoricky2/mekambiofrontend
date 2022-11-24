import Head from "next/head";
import "../styles/globals.css";

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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></script>
        ;
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link rel="stylesheet" href="./assets/css/flaticon.min.css" />
        {/*====== Font Awesome ======*/}
        <link rel="stylesheet" href="./assets/css/font-awesome-5.9.0.min.css" />
        {/*====== Bootstrap ======*/}
        <link rel="stylesheet" href="./assets/css/bootstrap-4.5.3.min.css" />
        {/*====== Magnific Popup ======*/}
        <link rel="stylesheet" href="./assets/css/magnific-popup.min.css" />
        {/*====== Nice Select ======*/}
        <link rel="stylesheet" href="./assets/css/nice-select.min.css" />
        {/*====== jQuery UI ======*/}
        <link rel="stylesheet" href="./assets/css/jquery-ui.min.css" />
        {/*====== Animate ======*/}
        <link rel="stylesheet" href="./assets/css/animate.min.css" />
        {/*====== Slick ======*/}
        <link rel="stylesheet" href="./assets/css/slick.min.css" />
        <script
          type="text/javascript"
          src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>
      </Head>
      <div
        style={{ width: "150px", cursor: "pointer" }}
        id="google_translate_element"
        onClick={googleTranslateElementInit}
      >
        Google Translate
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
