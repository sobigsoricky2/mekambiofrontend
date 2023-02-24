import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useState } from "react";
import Layout from "../../components/Layout";

const Index = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  console.log(formData);

  const handleFormdataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const res2 = await fetch("https://formsubmit.co/ajax/info@mekambio.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res2.status == 200) {
        router.push("/solicitud-de-informacion/submitted");
      }
    } catch (error) {
      alert("Some Error occured");
      console.log(error);
    }
  };
  return (
    <>
      {/* <Head><script src="https://cdn.tailwindcss.com"></script></Head> */}

      <Layout>
        <div className="relative">
          <img
            src="/assets/images/banner.jpg"
            className="absolute  object-cover w-full h-full"
            alt=""
          />
          <div
            className="relative bg-opacity-[0.85] bg-[#081a55]"
            style={{ borderBottom: "2px solid white" }}
          >
            <svg
              className="absolute inset-x-0 bottom-0 text-white "
              viewBox="0 0 1160 163"
              style={{ borderBottom: "5px solid white", margin: "-15px" }}
            >
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              />
            </svg>

            <div className="divWave"></div>
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Únete al progreso y la evolución profesional
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                    Impulsa tu evolución profesional y la de tu equipo, reduce
                    la insatisfacción laboral y el bajo rendimiento e incrementa
                    el desarrollo profesional, el liderazgo y la progresión
                    laboral tuya y la de tu equipo.
                  </p>
                </div>
                <div className=" max-w-xl xl:px-8 md:w-2/5 w-full mt-4">
                  <div className="bg-white rounded shadow-2xl p-4 ">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      {/* Sign up for updates */}
                    </h3>
                    <form onSubmit={(e) => handleFormDataSubmit(e)}>
                      <div className="flex gap-2">
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="Nombre"
                            className="inline-block mb-1 font-medium"
                          >
                            Nombre*
                          </label>
                          <input
                            required
                            onChange={(e) => handleFormdataChange(e)}
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
                            id="Nombre"
                            name="Nombre"
                          />
                        </div>
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="Teléfono"
                            className="inline-block mb-1 font-medium"
                          >
                            Teléfono*
                          </label>
                          <input
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
                            id="Teléfono"
                            name="Teléfono"
                            onChange={(e) => handleFormdataChange(e)}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="email"
                            className="inline-block mb-1 font-medium"
                          >
                            Email
                          </label>
                          <input
                            required=""
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            onChange={(e) => handleFormdataChange(e)}
                          />
                        </div>
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="Empresa"
                            className="inline-block mb-1 font-medium"
                          >
                            Empresa
                          </label>
                          <input
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
                            id="Empresa"
                            name="Empresa"
                            onChange={(e) => handleFormdataChange(e)}
                          />
                        </div>
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="Solicitud"
                          className="inline-block mb-1 font-medium"
                        >
                          Solicitud*
                        </label>
                        <select
                          required
                          onChange={(e) => handleFormdataChange(e)}
                          type=""
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
                          id="Solicitud"
                          name="Solicitud"
                        >
                          <option value="Selecciona una opción" defaultValue>
                            Selecciona una opción
                          </option>
                          <option value="Programa Intensivo">
                            Programa Intensivo
                          </option>
                          <option value="Servicios corporativos">
                            Servicios corporativos
                          </option>
                          <option value="Otros">Otros</option>
                        </select>
                      </div>

                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="Comentarios"
                          className="inline-block mb-1 font-medium"
                        >
                          Comentarios
                        </label>
                        <textarea
                          type="text"
                          className="flex-grow w-full  px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none  focus:outline-none focus:shadow-outline"
                          id="Comentarios"
                          name="Comentarios"
                          onChange={(e) => handleFormdataChange(e)}
                          placeholder="Añade una breve descripción del motivo de tu solicitud."
                        />
                      </div>

                      <div className="mt-4 mb-2 sm:mb-4">
                        <button type="submit" className="theme-btn w-full">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="partner-section rel z-1  pt-50 rpt-90  rpb-55">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="categories-content mb-50 wow fadeInRight delay-0-2s animated animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title-two">
                      Top Experts and Top Companies
                    </span>
                    <h2>Algunas empresas dónde trabajan nuestros Experts </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="https://www.wemeanbusinesscoalition.org/wp-content/uploads/2019/09/Salesforce-LOGO.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="https://oroinc.com/orocrm/wp-content/uploads/sites/8/2017/06/Zendesk_logo_wordmark.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="https://static.borngroup.com/uploads/2020/09/Logo-Mirakl.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25 text-center">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-50"
                        src="https://th.bing.com/th/id/R.8126361d4fe00f6b67cacd6b751998d4?rik=eWb%2fNt6IvMli4g&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f05%2frainbow-apple-logo.png&ehk=Dk5yXp4Wc0DC4oScBdA9VamWYAANMF5ozQGYD8uAkuI%3d&risl=&pid=ImgRaw&r=0"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-section rel z-1  pt-50 rpt-90 rpb-55">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="logo-item w-25">
                    <Link href="https://www.upc.edu/ca">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/UPC.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://epseb.upc.edu/ca">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/EPSEB.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.eae.es">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/EAE Business School.PNG"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.threepoints.com">
                      <img
                        loading="lazy"
                        className="w-50"
                        src="/assets/images/client-logos/Three Points, The school for Digital Business.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.inesdi.com">
                      <img
                        loading="lazy"
                        className="w-75"
                        src="/assets/images/client-logos/Inesdi Digital Business School.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.deustoformacion.com">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/DFO-Logotipo-Pantalla.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="categories-content mb-50 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title-two">Global Partners</span>
                    <h2>Empresas que confían en nosotros</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: #e5e7eb;
        }
        ::after,
        ::before {
          --tw-content: "";
        }
        html {
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          -moz-tab-size: 4;
          tab-size: 4;
          font-family: ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";
          font-feature-settings: normal;
        }
        body {
          margin: 0;
          line-height: inherit;
        }
        hr {
          height: 0;
          color: inherit;
        }
        abbr:where([title]) {
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }
        a {
          color: inherit;
          text-decoration: inherit;
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 1em;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          font-weight: inherit;
          line-height: inherit;
          color: inherit;
          margin: 0;
          padding: 0;
        }
        button,
        select {
          text-transform: none;
        }
        [type="button"],
        [type="reset"],
        [type="submit"],
        button {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }
        :-moz-focusring {
          outline: auto;
        }
        :-moz-ui-invalid {
          box-shadow: none;
        }
        progress {
          vertical-align: baseline;
        }
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        summary {
          display: list-item;
        }
        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
          margin: 0;
        }
        fieldset {
          margin: 0;
          padding: 0;
        }
        legend {
          padding: 0;
        }
        menu,
        ol,
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        textarea {
          resize: vertical;
        }
        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          color: #9ca3af;
        }
        [role="button"],
        button {
          cursor: pointer;
        }
        :disabled {
          cursor: default;
        }
        audio,
        canvas,
        embed,
        iframe,
        img,
        object,
        svg,
        video {
          display: block;
          vertical-align: middle;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        [hidden] {
          display: none;
        }
        *,
        ::before,
        ::after {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x: ;
          --tw-pan-y: ;
          --tw-pinch-zoom: ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal: ;
          --tw-slashed-zero: ;
          --tw-numeric-figure: ;
          --tw-numeric-spacing: ;
          --tw-numeric-fraction: ;
          --tw-ring-inset: ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur: ;
          --tw-brightness: ;
          --tw-contrast: ;
          --tw-grayscale: ;
          --tw-hue-rotate: ;
          --tw-invert: ;
          --tw-saturate: ;
          --tw-sepia: ;
          --tw-drop-shadow: ;
          --tw-backdrop-blur: ;
          --tw-backdrop-brightness: ;
          --tw-backdrop-contrast: ;
          --tw-backdrop-grayscale: ;
          --tw-backdrop-hue-rotate: ;
          --tw-backdrop-invert: ;
          --tw-backdrop-opacity: ;
          --tw-backdrop-saturate: ;
          --tw-backdrop-sepia: ;
        }
        ::-webkit-backdrop {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x: ;
          --tw-pan-y: ;
          --tw-pinch-zoom: ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal: ;
          --tw-slashed-zero: ;
          --tw-numeric-figure: ;
          --tw-numeric-spacing: ;
          --tw-numeric-fraction: ;
          --tw-ring-inset: ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur: ;
          --tw-brightness: ;
          --tw-contrast: ;
          --tw-grayscale: ;
          --tw-hue-rotate: ;
          --tw-invert: ;
          --tw-saturate: ;
          --tw-sepia: ;
          --tw-drop-shadow: ;
          --tw-backdrop-blur: ;
          --tw-backdrop-brightness: ;
          --tw-backdrop-contrast: ;
          --tw-backdrop-grayscale: ;
          --tw-backdrop-hue-rotate: ;
          --tw-backdrop-invert: ;
          --tw-backdrop-opacity: ;
          --tw-backdrop-saturate: ;
          --tw-backdrop-sepia: ;
        }
        ::backdrop {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x: ;
          --tw-pan-y: ;
          --tw-pinch-zoom: ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal: ;
          --tw-slashed-zero: ;
          --tw-numeric-figure: ;
          --tw-numeric-spacing: ;
          --tw-numeric-fraction: ;
          --tw-ring-inset: ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur: ;
          --tw-brightness: ;
          --tw-contrast: ;
          --tw-grayscale: ;
          --tw-hue-rotate: ;
          --tw-invert: ;
          --tw-saturate: ;
          --tw-sepia: ;
          --tw-drop-shadow: ;
          --tw-backdrop-blur: ;
          --tw-backdrop-brightness: ;
          --tw-backdrop-contrast: ;
          --tw-backdrop-grayscale: ;
          --tw-backdrop-hue-rotate: ;
          --tw-backdrop-invert: ;
          --tw-backdrop-opacity: ;
          --tw-backdrop-saturate: ;
          --tw-backdrop-sepia: ;
        }

        .absolute {
          position: absolute;
        }
        .relative {
          position: relative;
        }
        .inset-x-0 {
          left: 0px;
          right: 0px;
        }
        .bottom-0 {
          bottom: 0px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .my-80 {
          margin-top: 20rem;
          margin-bottom: 20rem;
        }
        .mb-12 {
          margin-bottom: 3rem;
        }
        .mb-6 {
          margin-bottom: 1.5rem;
        }
        .mb-4 {
          margin-bottom: 1rem;
        }
        .mb-1 {
          margin-bottom: 0.25rem;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        .mt-4 {
          margin-top: 1rem;
        }
        .mb-20 {
          margin-bottom: 5rem;
        }
        .inline-block {
          display: inline-block;
        }
        .flex {
          display: flex;
        }
        .inline-flex {
          display: inline-flex;
        }
        .h-full {
          height: 100%;
        }
        .h-12 {
          height: 3rem;
        }
        .w-full {
          width: 100%;
        }
        .max-w-xl {
          max-width: 36rem;
        }
        .max-w-lg {
          max-width: 32rem;
        }
        .flex-grow {
          flex-grow: 1;
        }
        .appearance-none {
          -webkit-appearance: none;
          appearance: none;
        }
        .flex-col {
          flex-direction: column;
        }
        .items-center {
          align-items: center;
        }
        .justify-center {
          justify-content: center;
        }
        .justify-between {
          justify-content: space-between;
        }
        .gap-2 {
          gap: 0.5rem;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .rounded {
          border-radius: 0.25rem;
        }
        .border {
          border-width: 1px;
        }
        .border-gray-300 {
          --tw-border-opacity: 1;
          border-color: rgb(209 213 219 / var(--tw-border-opacity));
        }
        .bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .bg-\[\#081a55\] {
          --tw-bg-opacity: 1;
          background-color: rgb(8 26 85 / var(--tw-bg-opacity));
        }
        .bg-\[\#1b658e\] {
          --tw-bg-opacity: 1;
          background-color: rgb(27 101 142 / var(--tw-bg-opacity));
        }
        .bg-opacity-\[0\.85\] {
          --tw-bg-opacity: 0.85;
        }
        .object-cover {
          object-fit: cover;
        }
        .p-4 {
          padding: 1rem;
        }
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .pt-2 {
          padding-top: 0.5rem;
        }
        .pb-2 {
          padding-bottom: 0.5rem;
        }
        .pt-5 {
          padding-top: 1.25rem;
        }
        .text-center {
          text-align: center;
        }
        .font-sans {
          font-family: ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
            "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol", "Noto Color Emoji";
        }
        .text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .text-base {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .font-bold {
          font-weight: 700;
        }
        .font-semibold {
          font-weight: 600;
        }
        .font-medium {
          font-weight: 500;
        }
        .tracking-tight {
          letter-spacing: -0.025em;
        }
        .tracking-wide {
          letter-spacing: 0.025em;
        }
        .text-white {
          --tw-text-opacity: 1;
          color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        .text-gray-200 {
          --tw-text-opacity: 1;
          color: rgb(229 231 235 / var(--tw-text-opacity));
        }
        .shadow-2xl {
          --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-sm {
          --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-md {
          --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
            0 2px 4px -2px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .transition {
          transition-property: color, background-color, border-color, fill,
            stroke, opacity, box-shadow, transform, filter,
            -webkit-text-decoration-color, -webkit-backdrop-filter;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .duration-200 {
          transition-duration: 200ms;
        }
        .focus\:outline-none:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        @media (min-width: 640px) {
          .sm\:mb-6 {
            margin-bottom: 1.5rem;
          }
          .sm\:mb-2 {
            margin-bottom: 0.5rem;
          }
          .sm\:mb-4 {
            margin-bottom: 1rem;
          }
          .sm\:max-w-xl {
            max-width: 36rem;
          }
          .sm\:p-10 {
            padding: 2.5rem;
          }
          .sm\:text-center {
            text-align: center;
          }
          .sm\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .sm\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .sm\:leading-none {
            line-height: 1;
          }
        }
        @media (min-width: 768px) {
          .md\:w-2\/5 {
            width: 40%;
          }
          .md\:max-w-full {
            max-width: 100%;
          }
          .md\:px-24 {
            padding-left: 6rem;
            padding-right: 6rem;
          }
          .md\:text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
        }
        @media (min-width: 1024px) {
          .lg\:max-w-screen-xl {
            max-width: 1280px;
          }
          .lg\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .lg\:py-20 {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }
        @media (min-width: 1280px) {
          .xl\:mb-0 {
            margin-bottom: 0px;
          }
          .xl\:w-7\/12 {
            width: 58.333333%;
          }
          .xl\:flex-row {
            flex-direction: row;
          }
          .xl\:px-8 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .xl\:pr-16 {
            padding-right: 4rem;
          }
        }

        .theme-btn {
          color: white;
          cursor: pointer;
          font-weight: 800;
          font-size: 17px;
          transition: 0.5s;
          border-radius: 5px;
          align-items: center;
          display: inline-flex;
          justify-content: center;
          padding: 15px 40px 12px;
          background: #1b658e;
        }
        h2 {
          font-size: 45px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .bg-text,
        .coach-filter li,
        .newsletter-radios {
          font-weight: 700;
          color: #262d3d;
          font-family: "Raleway", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Index;
