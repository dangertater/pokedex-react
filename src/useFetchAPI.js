import { useState } from "react"

let useFetchAPI = () => {
	let [pokemon, setPokemon] = useState([])
	let [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon")
	const fetchData = () => {
		if (nextUrl === null) {
			return console.log("no more urls")
		}
		fetch(nextUrl)
			.then((res) => {
				return res.json()
			})
			.then((returnedData) => {
				setPokemon([...pokemon, ...returnedData.results])
				setNextUrl(returnedData.next)
			})
	}
	return [pokemon, fetchData]
}
export default useFetchAPI
