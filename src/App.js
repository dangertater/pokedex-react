// import React, { useState } from "react"
import useFetchAPI from "./useFetchAPI"
import PokeTable from "./PokeTable"

function App() {
	const [data, fetchData] = useFetchAPI()

	return (
		<div className="App">
			<header className="App-header"></header>
			<h1>pokedex</h1>
			{data === null ? <div>No Data</div> : <PokeTable data={data}></PokeTable>}
			<button
				onClick={(e) => {
					fetchData("https://pokeapi.co/api/v2/pokemon")
				}}
			>
				fetch api
			</button>
		</div>
	)
}

export default App
