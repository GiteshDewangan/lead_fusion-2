import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/globals.css"
import { RouterProvider } from "react-router-dom"
import routes from "./routes/index.jsx"
import { Toaster } from "react-hot-toast"
import { AppProvider } from "./context/AppContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={routes}> </RouterProvider>
			<Toaster position="top-right" reverseOrder={false} />
		</AppProvider>
	</React.StrictMode>
)
