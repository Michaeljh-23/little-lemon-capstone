import { NavLink } from "react-router";

const Hero = () => {
  return (
    <div class="grid-container top-padding-lg">
      <div class="image-column">
        <img src="restaurant.jpg" alt="Interior" className="center-img" />
      </div>
      <div class="text-column">
        <h1 className="yellow-text">Little Lemon</h1>
        <div className="gap-4 white-text">
          <h3>Center City, Chicago</h3>
          <p>
            <span>
              Little Lemon is your new favorite charming neighborhood bistro
              that serves simple food and classic cocktails in a lively but
              casual environment. We proudly feature a locally-sourced menu and
              have specials daily.
            </span>
          </p>
          <NavLink to="/booking" className="w-fit">
            <button>Book a Table</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Hero;
