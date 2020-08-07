import React from "react";
import ReactPlayer from "react-player";

const Covid = () => {
  return (
    <div>
      <h3 className="text-left">What is COVID-19?</h3>
      <ReactPlayer
        width="1040px"
        height="680px"
        controls
        url="https://www.youtube.com/watch?v=OZcRD9fV7jo"
      />
    </div>
  );
};

export default Covid;
