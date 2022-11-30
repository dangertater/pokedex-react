import React from "react"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { TableBody } from "@mui/material"

let generateIndyPokemon = (name) => {
	return { name }
}
//TODO add the other
export default function PokeTable(props) {
	console.log("props.data.results[0] from PokeTable", props.data.results[0])

	generateIndyPokemon(
		props.data.results.map((indyPokemon) => {
			let justNames = []
			console.log("indyPokemon.name", indyPokemon.name)
			justNames.push(indyPokemon.name)
			console.log("justNames", justNames)
			return indyPokemon.name
		})
	)

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 350 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Pokemon</TableCell>
						{/* <TableCell align="right">Type</TableCell>
						<TableCell align="right">Starting Abilities</TableCell>
						<TableCell align="right">Coolness</TableCell> */}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow></TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

// {
/* <TableCell align="right">{rows()}</TableCell> */
// }

// {rows.map((row) => (
//     <TableRow>
//         <TableCell component="th" scope="row">
//             {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//     </TableRow>
// ))}
