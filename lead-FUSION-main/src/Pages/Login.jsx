import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.png"
import FullScreenImage from "../components/FullScreenImage"
import useAuth from "../hooks/useAppContext"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const Login = () => {
	const navigate = useNavigate()
	const { mobileNumber, setMobileNumber, sendOtpToMobileNumber } = useAuth()
	// State for terms and conditions checkbox
	const [isChecked, setIsChecked] = useState(false)

	const sendOtp = async () => {
		if (!isChecked) {
			toast.error("Please agree to the terms and conditions")
			return
		}

		const isSent = await sendOtpToMobileNumber()
		if (isSent) {
			navigate("/verify-otp")
		}
	}

	// Check if the user is already logged in
	useEffect(() => {
		const userData = localStorage.getItem("userData")
		if (userData) {
			navigate("/")
		}
	}, [navigate])

	return (
		<div className="w-full h-screen bg-green-100 flex justify-center items-center p-2">
			<FullScreenImage />
			<main className="w-full sm:w-[500px] bg-white p-8 flex flex-col justify-center items-center gap-3 rounded-2xl shadow-2xl">
				<img className="w-[130px]" src={logo} alt="" />
				<h1 className="text-xl font-bold text-darkGreen mt-2">
					{"Let's get started"}
				</h1>
				<p className="font-semibold text-slate-500">
					Enter your mobile number to proceed
				</p>
				{/* Select tag for country codes */}
				<div className="mt-4">
					<PhoneInput
						country={"in"}
						value={mobileNumber}
						onChange={(phone) => setMobileNumber(phone)}
					/>
				</div>
				<div className="flex items-center justify-start">
					<label className="text-white flex items-center">
						<input
							className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out w-4 h-4 mr-2 accent-darkGreen"
							type="checkbox"
							onChange={(e) => setIsChecked(e.target.checked)}
						/>
					</label>
					I agree to the{" "}
					<span className="underline text-darkGreen mx-1">terms</span>
					{" & "}
					<span className="mx-1 underline text-darkGreen">
						conditions
					</span>
				</div>
				<button className="mt-10 btn" onClick={sendOtp}>
					Send OTP
				</button>
			</main>
		</div>
	)
}

export default Login
