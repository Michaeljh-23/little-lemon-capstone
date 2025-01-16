import { NavLink } from "react-router";

const Cta = () => {
  return (
    <div className="center-flex-col y-padding-lg container">
      <h2 className="yellow-text">Getting Hungry?</h2>
      <p className="white-text">
        It's your lucky day! We take reservations and are ready to serve you a
        delicious meal. Book your table today and enjoy a taste of something
        special!
      </p>
      <NavLink to="/booking" className="">
        <button>Reservations</button>
      </NavLink>
    </div>
  );
};

export default Cta;
