import React, { useState } from "react";
import setState from "react";
import Navbar from "./components/Navbar";
import Mainform from "./components/Mainform";
import sectionInfo from "./data/sectionInfo";
import General from "./routes/General";

function App() {
	const [activeTab, setActiveTab] = useState(sectionInfo[0]);

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
			<div className="w-[calc(60vw-3rem)] translate-x-[3rem] p-3">
				{activeTab.tabName === "General" && <General></General>}
			</div>
		</div>
	);
}

export default App;
