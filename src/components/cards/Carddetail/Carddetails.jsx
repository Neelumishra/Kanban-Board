import React from 'react'
import Modal from '../../Modal/Modal';
import Discription from '../../Discription'

function Carddetails(props) {
  return (
	<div>
	  <Modal  onClose={()=>props.onClose()}>
		<Discription/>
	  </Modal>
	</div>
  )
}

export default Carddetails;
