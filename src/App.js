import React from "react";
import CustomRoutes from "./Routes";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
import WorkInProgress from "./pages/WorkInProgress";
function App() {
  return (
    <>
      <CustomRoutes
        components={[
          { item: <Home />, path: "/" },
          { item: <PlaceToStay />, id: 2, path: "/place_to_Stay" },
          { item: <WorkInProgress />, id: 3, path: "*" },
        ]}
      />
    </>
  );
}

export default App;
