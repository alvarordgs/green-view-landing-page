import React from "react";

function Main() {
  return (
    <div className="flex justify-center items-center lg:h-screen h-full lg:p-8 p-4 bg-gradient">
      <div className="lg:bg-gray-100 p-16 rounded-2xl w-[60rem]">
        <div className="flex flex-col items-center gap-8 lg:max-w-[40rem] lg:mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="./assets/green-view-logo.png"
              alt="Green View app logo"
              className="max-w-[14rem] block self-center"
            />

            <h1 className="flex flex-col gap-1 text-3xl text-gray-600 font-display max-lg:text-2xl">
              <strong className="text-primary-1">
                Sua plantação saudável, você feliz
              </strong>{" "}
              Identifique pestes com facilidade
            </h1>
          </div>

          <p className="text-gray-800 text-xl max-w-[90%]">
            Baixe agora e se torne um especialista em pestes
          </p>

          <div className="w-[15rem] h-[15rem] rounded-md self-center block">
            <img
              src="./assets/qr-code.svg"
              alt="QR para abaixar o app Green View"
            />
          </div>

          <p className="text-gray-800 text-base">
            Escaneie o QR code ou clique no botão abaixo para baixar
          </p>

          <a
            className="flex w-fit items-center justify-between self-center gap-4 p-3 pr-4 rounded-full bg-primary-1 hover:bg-green-600"
            href="https://expo.dev/artifacts/eas/qn5RYr8sUzhQX3iYjhJzvA.apk"
            target="_blank"
          >
            <img
              src="./assets/down-arrow.svg"
              alt="Ícone de uma seta para baixo"
              className="max-w-[2rem]"
            />
            <span className="text-white text-sm font-medium">Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
