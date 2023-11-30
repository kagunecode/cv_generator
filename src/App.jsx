import React from "react";
import Navbar from "./components/Navbar";
import Mainform from "./components/Mainform";

function App() {
	return (
		<div className="h-screen">
			<Navbar></Navbar>
			<div className="w-[calc(100vw-3rem)] translate-x-[3rem] p-3">
				<Mainform></Mainform>
			</div>
		</div>
	);
}

export default App;
