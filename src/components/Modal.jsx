import React from 'react'
import './Modal.css'
const Modal = (props) => {
	const deleteModal = (e) => {
		setTimeout(() => {
			props.stateModal(false)
		}, 160);
      e.target.parentElement.className = 'divFalseModal';
	}
	return (
		<div>
			<div className= "divModal">
				<h2 onClick={deleteModal} className='deleteModal'>
					x
				</h2>
				<h3 className='modalText'>Вы не заполнили все поля !</h3>
			</div>
		</div>
	)
}

export default Modal
