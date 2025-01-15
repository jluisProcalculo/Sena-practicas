import { Routes, Route } from "react-router-dom";
import { routes, routesExplore } from "./Utils/routes";
import LayoutNavbar from "./Layout/LayoutNavbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import LayoutExplore from "./Layout/LayoutExplore";
import CommercialData from "./Components/CommercialData";
import OpenData from "./Components/OpenData";
import { useContext } from "react";
import { ContextGlobal } from "./Context/globalContext";
import FormAOI from "./Components/FormAOI";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

function App() {
  const { state } = useContext(ContextGlobal);

  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<LayoutNavbar />}>
          <Route path={routes.home} element={<Home />} />
            <Route path={`${routes.explore}`} element={<LayoutExplore />} >
              <Route element={<ProtectedRoutes aoi={state.aoi} redirectPath={routes.explore} />}>
                <Route path={`${routesExplore.commercial}/:aoi`} element={<CommercialData />} />
                <Route path={`${routesExplore.open}/:aoi`} element={<OpenData />} />
              </Route>
              <Route path={`${routes.explore}`} element={<FormAOI />} />
              <Route path={`${routesExplore.detail}/:id`} element={<Detail />} />
            </Route>
          <Route path={routes.notFound} element={<h1 className="page_not_found">Oops! Error 404 - Page not found.</h1>} />
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
