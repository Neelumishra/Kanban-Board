import React from "react";

import Discription from "../Discription";
import Modal from "../Modal/Modal";


function Carddetails(props) {
  return (
    <div>
      <Modal onClose={() => props.onClose()}>
        <Discription/>
      </Modal>
    </div>
  );
}

export default Carddetails;
