import React, { useState } from "react";
import setState from "react";
import Navbar from "./components/Navbar";
import Mainform from "./components/Mainform";
import sectionInfo from "./data/sectionInfo";

function App() {
	const [activeTab, setActiveTab] = useState(null);

	function handleTabClick(tab) {
		console.log(tab);
		setActiveTab(tab);
	}

	return (
		<div className="h-screen">
			<Navbar
				sectionInfo={sectionInfo}
				handleTabClick={handleTabClick}
			></Navbar>
			<div className="w-[calc(100vw-3rem)] translate-x-[3rem] p-3">
				<Mainform activeTab={activeTab}></Mainform>
			</div>
		</div>
	);
}

export default App;
