function ErrorPage() {
	return (
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
		</div>
	);
}

export default ErrorPage;
