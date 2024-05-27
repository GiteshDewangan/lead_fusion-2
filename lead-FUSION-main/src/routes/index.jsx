import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Profile from "../pages/profile"
import VerifyOtp from "../pages/VerifyOtp"
import CreateProfile from "../pages/profile/CreateProfile"
import ProfileCreated from "../pages/profile/ProfileCreated"
import AuthRedirect from "./AuthRedirect"
import ProtectRoute from "./ProtectRoute"

const routes = createBrowserRouter([
	{
		path: "/",
		element: (
			<ProtectRoute>
				<Profile />
			</ProtectRoute>
		),
	},
	{
		path: "login",
		element: (
			<AuthRedirect>
				<Login />
			</AuthRedirect>
		),
	},
	{
		path: "verify-otp",
		element: (
			<AuthRedirect>
				<VerifyOtp />
			</AuthRedirect>
		),
	},
	{
		path: "profile/create",
		element: (
			<ProtectRoute>
				<CreateProfile />
			</ProtectRoute>
		),
	},
	{
		path: "profile/created",
		element: (
			<AuthRedirect>
				<ProfileCreated />
			</AuthRedirect>
		),
	},
])

export default routes
