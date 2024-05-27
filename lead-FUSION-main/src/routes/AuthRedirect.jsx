import { useEffect, useState } from "react"
import useAppContext from "../hooks/useAppContext"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import PropTypes from "prop-types"

function AuthRedirect({ children }) {
	const [loading, setLoading] = useState(true)
	const { userData, setUserData } = useAppContext()
	const navigate = useNavigate()

	// Check if the user is already logged in
	useEffect(() => {
		if (Object.keys(userData).length === 0) {
			setLoading(true)
			const token = localStorage.getItem("token")
			const savedUserData = localStorage.getItem("userData")
			if (token && savedUserData !== null) {
				setUserData(JSON.parse(savedUserData))
				setLoading(false)
				navigate("/")
			} else {
				setLoading(false)
			}
		} else {
			navigate("/")
		}
	}, [navigate, setUserData, userData])

	if (loading) {
		return <Loading />
	}

	return <>{children}</>
}

AuthRedirect.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AuthRedirect
