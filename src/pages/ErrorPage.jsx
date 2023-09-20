import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img width={350} height={350} src="../../public/img" alt="emoji-sorry" />
      <h4>Упс, что то пошло не по плану ;(</h4>
    </div>
  );
};

export default ErrorPage;
