import React, { useMemo } from 'react'

const CheckAge = ({ age }) => {
	console.log('Check age rendering')
	const getResult = () => {
		let i = 0
		while (i < 1000000000) {
			i++
		}
		return age === 30 ? '30!!!' : 'not 30'
	}
	const res = useMemo(getResult, [age])
	return <div>{res}</div>
}

export default React.memo(CheckAge, (prevProps, nextProps) => {
	return !(nextProps.age === 30 || prevProps.age === 30)
})
