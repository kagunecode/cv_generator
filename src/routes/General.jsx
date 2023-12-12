import Forms from "../components/Forms";
import formFields from "../data/formFields";
import { AnimatedPage } from "../components/AnimatedPage";

function General() {
	const generalForm = formFields.find(
		(section) => section.sectionName === "General"
	);
	return (
		<AnimatedPage renderNum={generalForm.fields.length}>
			<div>
				<h1 className="text-5xl font-semibold">General</h1>
				<p>All your basic information goes here</p>
				<Forms
					formFields={generalForm.fields}
					sectionName="generalInfo"
					index={0}
				></Forms>
			</div>
		</AnimatedPage>
	);
}

export default General;
