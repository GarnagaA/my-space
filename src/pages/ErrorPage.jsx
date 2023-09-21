import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        width={150}
        height={150}
        src="../../public/img/emoji-sorry.png"
        alt="emoji-sorry"
      />
      <h4>Упс, что то пошло не по плану ;(</h4>
    </div>
  );
};

export default ErrorPage;
