import React from "react";
import "./homepage.styles.scss";

import Directory from "../../components/directory/Directory.js";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
