import React, { useState } from "react"

export default function UseFetchMoreInfoButton(props) {
	return (
		<>
			<button
				onClick={(e) => {
					return props.fetchMoreData(props.pURL)
				}}
			>
				more info
			</button>
		</>
	)
}
