import React, { useState, useRef } from "react"
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
	let observer = useRef()
	let lastPokemonElementRef = (node) => {
		if (observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				props.fetchData()
			}
		})
		if (node) {
			observer.current.observe(node)
		}
	}

	const fetchMoreData = (url) => {
		return fetch(url)
			.then((res) => {
				return res.json()
			})
			.then((returnedData) => {
				setMoreData(returnedData)
				return returnedData
			})
	}
	console.log("outside func observer", observer.current)

	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 350 }} aria-label="simple table">
					{/* table labels */}
					<TableHead>
						<TableRow>
							<TableCell>Pokemon</TableCell>
							<TableCell>Abilities</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Coolness</TableCell>
						</TableRow>
					</TableHead>
					{/* table of pokemon*/}
					<TableBody>
						{props.pokemon.map((p, index) => {
							if (props.pokemon.length === index + 1) {
								return (
									<TableRow
										key={p.name}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										ref={lastPokemonElementRef}
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
											<TableCell p={p}>
												{moreData.name === p.name
													? moreData.abilities[0].ability.name
													: null}
											</TableCell>
										)}
										{moreData === null ? (
											<div>NoData</div>
										) : (
											<TableCell>
												{moreData.name === p.name
													? moreData.types[0].type.name
													: null}
											</TableCell>
										)}
										{moreData === null ? (
											<div>NoData</div>
										) : (
											<TableCell>
												{moreData.name === "oddish" ? (
													<div>super fucking cool</div>
												) : null}
											</TableCell>
										)}
									</TableRow>
								)
							} else {
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
											<TableCell p={p}>
												{moreData.name === p.name
													? moreData.abilities[0].ability.name
													: null}
											</TableCell>
										)}
										{moreData === null ? (
											<div>NoData</div>
										) : (
											<TableCell>
												{moreData.name === p.name
													? moreData.types[0].type.name
													: null}
											</TableCell>
										)}
										{moreData === null ? (
											<div>NoData</div>
										) : (
											<TableCell>
												{moreData.name === "oddish" ? (
													<div>super fucking cool</div>
												) : null}
											</TableCell>
										)}
									</TableRow>
								)
							}
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
