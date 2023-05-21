import "./TripStyles.css";
import { InternationalTripData } from "./InternationalTripData";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

export const InternationalTrip = () => {
  return (
    <div className="trip">
      <h1>Recent International Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="trip-card">
        <InternationalTripData
          image={Destination1}
          heading="Singapore Tour"
          text=" Experience the melting pot of cultures in the vibrant city-state of Singapore. Enjoy world-class attractions, shopping, dining, and entertainment in this modern and futuristic destination."
          cost="47,800 ₹"
          duration="Approx 2 night 2 day trip"
        />
        <InternationalTripData
          image={Destination2}
          heading="Thailand Tour"
          text="From the bustling streets of Bangkok to the serene beaches of Phuket, Thailand offers a blend of culture, adventure, and relaxation. Indulge in Thai cuisine, explore temples, and immerse in nature."
          cost="42,200 ₹"
          duration="Approx 2 night 1 day trip"
        />
        <InternationalTripData
          image={Destination3}
          heading="Paris Tour"
          text="The City of Love beckons with its romantic streets, stunning architecture, and world-renowned cuisine. Discover museums, fashion boutiques, and iconic landmarks such as the Eiffel Tower."
          cost="72,500 ₹"
          duration="Approx 2 night 3 day trip"
        />
        <InternationalTripData
          image={Destination4}
          heading="New Zealand Tour"
          text="A land of natural wonders, New Zealand boasts spectacular mountains, glaciers, and lakes. Experience adventure sports, Maori culture, and unique wildlife such as kiwis and penguins."
          cost="58,100 ₹"
          duration="Approx 1 night 2 day trip"
        />
        <InternationalTripData
          image={Destination5}
          heading="Bora Bora Tour"
          text="An idyllic paradise surrounded by crystal-clear waters and coral reefs, Bora Bora is the ultimate honeymoon destination. Enjoy water sports, sunsets, and overwater bungalows in this Polynesian paradise."
          cost="95,400 ₹"
          duration="Approx 3 night 2 day trip"
        />
        <InternationalTripData
          image={Destination6}
          heading="London Tour"
          text="The capital of England and the United Kingdom is a global center of culture, history, and entertainment. Explore royal palaces, museums, theaters, and iconic landmarks such as Big Ben and the Tower Bridge"
          cost="65,700 ₹ "
          duration="Approx 2 night 2 day trip"
        />
      </div>
    </div>
  );
};
