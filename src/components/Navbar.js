import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../configure";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

function Navbar() {
  const [clicked, setClicked] = React.useState(false);
  const { isLoggedIn, logoutUser } = useFirebase();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log("User logged out");
      // Redirect to the desired page or perform any necessary actions after logout
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">MakeYourTrip</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.filter((item) => item.title !== "Sign Up").map(
          (item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          )
        )}
        {isLoggedIn ? (
          <li>
            <button className="nav-links" onClick={handleLogout}>
              <i className="fa-solid fa-user-minus"></i>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link className="nav-links" to="/signup">
              <i className="fa-solid fa-user-plus"></i>
              Sign Up
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
