import React, { useState, useEffect, useContext } from "react"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { TableBody } from "@mui/material"
import UseFetchMoreInfoButton from "./UseFetchMoreInfoButton"

export default function PokeTable(props) {
	let [moreData, setMoreData] = useState(null)
	const fetchMoreData = (url) => {
		fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((returnedData) => {
				return setMoreData(returnedData)
			})
	}
	// let abilitiesArray = []
	let getAbilitiesOutOfMoreData = (moreData) => {
		let abilities = moreData.abilities
		return abilities
	}
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 350 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Pokemon</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Abilities</TableCell>
							<TableCell>Coolness</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.data.results.map((p) => {
							return (
								<TableRow
									key={p.name}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell key={p.name} component="th" scope="row">
										{p.name}
										<UseFetchMoreInfoButton
											pURL={p.url}
											name={p.name}
											fetchMoreData={fetchMoreData}
										></UseFetchMoreInfoButton>
									</TableCell>
									{moreData === null ? (
										<div>NoData</div>
									) : (
										<TableCell>
											asdf
											{/* {getAbilitiesOutOfMoreData(moreData)}
											{console.log("pokeTable moreData", moreData)} */}
										</TableCell>
									)}
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
// 	<PokemonAttributeCell moreData={moreData} />

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
