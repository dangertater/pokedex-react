// import React from "react" - do i need?
import { useState } from "react"

let useFetchAPI = () => {
	let [data, setData] = useState(null)

	const fetchData = (url) => {
		fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((returnedData) => {
				return setData(returnedData)
			})
	}
	return [data, fetchData]
}
export default useFetchAPI
