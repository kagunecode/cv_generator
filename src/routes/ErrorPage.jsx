import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500">
			<h1 className="text-[8rem]">{error.status}</h1>
			<p className="text-2xl text-slate-700">{error.statusText}</p>
		</div>
	);
}

export default ErrorPage;
