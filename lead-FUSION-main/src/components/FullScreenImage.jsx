import { useEffect, useRef } from "react"
import logo from "../assets/images/logo.png"

function FullScreenImage() {
	const ref = useRef(null)

	useEffect(() => {
		setTimeout(() => {
			ref.current.classList.add("-translate-y-full")
		}, 1000)
	}, [])

	return (
		<div
			className="fixed h-screen top-0 left-0 w-full bg-gradient-to-r from-lightGreen to-darkGreen flex justify-center items-center z-10 transition-all duration-500"
			ref={ref}
		>
			<img id="fullscreen-image" src={logo} alt="Full Screen" />
		</div>
	)
}

export default FullScreenImage
