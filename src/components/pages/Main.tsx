import React from "react";

function Main() {
  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <img
            src="./assets/green-view-logo.svg"
            alt="Green View app logo"
            className="w-[4rem] h-[4rem] block"
          />
          <span className="text-2xl text-white font-bold">GreenView</span>
        </div>

        <h1 className="flex flex-col gap-1 text-3xl text-white font-display max-w-[95%]">
          <strong>Healthy Garden, Happy You</strong> Easy Pest Identification App
        </h1>

        <p className="text-white text-xl max-w-[90%]">Download now and become a plant pro.</p>

        <div className="w-[15rem] h-[15rem] bg-white rounded-md self-center">

        </div>
      </div>
    </div>
  );
}

export default Main;
