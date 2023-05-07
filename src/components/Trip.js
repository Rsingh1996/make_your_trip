import "./TripStyles.css";
import { TripData } from "./TripData";
import Ooty from "../assets/coorg.jpg";
import Sikkim from "../assets/1.sikkim.jpg";
import Agra from "../assets/2.agra.jpg";

export const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="trip-card">
        <TripData
          image={Ooty}
          heading="Ooty and Coorg Tour"
          text="Experience the breathtaking beauty of Ooty and Coorg, where nature's bounty is on full display. Explore the rolling hills, verdant tea gardens, and gushing waterfalls of Ooty, and indulge in the region's world-famous chocolates.In Coorg, immerse yourself in the fragrance of coffee plantations, visit ancient temples, and go on thrilling treks through the Western Ghats. Discover the unique culture and cuisine of these enchanting hill stations and make unforgettable memories on your journey."
        />
        <TripData
          image={Agra}
          heading="Agra Tour"
          text="Discover the magnificence of Agra, home to one of the Seven Wonders of the World, the Taj Mahal. Immerse yourself in the rich Mughal history and culture as you explore the majestic Agra Fort and other architectural wonders like Fatehpur Sikri. Shop for exquisite handicrafts and relish the mouth-watering Mughlai cuisine. A visit to Agra is an experience that will leave you in awe.Come and experience the timeless beauty of Agra, and create unforgettable memories that will last a lifetime."
        />
        <TripData
          image={Sikkim}
          heading="Darjeeling, Sikkim Tour"
          text="Discover the enchanting beauty of Darjeeling and Sikkim. Admire the stunning views of the Himalayas, indulge in flavorful teas, and explore the vibrant culture of these scenic destinations. Visit the famous Tiger Hill in Darjeeling for a breathtaking sunrise view, and take a ride on the Darjeeling Himalayan Railway. In Sikkim, wander through the quaint town of Gangtok and experience the spiritual ambiance of Rumtek Monastery. Don't miss out on this unforgettable journey."
        />
      </div>
    </div>
  );
};
