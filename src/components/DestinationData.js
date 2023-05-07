import "./DestinationStyles.css";

export const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="destination-text">
        <h2>{props.heading}</h2>
        <h4>{props.subHeading}</h4>
        <p> {props.text}</p>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
        {/* <img alt="img" src={Manali2} />
          <img alt="img" src={Manali3} /> */}
        <img alt="img" src={props.img2} />
      </div>
    </div>
  );
};
