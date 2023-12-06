import { Routes, Route, useLocation } from "react-router-dom";
import sectionInfo from "./data/sectionInfo";

import Navbar from "./components/Navbar";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./components/Layout";
import General from "./routes/General";

function App() {
	const location = useLocation();
	return (
		<div className="h-screen">
			<Navbar sectionInfo={sectionInfo}></Navbar>
			<Routes location={location} key={location.pathname}>
				<Route path="/general" element={<Layout toRender={General()} />} />
				<Route index element={<></>} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
