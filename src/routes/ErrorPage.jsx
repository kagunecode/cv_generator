import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="flex flex-col h-screen items-center justify-center bg-gradient-to-tr from-emphasis-500 via-yellow-300 to-yellow-200">
			<div className="relative">
				<h1 className="text-[10rem] text-white font-semibold animate-errortext">
					{error.status}
				</h1>
				<h1 className="absolute text-black text-[10rem] top-0 font-semibold">
					{error.status}
				</h1>
			</div>
			<p className="text-3xl font-semibold text-slate-700">
				{error.statusText}
			</p>
		</div>
	);
}

export default ErrorPage;
