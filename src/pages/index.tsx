import Link from "next/link";
import Navbar from "../components/Organisms/Navbar";
import Layout from "../components/Templates/Layout/Layout";
import HeroSection from "../components/Organisms/heroSection";
import Works from "../components/Organisms/workSection";
import Service from "../components/Organisms/serviceSection";
import Costumer from "../components/Organisms/Costumers";
import OurTeam from "../components/Organisms/OurTeam";
import Career from "../components/Organisms/Career";
import Contact from "../components/Organisms/Contact";
import Footer from "../components/Atoms/Footer";

const IndexPage = () => (
  <Layout title="Home">
    <div className="mt-[100px] h-screen box-border ">
      <HeroSection />
      <Works />
      <Service />
      <Costumer />
      <OurTeam />
      <Career />
      <Contact />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
