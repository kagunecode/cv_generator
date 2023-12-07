import { Routes, Route, useLocation } from "react-router-dom";
import sectionInfo from "./data/sectionInfo";
import "./styles/styles.css";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./components/Layout";
import General from "./routes/General";
import Experience from "./routes/Experience";
import Welcome from "./routes/Welcome";

function App() {
	const location = useLocation();
	return (
		<div className="h-screen overflow-hidden">
			<Navbar sectionInfo={sectionInfo}></Navbar>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/general" element={<Layout toRender={General()} />} />
					<Route
						path="/experience"
						element={<Layout toRender={Experience()} />}
					/>
					<Route index element={<Layout toRender={Welcome()} />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
