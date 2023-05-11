import React from 'react'
import Styles from './Modal.module.css'


 function Modal(props) {
  return (
	<div className={Styles.modal}>
		<dev className={Styles.modal_content}>
			{props.children}

		</dev>
	  
	</div>
  )
}

export default Modal