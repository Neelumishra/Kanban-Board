import React ,{useState}from "react";
import "./cards.css"
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { todolist } from "../../store/store";
function Cards({ cardInfo }) {
 
  
 const dispatch = useDispatch();
function handleRemove(index){
   
  dispatch(todolist.actions.onremove(index));
}
  return (
    <>
      <p
        style={{
          backgroundColor: "white",
          color: "black",
          height: "2rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          borderRadius: "10px",
        }}
      >
        <span className="cardcss">
          {" "}
          <Link to={`/${cardInfo.id}`}>{cardInfo.title}</Link>
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleRemove(cardInfo)}
        >
          <DeleteIcon sx={{ color: "gray" }} />
        </span>
      </p>
    </>
  );
}

export default Cards;
