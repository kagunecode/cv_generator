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

import cvData from "./data/cvData";
import { useState } from "react";

function App() {
	const location = useLocation();
	const [formData, setFormData] = useState(cvData);
	return (
		<div className="h-screen overflow-hidden">
			<Navbar sectionInfo={sectionInfo}></Navbar>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route
						path="/general"
						element={
							<Layout userData={formData}>
								<General userData={formData} setFormData={setFormData} />
							</Layout>
						}
					/>
					<Route
						path="/experience"
						element={
							<Layout userData={formData}>
								<Experience userData={formData} setFormData={setFormData} />
							</Layout>
						}
					/>
					<Route
						index
						element={
							<Layout userData={formData}>
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
