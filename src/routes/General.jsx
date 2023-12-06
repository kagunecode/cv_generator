import Forms from "../components/Forms";
import formFields from "../data/formFields";
import { AnimatedPage } from "../components/AnimatedPage";

function General() {
	const generalForm = formFields.find(
		(section) => section.sectionName === "General"
	);
	return (
		<AnimatedPage>
			<div>
				<h1 className="text-5xl font-semibold">General</h1>
				<p>All your basic information goes here</p>
				<Forms formFields={generalForm.fields}></Forms>
			</div>
		</AnimatedPage>
	);
}

export default General;
