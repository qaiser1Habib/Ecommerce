import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// import "react-quill/dist/quill.snow.css";
// import { LoadingProvider } from "./store/context-providers/LoadingProvider";
import { Provider } from "react-redux";
import store from "./store/redux/store";
// import { SocketProvider } from "./store/context-providers/SocketProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PrimeReactProvider>
				<Provider store={store}>
					<ToastContainer />
					<App />
				</Provider>
			</PrimeReactProvider>
		</BrowserRouter>
	</React.StrictMode>
);
