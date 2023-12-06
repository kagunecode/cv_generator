import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	return (
		<div className="flex relative overflow-hidden flex-col h-screen items-center justify-center bg-gradient-to-tr from-emphasis-500 via-yellow-300 to-yellow-200">
			<h1 className="absolute text-white text-[200rem] hover:cursor-default select-none font-medium drop-shadow-2xl">
				{error.status}
			</h1>
			<div className="relative">
				<h1 className="text-[20rem] text-white font-semibold animate-errortext select-none">
					{error.status}
				</h1>
				<h1 className="absolute text-black text-[20rem] top-0 font-semibold">
					{error.status}
				</h1>
			</div>
			<p className="text-4xl font-light text-slate-700">{error.statusText}</p>
		</div>
	);
}

export default ErrorPage;
