import React from 'react'
import './Select.css'

const Select = ({ onFilter,phone }) => {
	const fiterChangeHandler = (e) => {
		onFilter(e.target.value)
	}
	return (
		<div className='selectDiv'>
			<select className='selectlistPhone' value={phone} onChange={fiterChangeHandler}>
				<option value='Iphone'>Iphone</option>
				<option value='Samsung'>Samsung</option>
				<option value='Redmi'>Redmi</option>
				<option value='Lenovo'>Lenovo</option>
				<option value="all">Select all</option>
			</select>
		</div>
	)
}

export default Select
