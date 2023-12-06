import { AnimateError } from "../components/AnimatedPage";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<AnimateError>
			<div className="flex relative overflow-hidden flex-col h-screen items-center justify-center bg-gradient-to-tr from-emphasis-500 via-yellow-300 to-yellow-200">
				<h1 className="absolute text-white text-[200rem] hover:cursor-default select-none font-medium drop-shadow-2xl">
					404
				</h1>
				<div className="relative">
					<h1 className="text-[20rem] text-white font-semibold animate-errortext select-none">
						404
					</h1>
					<h1 className="absolute text-black text-[20rem] top-0 font-semibold">
						404
					</h1>
				</div>
				<p className="text-4xl font-light text-slate-700">Page not found</p>
				<Link
					className="z-20 bg-black font-semibold text-white px-5 py-2 mt-4 text-xl hover:bg-white hover:text-black duration-200"
					to={"/"}
				>
					Go Home
				</Link>
			</div>
		</AnimateError>
	);
}

export default ErrorPage;
