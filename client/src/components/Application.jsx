import React from "react";
import { Route } from "react-router-dom";
import Shop from "./Shop";

const Application = () => {
  return (
    <>
      <Route path="/" exact component={Shop} />
    </>
  );
};

export default Application;
