import React, { useState } from 'react'
import Select from './Select'
import './List.css'

const List = ({ data }) => {
	const [filteredPhone, setFilteredPhone] = useState('all')

	const filterChangeHandler = (selectedPhoneData) => {
		setFilteredPhone(selectedPhoneData)
	}
	const newArray = data.filter((el) => {
		return el.name === filteredPhone
	})
	return (
		<div>
			<Select onFilter={filterChangeHandler} phone={filteredPhone} />
			<div className='flex'>
				{newArray.map((el, id) => {
					return (
						<div className='list' key={id}>
							<img src={el.img} alt='' />
							<strong>{el.name}</strong> <br />
							<b>{el.price}</b>
							<p>{el.description}</p>
							<button>Delete</button>
						</div>
					)
				})}
				{filteredPhone == "all" && data.map((el, id) => {
					return (
						<div className='list' key={id}>
							<img src={el.img} alt='' />
							<strong>{el.name}</strong> <br />
							<b>${el.price}</b>
							<p>{el.description}</p>
							<button>Delete</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default List
