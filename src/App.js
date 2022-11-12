import React from "react";
import CustomRoutes from "./Routes";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
function App() {
  return (
    <>
      <CustomRoutes
        components={[
          { item: <Home />, path: "/" },
          { item: <PlaceToStay />, id: 2, path: "/place_to_Stay" },
        ]}
      />
    </>
  );
}

export default App;
