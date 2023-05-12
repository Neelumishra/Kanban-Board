import React from "react";

function Cards({ cardInfo }) {
  return (
    <p
      style={{
        backgroundColor: "white",
        color: "black",
        height: "2rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      {cardInfo.title}
    </p>
  );
}

export default Cards;
