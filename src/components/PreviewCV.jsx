import { useDataContext } from "../contexts/DataContext";

function PreviewCV() {
	const { data } = useDataContext();
	return (
		<div className="h-full bg-white">
			<div className="bg-emphasis-500 h-30 p-5">
				<h1 className="text-2xl font-bold">{data.generalInfo[0].fullname}</h1>
				<p className="font-light">{data.generalInfo[0].title}</p>
			</div>
			<p className="font-light">{data.generalInfo[0].email}</p>
			<p className="font-light">{data.generalInfo[0].phone}</p>
			<p className="font-light">{data.generalInfo[0].location}</p>
			{data.experience.map((job) => {
				return (
					<>
						<h1 className="font-bold">{job.company}</h1>
						<p className="font-light">{job.position}</p>
					</>
				);
			})}
		</div>
	);
}

export default PreviewCV;
