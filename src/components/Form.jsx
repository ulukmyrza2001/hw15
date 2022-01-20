import { useState } from 'react'
import BackDrop from './BackDrop'
import './Form.css'
import Modal from './Modal'
const Form = (props) => {
	const [phones, setPhones] = useState({
		name: 'Samsung',
		img: '',
		price: '',
		description: '',
	})
	const [array, setArray] = useState([])

	const phoneInputHandler = (e) => {
		const currentName = e.target.name
		setPhones({ ...phones, [currentName]: e.target.value })
	}
	const [showModal, setShowModal] = useState(false)
	const todoHandler = (e) => {
		e.preventDefault()
		const newData = { ...phones, id: Math.random().toString() }
		if (
			newData.name !== '' &&
			newData.img !== '' &&
			newData.description !== ''
		) {
			setArray([...array, newData])
			props.onGetData(newData)
		} else {
			setShowModal(true)
		
		}
	}
	return (
		<div>
			{showModal && <BackDrop/>}
			<form onSubmit={todoHandler}>
				<h2>Phone Store</h2>
				<select
					className='selectPhone'
					value={phones.name}
					onChange={phoneInputHandler}
					name='name'
				>
					<option value='value'>Samsung</option>
					<option value='Iphone'>Iphone</option>
					<option value='Redmi'>Redmi</option>
					<option value='Lenovo'>Lenovo</option>
				</select>
				<input
					name='img'
					type='url'
					onChange={phoneInputHandler}
					value={phones.img}
					placeholder='URL img'
				/>
				<input
					name='price'
					type='number'
					onChange={phoneInputHandler}
					value={phones.price}
					placeholder='price'
				/>
				<textarea
					name='description'
					cols='30'
					rows='10'
					onChange={phoneInputHandler}
					value={phones.comment}
					placeholder='DESCRIPTION'
				></textarea>
				<button type='submit'>Add</button>
			</form>
			{showModal && <Modal stateModals = {showModal} stateModal = {setShowModal} />}
		</div>
	)
}

export default Form
