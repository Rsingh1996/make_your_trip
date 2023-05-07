import "./TripStyles.css";
import { Trip } from "./Trip";

export const TripData = (props) => {
  return (
    <div className="tripData-card">
      <div className="tripData-image">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading} </h4>
      <p>{props.text} </p>
    </div>
  );
};
