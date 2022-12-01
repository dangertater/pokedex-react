import React, { useState } from "react"

export default function UseFetchMoreInfoButton(props) {
	let [moreData, setMoreData] = useState(null)
	let indyPokemonName = props.name
	console.log(indyPokemonName)
	const fetchMoreData = (url) => {
		fetch(url)
			.then((res) => {
				return res.json
			})
			.then((returnedData) => {
				return setMoreData(returnedData)
			})
	}
	//as seen in the console, 'props.moreData' === the url i want for each indy pokemon
	//----but then I try to onclick fetch with 'props.moreData' and it says nah
	console.log("moreinfo props", props.moreData)
	return (
		<button
			onClick={(e) => {
				fetchMoreData(props.moreData)
			}}
		>
			more info
		</button>
	)
}
