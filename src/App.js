import './App.css'
import { useState } from 'react'
import List from './components/List'
import Form from './components/Form'

const INIT_STATE = [
	{
		id:Math.random().toString(),
		name : 'Iphone',
		price: '1200',
		img : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000',
        description : "gjskdfjgjdfgjlsjd"
	},
	{
		id:Math.random().toString(),
		name : 'Samsung',
		price: '800',
		img : 'https://htstatic.imgsmail.ru/pic_image/e7207339a3a8c711f6ed5e59ccb154b5/450/450/1956678/',
        description : "gjskdfjgjdfgjl"
	},
	{
		id:Math.random().toString(),
		name : 'Redmi',
		price: '200',
		img : 'https://mi-shop.com/upload/resize_cache/iblock/55d/445_473_2/55ddafece35c51382253bfdb7ea5bd42.jpg',
        description : "gjskdfjgjdfgj"
	},
	{
		id:Math.random().toString(),
		name : 'Lenovo',
		price : '200',
		img : 'https://drop.ndtv.com/TECH/product_database/images/1020201530509PM_635_lenovo_a6000_shot.jpeg',
        description : "gjskdfjgjdfgjl"
	},
]

function App() {
	const [getData, setGetData] = useState(INIT_STATE)

	const dataHandler = (phonesData) => {
		setGetData([...getData, phonesData])
		console.log(getData)
	}
	return (
		<div className='App'>
			<Form onGetData={dataHandler} />
			<List data={getData} />
		</div>
	)
}

export default App
