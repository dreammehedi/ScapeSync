import { Helmet } from "@dr.pogodin/react-helmet";
import { Footer } from "../../shared/Footer";
import { Navbar } from "../../shared/Navbar";
import { Hero } from "./components/Hero";
import SiteFeatures from "./components/SiteFeatures";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | ScapeSync</title>
      </Helmet>
      <header
        className="
    w-full !bg-no-repeat !bg-cover !bg-center
    bg-none lg:bg-[url('/hero-bg.png')]
  "
      >
        <Navbar />
        <Hero />
      </header>
      <SiteFeatures />
      <Footer />
    </>
  );
}

export default Home;
