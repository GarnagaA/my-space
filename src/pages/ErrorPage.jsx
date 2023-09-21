import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="emoji__wrapper">
        <img
          style={{
            marginTop: "200px",
            borderRadius: "50%",
            boxShadow: "0 5px 20px #371A45",
          }}
          width={200}
          height={200}
          src="/img/interstellar-cry.gif"
          alt="emoji-sorry"
        />
      </div>
      <h4
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "#371A45",
          width: "200px",
          marginTop: 30,
          textAlign: "center",
        }}
      >
        Упс! Что то пошло не по плану ;(
      </h4>
    </div>
  );
};

export default ErrorPage;
