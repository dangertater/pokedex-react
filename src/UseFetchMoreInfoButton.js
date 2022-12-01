import React, { useState } from "react"
import Button from "@mui/material/Button"

export default function UseFetchMoreInfoButton(props) {
	return (
		<>
			<Button
				onClick={(e) => {
					props.fetchMoreData(props.pURL).then((result) => {
						console.log("result", result)
					})
				}}
				variant="contained"
				size="small"
			>
				more info
			</Button>
		</>
	)
}
