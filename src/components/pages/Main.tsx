import React from "react";

function Main() {
  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col gap-8 lg:max-w-[96rem]">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="./assets/green-view-logo.png"
            alt="Green View app logo"
            className="max-w-[14rem] block self-center"
          />

          <h1 className="flex flex-col gap-1 text-3xl text-gray-600 font-display">
            <strong className="text-primary-1">
              Healthy Garden, Happy You
            </strong>{" "}
            Easy Pest Identification App
          </h1>
        </div>

        <p className="text-gray-500 text-xl max-w-[90%]">
          Download now and become a plant pro.
        </p>

        <div className="w-[15rem] h-[15rem] bg-primary-1 rounded-md self-center block"></div>

        <p className="text-gray-500 text-base">
          Scan the QR code or click on the button below.
        </p>

        <button className="flex items-center justify-center gap-2 p-3 border-2 rounded-md bg-primary-1">
          <img
            src="./assets/down-arrow.svg"
            alt="Ícone de uma seta para baixo"
            className="max-w-[2rem]"
          />
          <span className="text-white text-sm font-extralight">Download</span>
        </button>
      </div>
    </div>
  );
}

export default Main;
