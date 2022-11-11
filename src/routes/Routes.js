import React from "react";
//custom routes that receive props from App.js and render the component
import { Routes, Route } from "react-router-dom";

const CustomRoutes = ({ components }) => {
  //components is an array of objects that contain the path and component
  //item are the component
  //id is individual id for each component
  //path is the path for each component
  return (
    <Routes>
      {components.map(({ item, path }, index) => {
        return <Route key={index} path={path} element={item} />;
      })}
    </Routes>
  );
};

export default CustomRoutes;
