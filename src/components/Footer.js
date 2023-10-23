import "./FooterStyles.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Make Your Trip</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div>
          <a href="/make_your_trip">
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
          <a href="https://rsingh1996.github.io/Simon-Game/">Simon-Game</a>
          <a href="https://rsingh1996.github.io/tic-tac-toe/">Tic-Tac-Toe</a>
          <a href="https://rsingh1996.github.io/counter-app/">Counter App</a>
          <a href="https://rsingh1996.github.io/Color-Palette/">
            Color-Palette
          </a>
        </div>
        <div>
          <h4>Comminity</h4>
          <a href="https://github.com/Rsingh1996">Github</a>
          <a href="/make_your_trip">Issues</a>
          <a href="/make_your_trip">Project</a>
          <a href="/make_your_trip">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/make_your_trip">Support</a>
          <a href="/make_your_trip">Troubleshooting</a>
          <a href="/make_your_trip">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/make_your_trip">Terms of Service</a>
          <a href="/make_your_trip">Privacy Policy</a>
          <a href="/make_your_trip">License</a>
        </div>
      </div>
    </div>
  );
};
