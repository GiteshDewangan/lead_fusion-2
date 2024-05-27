import useAppContext from "../../hooks/useAppContext"
import { CgMenuLeftAlt } from "react-icons/cg"
import { IoHelpOutline } from "react-icons/io5"
import { BiSolidMoviePlay } from "react-icons/bi"
import { FaBell, FaUser } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"
import { PiGridFourFill } from "react-icons/pi"
import { MdOutlineSettingsSuggest } from "react-icons/md"
import { FaUsers } from "react-icons/fa6"
import { RiContactsBook3Fill } from "react-icons/ri"
import { HiSpeakerphone } from "react-icons/hi"
import { GoGraph } from "react-icons/go"
import { IoCall } from "react-icons/io5"
import { HiArrowLongRight } from "react-icons/hi2"

const Profile = () => {
	const { userData } = useAppContext()

	return (
		<div className="bg-gray-50 min-h-screen mb-16">
			{/* Header Section */}
			<header className="flex flex-col gap-3 p-2 sm:p-4 rounded-b-3xl bg-">
				<div className="flex justify-between gap-2">
					<button className="w-12 aspect-square flex justify-center items-center rounded-full bg-darkGreen text-white outline-none">
						<CgMenuLeftAlt size={28} />
					</button>
					<button className="px-2 flex justify-center items-center rounded-3xl bg-darkGreen text-white">
						<IoHelpOutline
							size={32}
							className="bg-white text-darkGreen rounded-full p-1"
						/>
						<span className="mx-2">HELP</span>
					</button>
					<button className="px-2 flex justify-center items-center rounded-3xl bg-darkGreen text-white">
						<BiSolidMoviePlay
							size={32}
							className="bg-white text-darkGreen rounded-full p-1"
						/>
						<span className="mx-2">Tutorial</span>
					</button>
					<button className="w-12 aspect-square flex justify-center items-center rounded-full bg-darkGreen text-white outline-none">
						<FaBell size={24} />
					</button>
				</div>
				<div className="flex items-center px-3 justify-between pt-2 flex-wrap gap-4">
					<div className="flex flex-col ">
						<span className="text-2xl md:text-3xl font-bold">
							Hello {userData?.fullName}
						</span>
						<span className="font-semibold text-xl text-gray-500">
							Boost your business
						</span>
					</div>
					<button className="px-4 py-2 bg-warning rounded-lg text-white font-semibold">
						My Devices
					</button>
				</div>
			</header>

			{/* Main Content */}
			<main className="px-4 my-4">
				{/* WhatsApp Boost Section */}
				<section className="mb-6">
					<div className="bg-white rounded-lg flex items-center">
						<img
							src="https://th.bing.com/th/id/OIP.zAuCcvYKYkeQAle72U4z5AAAAA?rs=1&pid=ImgDetMain"
							alt="WhatsApp"
							className="w-24 h-24 object-cover rounded-lg mr-4"
						/>
						<div>
							<h2 className="text-lg font-semibold">
								Boost your new strategies on WhatsApp
							</h2>
							<button className="text-darkGreen flex gap-2 items-center font-semibold">
								View now <HiArrowLongRight size={34} />
							</button>
						</div>
					</div>
				</section>

				{/* Quick Access Section */}
				<section className="my-6">
					<h2 className="text-xl font-semibold">Quick Access</h2>
					<p className="text-gray-500 mb-4">
						Supercharge your business growth
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						<button className="p-4 bg-darkGreen text-white rounded-lg flex items-center justify-center space-x-2">
							<MdOutlineSettingsSuggest size={28} />
							<span>Automation</span>
						</button>
						<button className="p-4 bg-darkGreen text-white rounded-lg flex items-center justify-center space-x-2">
							<FaUsers size={24} />
							<span>Leads</span>
						</button>
						<button className="p-4 bg-darkGreen text-white rounded-lg flex items-center justify-center space-x-2">
							<RiContactsBook3Fill size={24} />
							<span>Contacts</span>
						</button>
						<button className="p-4 bg-darkGreen text-white rounded-lg flex items-center justify-center space-x-2">
							<HiSpeakerphone size={24} />
							<span>Campaign</span>
						</button>
						<button className="p-4 bg-darkGreen text-white rounded-lg flex items-center justify-center space-x-2">
							<GoGraph size={24} />
							<span>Report</span>
						</button>
						<button className="p-4 bg-darkGreen text-white rounded-lg flex items-center justify-center space-x-2">
							<IoCall size={24} />
							<span>Call Manage</span>
						</button>
					</div>
				</section>

				{/* Boost Business Section */}
				<section className="">
					<div className="bg-white rounded-lg flex items-center">
						<img
							src="https://technotropics.com/wp-content/uploads/2023/08/Techno-Tropics-Blog-Image.png"
							alt="WhatsApp"
							className="w-24 h-24 object-cover rounded-lg mr-4"
						/>
						<div>
							<h2 className="text-lg font-semibold">
								Boost your business with us
							</h2>
							<button className="text-darkGreen flex gap-2 items-center font-semibold">
								View now <HiArrowLongRight size={34} />
							</button>
						</div>
					</div>
				</section>
			</main>

			{/* Footer Navigation */}
			<footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 sm:p-4 flex justify-around">
				<button className="text-green-600">
					<GoHomeFill size={28} />
				</button>
				<button className="text-gray-400">
					<PiGridFourFill size={28} />
				</button>
				<button className="text-gray-400">
					<FaUser size={24} />
				</button>
			</footer>
		</div>
	)
}

export default Profile
