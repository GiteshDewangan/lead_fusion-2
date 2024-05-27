import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import useAppContext from "../../hooks/useAppContext"

function CreateProfile() {
	const navigate = useNavigate()
	const [states] = useState([
		{
			name: "Andhra Pradesh",
			cities: ["Visakhapatnam", "Vijayawada", "Hyderabad"],
		},
		{ name: "Assam", cities: ["Guwahati", "Dibrugarh", "Silchar"] },
		{ name: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur"] },
		// Add more states and cities as needed
	])
	const [rememberMe, setRememberMe] = useState(false)
	const [formData, setFormData] = useState({
		fullName: "",
		emailAddress: "",
		companyName: "",
		selectedState: "",
		selectedCity: "",
		sponsorCode: "ABC123",
	})
	const { setUserData } = useAppContext()

	const handleOnChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleGoBack = () => {
		navigate("/")
	}

	const validateForm = () => {
		const {
			fullName,
			emailAddress,
			companyName,
			selectedState,
			selectedCity,
			sponsorCode,
		} = formData
		if (!fullName) {
			toast.error("Please enter your full name")
			return false
		} else if (!emailAddress) {
			toast.error("Please enter your email address")
			return false
		} else if (!companyName) {
			toast.error("Please enter your company name")
			return false
		} else if (!selectedState) {
			toast.error("Please select your state")
			return false
		} else if (!selectedCity) {
			toast.error("Please select your city")
			return false
		} else if (!sponsorCode) {
			toast.error("Please enter your sponsor code")
			return false
		}
		return true
	}

	const handleProfileUpdate = async () => {
		if (!validateForm()) return

		const token = localStorage.getItem("token")
		if (token) {
			try {
				// API does not exist confirm with backend team

				// const API = import.meta.env.VITE_BE_API
				// const response = await axios.post(
				// 	`${API}/api/profile/store`,
				// 	formData,
				// 	{
				// 		headers: { Authorization: `Bearer ${token}` },
				// 	}
				// )
				// toast.success(response.data.message)

				// directly store in frontend
				if (rememberMe) {
					localStorage.setItem("userData", JSON.stringify(formData))
				}
				setUserData(formData)
				sessionStorage.removeItem("newUser")
				navigate("/profile/created")
			} catch (error) {
				toast.error("Email already exists")
				console.error("Profile update failed:", error)
			}
		}
	}

	return (
		<div className="w-full bg-green-100 flex justify-center items-center px-4 py-8">
			<div className="w-full sm:w-[500px] bg-white flex flex-col gap-3 rounded-2xl shadow-2xl">
				<div className="text-darkGreen text-xl flex items-center justify-between rounded-2xl py-4 px-5">
					<i
						onClick={handleGoBack}
						className="cursor-pointer text-darkGreen fa-solid fa-chevron-left fa-xl"
					></i>
					<h1 className="font-bold text-2xl pt-4 text-center w-full">
						Create Profile
					</h1>
				</div>

				{/* input fields */}
				<div className="px-8 pb-4 w-full flex flex-col justify-center gap-2">
					<div className="input-group">
						<label
							htmlFor=""
							className="text-slate-800 font-semibold"
						>
							Full name
						</label>
						<input
							className="input-field"
							type="text"
							placeholder="Enter full name"
							value={formData.fullName}
							name="fullName"
							onChange={handleOnChange}
						/>
					</div>
					<div className="input-group">
						<label
							htmlFor=""
							className="text-slate-800 font-semibold"
						>
							Email address
						</label>
						<input
							className="input-field"
							type="email"
							placeholder="Enter email address"
							value={formData.emailAddress}
							name="emailAddress"
							onChange={handleOnChange}
						/>
					</div>
					<div className="input-group">
						<label
							htmlFor=""
							className="text-slate-800 font-semibold"
						>
							Company Name
						</label>
						<input
							className="input-field"
							type="text"
							placeholder="Company Name"
							value={formData.companyName}
							name="companyName"
							onChange={handleOnChange}
						/>
					</div>
					<div className="flex gap-2 w-full">
						<div className="input-group w-full">
							<label
								htmlFor=""
								className="text-slate-800 font-semibold"
							>
								State
							</label>
							<select
								className="input-field"
								value={formData.selectedState}
								name="selectedState"
								onChange={handleOnChange}
							>
								<option value="">Select State</option>
								{states.map((state, index) => (
									<option key={index} value={state.name}>
										{state.name}
									</option>
								))}
							</select>
						</div>
						<div className="input-group w-full">
							<label
								htmlFor=""
								className="text-slate-800 font-semibold"
							>
								City
							</label>
							<select
								className="input-field"
								value={formData.selectedCity}
								name="selectedCity"
								onChange={handleOnChange}
							>
								<option value="">Select City</option>
								{states
									.find(
										(state) =>
											state.name ===
											formData.selectedState
									)
									?.cities.map((city, index) => (
										<option key={index} value={city}>
											{city}
										</option>
									))}
							</select>
						</div>
					</div>
					<div className="input-group">
						<label
							htmlFor=""
							className="text-slate-800 font-semibold"
						>
							Sponsor code
						</label>
						<input
							className="input-field"
							type="text"
							placeholder="Sponsor Code"
							value={formData.sponsorCode}
							name="sponsorCode"
							onChange={handleOnChange}
						/>
					</div>
					<label className="flex gap-3 text-start pt-4">
						<input
							type="checkbox"
							checked={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
						Remember Me
					</label>
					<button
						className="my-3 w-[170px] bg-darkGreen hover:bg-green-600 duration-200 shadow-xl rounded-md py-2 px-4 text-white font-semibold self-center"
						onClick={handleProfileUpdate}
					>
						Create Profile
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreateProfile
