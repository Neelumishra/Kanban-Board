import React ,{ useState } from "react";
import Carddetails from "./Carddetail/Carddetails";


function Cards({ cardInfo }) {
  const [modalOpen, setModalOpen]= useState(false)
  return (
    <>
    <div onClick={()=>setModalOpen(true)}>
     
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
    </div>
    {modalOpen && <Carddetails  onClose={()=> setModalOpen(false)}/>}
    </>
  );
}

export default Cards;
