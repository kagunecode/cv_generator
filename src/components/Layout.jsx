import PreviewCV from "./PreviewCV";

export default function Layout({ toRender }) {
	console.log(toRender);
	return (
		<div className="grid grid-cols-3 w-[calc(100vw-3rem)] h-full translate-x-[3rem] p-3">
			<div className="col-span-2">{toRender}</div>
			<div className="bg-slate-200 p-2 col-span-1">
				<PreviewCV></PreviewCV>
			</div>
		</div>
	);
}
