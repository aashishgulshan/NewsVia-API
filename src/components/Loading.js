import React from "react";
import loading from "../assets/loading1.gif";

function Loading() {
  return (
    <div className=" min-h-[92vh]">
      <img className="mx-auto rounded-lg m-5" src={loading} alt=".." />
    </div>
  );
}

export default Loading;
