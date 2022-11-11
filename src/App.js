import React from "react";
import CustomRoutes from "./routes/Routes";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <CustomRoutes
        components={[
          { item: <Home />, path: "/" },
          { item: <h1>About</h1>, id: 2, path: "/about" },
          { item: <h1>Contact</h1>, id: 3, path: "/contact" },
        ]}
      />
    </>
  );
}

export default App;
