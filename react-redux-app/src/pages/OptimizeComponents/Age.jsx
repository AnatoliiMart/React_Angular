import React from 'react'

const Age = ({ count, children }) => {
	console.log(`${children} rendering`)
	return (
		<div>
			{children}: {count}
		</div>
	)
}

export default React.memo(Age)
