import React, { useCallback, useRef, useState } from 'react'
import Button from './OptimizeComponents/Button'
import Title from './OptimizeComponents/Title'
import Age from './OptimizeComponents/Age'
import CheckAge from './OptimizeComponents/CheckAge'

const Optimize = () => {
	const [age, setAge] = useState(25)
	const [Salary, setSalary] = useState(1000)

	const i = useRef(0)
	const btn = useRef(null)
	const ClickHandlerBtn = () => {
		btn.current.style.background = 'red'
	}
	const incrementAge = useCallback(() => {
		setAge(age + 1)
		i.current++
		console.log('i', i)
	}, [age])
	const incrementSalary = useCallback(() => {
		setSalary(Salary + 1000)
	}, [Salary])
	return (
		<div>
			<Title />
			<button ref={btn} onClick={ClickHandlerBtn}>
				Click me!
			</button>
			<Age count={age}>Age</Age>
			<Button handleClick={incrementAge}>increment Age</Button>
			<CheckAge age={age} />
			<Age count={Salary}>Salary</Age>
			<Button handleClick={incrementSalary}>increment Salary</Button>
		</div>
	)
}

export default Optimize
