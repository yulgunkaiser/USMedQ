import React from "react";
import "./TopBanner.css";

const TopBanner: React.FC = () => (
  <div className="topbanner">
    <a href="https://www.google.com" target="_blank" rel="noreferrer">
      <img
        src="./src/images/Banner.png"
        alt="Banner"
        className="w-full h-auto max-h-[190px] object-contain"
      />
    </a>
  </div>
);

export default TopBanner;
