import React, { useState } from "react"

export default function UseFetchMoreInfoButton(props) {
	return (
		<>
			<button
				onClick={(e) => {
					console.log(
						"props.fetchMoreData(props.pURL)",
						props.fetchMoreData(props.pURL)
					)
					let result = props.fetchMoreData(props.pURL)
					console.log("result", result)
					return result
				}}
			>
				more info
			</button>
		</>
	)
}
