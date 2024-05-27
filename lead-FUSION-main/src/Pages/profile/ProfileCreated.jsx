import { useNavigate } from "react-router-dom"
import image from "../../assets/images/image.png"

function ProfileCreated() {
	const navigate = useNavigate()

	const showProfile = () => {
		navigate("/")
	}

	return (
		<div className="transition ease-in duration-200 w-screen bg-green-100 h-full flex justify-center items-center fixed top-0 bottom-0 left-0 right-0">
			<div className="popover rounded-2xl p-3 bg-white text-center flex flex-col justify-center items-center w-full sm:w-[400px] shadow-2xl">
				<img src={image} className="w-40 h-30 rounded-2xl" alt="" />
				<h1 className="text-xl font-bold text-darkGreen mt-2">
					Account Created
				</h1>
				<p className="font-semibold text-slate-500 mx-3">
					your account has been created successfully
				</p>
				<button className="mt-6 mb-2 btn" onClick={showProfile}>
					OK
				</button>
			</div>
		</div>
	)
}

export default ProfileCreated
