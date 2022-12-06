// import React, { useState } from "react"
import useFetchAPI from "./useFetchAPI"
import PokeTable from "./PokeTable"

function App() {
	const [pokemon, fetchData] = useFetchAPI()

	return (
		<div className="App">
			<header className="App-header"></header>
			<h1>pokedex</h1>
			{pokemon === null ? (
				<div>No Data</div>
			) : (
				<PokeTable pokemon={pokemon} fetchData={fetchData}></PokeTable>
			)}
			<button
				onClick={(e) => {
					fetchData()
				}}
			>
				fetch api
			</button>
		</div>
	)
}

export default App
