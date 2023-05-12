import React from 'react'
import Styles from './Modal.module.css'


 function Modal(props) {

  const handleModalClick= (event) => {

  }
  return (
	<div className={Styles.modal} onClick={handleModalClick}>
		<div className={Styles.modal_container} onClick={  }>
      {props.children}
    </div>
		
   </div>
  )
}

export default Modal