import { createContext, useState } from "react"
import PropTypes from "prop-types"
import toast from "react-hot-toast"
import axios from "axios"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [userData, setUserData] = useState({})
	const [mobileNumber, setMobileNumber] = useState("")

	const sendOtpToMobileNumber = async () => {
		const country_code = "+" + mobileNumber.slice(0, 2)
		const mobile_number = mobileNumber.slice(2)

		if (mobile_number.length !== 10) {
			toast.error("Please enter a valid mobile number")
			return false
		}

		try {
			const API = import.meta.env.VITE_BE_API
			const response = await axios.post(`${API}/send-otp`, {
				country_code,
				mobile_number,
			})
			if (response.data.success) {
				toast.success(response.data.message)
				return true
			} else {
				toast.error(response.data.message)
				return false
			}
		} catch (error) {
			console.log(error.response.data)
			toast.error(error.response.data.message)
			return false
		}
	}
	return (
		<AppContext.Provider
			value={{
				userData,
				setUserData,
				mobileNumber,
				setMobileNumber,
				sendOtpToMobileNumber,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AppContext
