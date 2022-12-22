import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Advertise from "../components/LandingPage/Advertise";
import CatagoriesSec from "../components/LandingPage/CatagoriesSec";

import FeaturesSec from "../components/LandingPage/FeaturesSec";
import FeaturesSec2 from "../components/LandingPage/FeaturesSec2";
import Hero from "../components/LandingPage/Hero";
import TeamLanding from "../components/LandingPage/TeamLanding";
import VideoSection from "../components/LandingPage/VideoSection";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(process.env.GOOGLE_PRIVATE_KEY);
  return (
    <div className={styles.container}>
      <Head>
        
        <meta name="description" content="" />
      
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>meKambio - Home</title>

        
      </Head>

      <Layout>
        <Hero />
        <CatagoriesSec/>
        <VideoSection />
        <FeaturesSec />
        <FeaturesSec2 />
        <TeamLanding />
        <Advertise />
      </Layout>
    </div>
  );
}
