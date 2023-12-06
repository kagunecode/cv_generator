import Forms from "../components/Forms";
import formFields from "../data/formFields";

function General() {
	const generalForm = formFields.find(
		(section) => section.sectionName === "General"
	);
	return (
		<div>
			<h1 className="text-5xl font-semibold">General</h1>
			<p>All your basic information goes here</p>
			<Forms formFields={generalForm.fields}></Forms>
		</div>
	);
}

export default General;
