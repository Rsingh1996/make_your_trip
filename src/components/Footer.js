import "./FooterStyles.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Make Your Trip</h1>
          <pa>Choose Your Favourite Destination</pa>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="https://aweather-app.herokuapp.com/">Weather App</a>
          <a href="https://rsingh1996.github.io/tic-tac-toe/">Tic-Tac-Toe</a>
          <a href="https://rsingh1996.github.io/counter-app/">Counter App</a>
          <a href="https://rsingh1996.github.io/Color-Palette/">
            Color-Palette
          </a>
        </div>
        <div>
          <h4>Comminity</h4>
          <a href="https://github.com/Rsingh1996">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
