function PreviewCV({ formData }) {
	return (
		<div className="h-full bg-white">
			<div className="bg-emphasis-500 h-30 p-5">
				<h1 className="text-2xl font-bold">
					{formData.generalInfo[0].fullname}
				</h1>
				<p className="font-light">{formData.generalInfo[0].title}</p>
			</div>
			<p className="font-light">{formData.generalInfo[0].email}</p>
			<p className="font-light">{formData.generalInfo[0].phone}</p>
			<p className="font-light">{formData.generalInfo[0].location}</p>
			<p className="font-light">{formData.experience[0].company}</p>
			<p className="font-light">{formData.experience[0].position}</p>
		</div>
	);
}

export default PreviewCV;
