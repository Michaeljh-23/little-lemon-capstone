import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="screen-cover">
      <h1>
        Sorry, these pages were outside of the project requirements. Check out
        the{" "}
        <NavLink to="/reservations" className="" activeClassName="active">
          Order Online
        </NavLink>{" "}
        page!
      </h1>
      <p>
        Or return back{" "}
        <NavLink to="/" className="" activeClassName="active">
          Home
        </NavLink>
      </p>
    </div>
  );
};
export default NotFound;
