import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todolist } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function AddNew({ type, parentId }) {
  const [inputValue, setInputValue] = useState("");
  const [isvisible, setIsvisble] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  function openform() {
    setIsvisble(true);
  }

  function hideform() {
    setIsvisble(false);
  }

  function submithandle(e) {
    e.preventDefault();

    if (inputValue === "") {
      setError(true);
      return;
    }

    if (type) {
      dispatch(
        todolist.actions.addCard({
          id: uuidv4(),
          title: inputValue,
          parentId: parentId,
        })
      );
      setSuccess(true);
    } else {
      dispatch(todolist.actions.onlist({ id: uuidv4(), title: inputValue }));
      setSuccess(true);
    }

    hideform();
    setInputValue("");
  }

  function handleClose() {
    setError(false);
  }

  function handleCloseSuccess() {
    setSuccess(false);
  }

  return (
    <div>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Field cannot be left blank
        </MuiAlert>
      </Snackbar>
      {success && (
        <Snackbar
          open={success}
          onClose={handleCloseSuccess}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MuiAlert severity="success" sx={{ width: "100%" }}>
            {type ? "Card" : "List"} has been Successfully Added
          </MuiAlert>
        </Snackbar>
      )}

      <button
        onClick={openform}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          backgroundColor: "white",
          width: `${type ? "100%" : "15rem"}`,
          padding: "10px",
          color: "black",
          border: "none",
          borderRadius: "10px",
          marginBottom: "3px",
          cursor: "pointer",
        }}
      >
        + Add {type ? "a Card" : "Another List"}
      </button>
      <div
        style={{
          backgroundColor: "#f1f2f4",
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
          width: "auto",
        }}
      >
        {isvisible && (
          <form onSubmit={submithandle}>
            <input
              placeholder={type ? "Enter Task Name" : "Enter List Title.."}
              style={{
                width: type ? "100%" : "13rem",
                textAlign: "center",
                height: "1.5rem",
                marginTop: "0.2rem",
                marginBottom: "5px",
                border: "2px solid #0c66e4",
              }}
              value={inputValue}
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <br />
            <button
              type="submit"
              style={{
                fontWeight: "bold",
                backgroundColor: "#0c66e4",
                padding: "8px",
                color: "white",
                border: "none",
                margin: "0.2rem",
                borderRadius: "4px",
                marginLeft: "3rem",
                cursor: "pointer",
              }}
            >
              {type ? "Add Card" : "Add List"}
            </button>
            <button
              type="submit"
              onClick={hideform}
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                padding: "8px",
                color: "black",
                border: "none",
                borderRadius: "10px",
                margin: "0.2rem",
              }}
            >
              ✖
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddNew;
