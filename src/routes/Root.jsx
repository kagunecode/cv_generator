import Navbar from "../components/Navbar";
import sectionInfo from "../data/sectionInfo";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<div className="h-screen">
			<Navbar sectionInfo={sectionInfo}></Navbar>
			<div className="w-[calc(60vw-3rem)] translate-x-[3rem] p-3">
				<Outlet></Outlet>
			</div>
		</div>
	);
}
