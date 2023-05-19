import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/12.jpg";
import { Destination } from "../components/Destination";
import { Trip } from "../components/Trip";
import { InternationalTrip } from "../components/InternationalTrip";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <InternationalTrip />
      <Footer />
    </>
  );
}

export default Home;
