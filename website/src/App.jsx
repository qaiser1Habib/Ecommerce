import Header from "./view/partials/Header";
import Home from "./view/Home";
import Shop from "./view/Shop";
import Footer from "./view/partials/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
