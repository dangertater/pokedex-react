import React from "react"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { TableBody } from "@mui/material"

let generateIndyPokemon = (name, type, startingAbilities, coolness) => {
	return { name, type, startingAbilities, coolness }
}

export default function PokeTable(props) {
	console.log("props.data.results[0] from PokeTable", props.data.results[0])
	let rows = () => {
		generateIndyPokemon(
			props.data.results.map((indyRow) => {
				console.log("indyRow from inside PokeTable", indyRow)
			})
		)
	}
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 350 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Pokemon</TableCell>
						<TableCell align="right">Type</TableCell>
						<TableCell align="right">Starting Abilities</TableCell>
						<TableCell align="right">Coolness</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableCell align="right">{rows()}</TableCell>
				</TableBody>
			</Table>
		</TableContainer>
	)
}
