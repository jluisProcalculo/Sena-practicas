import SearchExplore from "../Components/SearchExplore";
import { Outlet } from "react-router-dom";
import Explore from "../Routes/Explore";
import { useContext } from "react";
import { ContextGlobal } from "../Context/globalContext";

const LayoutExplore = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="left_container">
      {state.stateDetail == false ? (
        <>
          <SearchExplore />
          <Explore />
        </>
      ) : null}
      <Outlet />
    </div>
  );
};

export default LayoutExplore;
