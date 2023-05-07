import { DestinationData } from "./DestinationData";
import "./DestinationStyles.css";
import Goa1 from "../assets/1.goa.jpg";
import Manali2 from "../assets/2.manali.jpg";
import Goa3 from "../assets/3.goa.jpg";
import Kerala1 from "../assets/1.kerala.jpg";
import Kerala2 from "../assets/2.kerala.jpg";
import Manali4 from "../assets/4.manali.jpg";

export const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-destination"
        heading="Kullu Manali"
        subHeading="The land of snow clad mountains."
        text="Kullu and Manali are popular tourist destinations located in the northern Indian state of Himachal Pradesh. Kullu is known for its temples, scenic beauty, and adventure sports such as trekking, rafting, and paragliding. Manali, on the other hand, is famous for its breathtaking scenery, culture, and adventure activities such as skiing, trekking, and mountaineering. Popular attractions include temples, hot springs, Rohtang Pass, and Solang Valley. Together, they offer a unique blend of natural beauty, adventure, and culture, making them a must-visit destination for anyone looking to experience the Himalayas."
        img1={Manali2}
        img2={Manali4}
      />
      <DestinationData
        className="first-destination-revers"
        heading="Goa"
        subHeading="The Land of Carnivals.."
        text="Goa is a beautiful state on the western coast of India, known for its stunning beaches, vibrant culture, and colonial architecture. With golden sands, clear waters, and palm trees swaying in the breeze, the beaches of Baga, Anjuna, and Palolem are particularly popular with tourists. The state's rich history and culture are reflected in its many historic churches, temples, and forts, including the UNESCO World Heritage Site of Old Goa. Goa is also famous for its delicious cuisine, featuring a variety of seafood, spicy curries, and sweet desserts. With its natural beauty, rich culture, and delicious food, Goa is a must-visit destination for anyone seeking a tropical paradise."
        img1={Goa1}
        img2={Goa3}
      />
      <DestinationData
        className="first-destination"
        heading="Kerala"
        subHeading="The God's Own Country."
        text="Come and experience the mesmerizing beauty of Kerala, where lush green landscapes, serene backwaters, and pristine beaches await you. Immerse yourself in the rich culture and traditions of this magical land, and witness the captivating art forms and festivals that are unique to Kerala.
        Don't miss out on exploring the iconic backwaters of Alleppey, where you can relax on a houseboat and take in the stunning views of the surrounding nature. Take a stroll through the tea gardens of Munnar, and savor the aroma of fresh tea leaves while gazing at the misty mountains.
For adventure seekers, head to Wayanad, where you can go trekking through the dense forests and spot exotic wildlife. And let's not forget about the golden sand beaches of Kovalam, where you can soak up the sun and enjoy water sports."
        img1={Kerala1}
        img2={Kerala2}
      />
    </div>
  );
};
