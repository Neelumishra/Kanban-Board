import React from "react";
import Styles from "./modal.module.css";

function Modal(props) {
  return (
    <div
      className={Styles.modal}
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className={Styles.modal_container}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
