import React from "react";
import "./homepage.styles.scss";

import Directory from "../../components/directory/Directory.js";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
