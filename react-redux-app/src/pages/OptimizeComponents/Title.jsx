import React, { useRef, useState } from 'react'
import usePrevious from '../../hooks/usePrevious'
import Footer from './Footer'

const Title = () => {
	console.log('Title rendering')
	const video = useRef(null)
	const playVideo = () => {
		video.current.play()
	}
	const [value, setValue] = useState('')
	const prevValue = usePrevious(value)
	const footerVar = <Footer color='red' />

	return (
		<div>
			<h1>Optimize</h1>
			{footerVar}
			<input
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div>Current value: {value}</div>
			<div>Prev value: {prevValue}</div>
			<div>
				<video
					src='https://www.w3schools.com/tags/movie.mp4'
					ref={video}
				></video>
				<button onClick={playVideo}>Play</button>
			</div>
		</div>
	)
}

export default React.memo(Title)
