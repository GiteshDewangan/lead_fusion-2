import { useEffect, useState } from "react"
import useAppContext from "../hooks/useAppContext"
import Loading from "../components/Loading"
import { useLocation, useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

function ProtectRoute({ children }) {
	const [loading, setLoading] = useState(true)
	const { userData, setUserData } = useAppContext()
	const navigate = useNavigate()
	const pathname = useLocation().pathname

	// Check if the user is already logged in
	useEffect(() => {
		// Check if the user is a new user
		const isNewUser = sessionStorage.getItem("newUser")
		if (isNewUser && pathname !== "/profile/create") {
			navigate("/profile/create")
			return
		}

		if (isNewUser) {
			setLoading(false)
			return
		}

		if (Object.keys(userData).length === 0) {
			setLoading(true)
			const savedUserData = localStorage.getItem("userData")
			const token = localStorage.getItem("token")
			if (savedUserData !== null && token) {
				setUserData(JSON.parse(savedUserData))
				setLoading(false)
			} else {
				navigate("/login")
			}
		} else {
			setLoading(false)
		}
	}, [navigate, setUserData, userData])

	if (loading) {
		return <Loading />
	}

	return <>{children}</>
}

ProtectRoute.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ProtectRoute
