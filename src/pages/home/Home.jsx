import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Statistics from "../../components/Statistics";
import OurProducts from "../../components/OurProducts";
import AksiyaProducts from "../../components/AksiyaProducts";
import Technologies from "../../components/Technologies";
import AboutUs from "../../components/AboutUs";
import ZakazDone from "../../components/modals/ZakazDone";
import Zakaz from "../../components/modals/Zakaz";
import Address from "../../components/Address";
import Footer from "../../components/Footer";
import { useState } from "react";

import "../home/_Home.scss";

function Home() {
  const [openZakaz, setOpenZakaz] = useState(false);
  const [openZakazDone, setOpenZakazDone] = useState(false);
  return (
    <div>
      <section className="hero__full">
        <Header setOpenZakaz={setOpenZakaz} />

        <Hero />
      </section>
      <Statistics />

      <div id="katalog">
        <OurProducts />
      </div>
      <div id="aksiya">
        <AksiyaProducts />
      </div>
      <Technologies />
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="address">
        <Address />
      </div>
      <div id="aloqa">
        <Footer />
      </div>
      {openZakaz && (
        <Zakaz
          setOpenZakaz={setOpenZakaz}
          setOpenZakazDone={setOpenZakazDone}
        />
      )}
      {openZakazDone && <ZakazDone setOpenZakazDone={setOpenZakazDone} />}
    </div>
  );
}

export default Home;
