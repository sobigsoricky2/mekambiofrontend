import Head from "next/head";
import Link from "next/link";
import React from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";

const Submitted = () => {
  return (
    <>
      <Head>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </Head>
      <Layout>
      <Banner/>
      <div className="py-4 d-flex justify-content-center align-items-center ">
  <div>
    <div className="mb-4 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-success"
        width={75}
        height={75}
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </svg>
    </div>
    <div className="text-center">
      <h1>Thank You !</h1>
      <p>Your Form is  submitted succesfully</p>
      <Link href="/" className="btn btn-primary">Back Home</Link>
    </div>
  </div>
</div>

      </Layout>
   
    </>
  );
};

export default Submitted;
