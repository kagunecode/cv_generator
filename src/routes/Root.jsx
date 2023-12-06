import Navbar from "../components/Navbar";
import sectionInfo from "../data/sectionInfo";
import PreviewCV from "../components/PreviewCV";
import { Outlet } from "react-router-dom";

export default function Root() {
	return (
		<div className="h-screen">
			<Navbar sectionInfo={sectionInfo}></Navbar>
			<div className="grid grid-cols-3 w-[calc(100vw-3rem)] h-full translate-x-[3rem] p-3">
				<div className="col-span-2">
					<Outlet></Outlet>
				</div>
				<div className="bg-slate-200 p-2 col-span-1">
					<PreviewCV></PreviewCV>
				</div>
			</div>
		</div>
	);
}
