import React from "react"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { TableBody } from "@mui/material"
import UseFetchMoreInfoButton from "./UseFetchMoreInfoButton"
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
							let moreData = p.url
							return (
								<TableRow key={p.name}>
									<TableCell>
										{p.name}
										<UseFetchMoreInfoButton
											pURL={p.url}
											name={p.name}
										></UseFetchMoreInfoButton>{" "}
										- {p.url}
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
