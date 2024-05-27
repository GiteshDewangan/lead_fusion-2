import axios from "axios"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAppContext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6"

function VerifyOtp() {
	const [otp, setOtp] = useState("")
	const { mobileNumber, sendOtpToMobileNumber } = useAuth()
	const navigate = useNavigate()

	const verifyOtp = async () => {
		const country_code = mobileNumber.slice(0, 2)
		const mobile_number = mobileNumber.slice(2)

		try {
			const API = import.meta.env.VITE_BE_API
			const response = await axios.post(`${API}/verify-otp`, {
				country_code,
				mobile_number,
				otp: otp,
			})
			if (response.data.success) {
				// Save the token in local storage
				localStorage.setItem("token", response.data.access_token)
				sessionStorage.setItem("newUser", "true")
				console.log("New user")
				toast.success(response.data.message)
				// Navigate to the profile creation page
				navigate("/profile/create")
			} else {
				toast.error(response.data.message)
			}
		} catch (error) {
			console.log(error)
			toast.error(error.response.data.message)
		}
	}

	const handleGoBack = () => {
		navigate("/login")
	}

	useEffect(() => {
		if (!mobileNumber) {
			navigate("/login")
		}
	}, [mobileNumber, navigate])

	return (
		<div className="h-screen flex items-center justify-center bg-green-100 p-2">
			<div className="flex flex-col justify-center items-center p-3 md:p-8 text-center gap-2 bg-white rounded-2xl shadow-2xl relative w-full sm:w-[500px]">
				<button
					className="absolute top-4 left-4 text-darkGreen bg-white rounded-full shadow-2xl w-12 h-12"
					onClick={handleGoBack}
				>
					<FaChevronLeft size={24} />
				</button>
				<h1 className="text-2xl font-bold text-darkGreen mt-2">
					Verification code
				</h1>
				<p className="font-semibold text-slate-500 mb-3">
					We have sent the verification code to your mobile number
				</p>
				<p className="text-darkGreen mt-3 font-semibold">
					{`+${mobileNumber}`}
				</p>
				<input
					className="mt-5 mb-2 py-2 text-center font-bold tracking-widest focus:bg-green-100 rounded-lg bg-slate-100 w-1/2 outline-none border-2 border-darkGreen"
					type="text"
					placeholder="OTP"
					value={otp}
					onChange={(e) => setOtp(e.target.value)}
				/>
				<button className="mt-8 btn" onClick={verifyOtp}>
					Verify OTP
				</button>
				<p
					onClick={sendOtpToMobileNumber}
					className="cursor-pointer text-darkGreen mt-3 font-semibold hover:underline"
				>
					Resend code
				</p>
			</div>
		</div>
	)
}

export default VerifyOtp
