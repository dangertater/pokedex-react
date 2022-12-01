import React from "react"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { TableBody } from "@mui/material"

//TODO add the other
export default function PokeTable(props) {
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 350 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Pokemon</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.data.results.map((p) => {
							return (
								<TableRow key={p.name}>
									<TableCell>
										{p.name} - {p.url}
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
//this is a garbage line of code delete me 2
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
