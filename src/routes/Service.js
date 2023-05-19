import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/6.jpg";
import { Footer } from "../components/Footer";
import { Trip } from "../components/Trip";
import { Facility } from "../components/Facility";
import { InternationalTrip } from "../components/InternationalTrip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <InternationalTrip />
      <Facility />
      <Footer />
    </>
  );
}

export default Service;
