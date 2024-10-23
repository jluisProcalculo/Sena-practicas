import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes, routesExplore } from "../Utils/routes";
import { ContextGlobal } from "../Context/globalContext";

const Navbar = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="navbar_container">
      <Link to={`${routes.home}`}>
        <button className="btn_navbar">
          <img
            className="img_navbar principal_icon"
            src="/principal-navbar.svg"
          />
        </button>
      </Link>
      <hr aria-orientation="horizontal" className="hr_line" />
      <Link to={""}>
        <button className="btn_navbar">
          <img className="img_navbar" src="/satellite.svg" />
          <p className="text_icon_navbar">New</p>
        </button>
      </Link>
      {state.aoi !== "" ? (
        <Link
          to={`${routes.explore}/${routesExplore.commercial}/aoi=${state.aoi}`}
        >
          <button className="btn_navbar">
            <img className="img_navbar" src="/earth-existing-image.svg" />
            <p className="text_icon_navbar">Explore</p>
          </button>
        </Link>
      ) : (
        <Link to={`${routes.explore}`}>
          <button className="btn_navbar">
            <img className="img_navbar" src="/earth-existing-image.svg" />
            <p className="text_icon_navbar">Explore</p>
          </button>
        </Link>
      )}
      <Link to={""}>
        <button className="btn_navbar">
          <img className="img_navbar" src="/analytics.svg" />
          <p className="text_icon_navbar">Analytics</p>
        </button>
      </Link>
      <hr aria-orientation="horizontal" className="hr_line" />
      <Link to={""}>
        <button className="btn_navbar">
          <img className="img_navbar" src="/orders.svg" />
          <p className="text_icon_navbar">Orders</p>
        </button>
      </Link>
      <Link to={""}>
        <button className="btn_navbar">
          <img className="img_navbar" src="/myAOI.svg" />
          <p className="text_icon_navbar">Areas</p>
        </button>
      </Link>
      <Link to={""}>
        <button className="btn_navbar">
          <img className="img_navbar" src="/shopping-cart.svg" />
          <p className="text_icon_navbar">Cart</p>
        </button>
      </Link>
      <Link to={""}>
        <button className="btn_navbar">
          <img className="img_navbar" src="/profile.svg" />
          <p className="text_icon_navbar">Profile</p>
        </button>
      </Link>
      <hr aria-orientation="horizontal" className="hr_line" />
      <Link to={"https://www.procalculo.com/"}>
        <button className="btn_navbar btn_navbar_us">
          <p>US</p>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
