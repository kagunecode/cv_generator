// Libraries
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./components/Layout";
import General from "./routes/General";
import Experience from "./routes/Experience";
import Welcome from "./routes/Welcome";

// Data
import sectionInfo from "./data/sectionInfo";

// Styles
import "./styles/styles.css";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="h-screen overflow-hidden">
			<Navbar sectionInfo={sectionInfo}></Navbar>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route
						path="/general"
						element={
							<Layout>
								<General />
							</Layout>
						}
					/>
					<Route
						path="/experience"
						element={
							<Layout>
								<Experience />
							</Layout>
						}
					/>
					<Route
						index
						element={
							<Layout>
								<Welcome />
							</Layout>
						}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
