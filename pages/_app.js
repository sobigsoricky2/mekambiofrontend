import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress



//Route Events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {

  
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
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" async></script>
              <script async>
              new WOW().init();
              </script>

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
        Change Languge
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
