import formFields from "../data/formFields";
import Forms from "../components/Forms";
import { AnimatedPage } from "../components/AnimatedPage";

function Experience() {
	const experienceForm = formFields.find(
		(section) => section.sectionName === "Experience"
	);
	return (
		<AnimatedPage renderNum={experienceForm.fields.length}>
			<div>
				<h1 className="text-5xl font-semibold">Experience</h1>
				<p>Add previous jobs related to the job you're applying to</p>
				<Forms formFields={experienceForm.fields}></Forms>
			</div>
		</AnimatedPage>
	);
}

export default Experience;
