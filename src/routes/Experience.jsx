import formFields from "../data/formFields";
import Forms from "../components/Forms";
import { AnimatedPage } from "../components/AnimatedPage";

function Experience({ userData, setFormData }) {
	const experienceForm = formFields.find(
		(section) => section.sectionName === "Experience"
	);
	return (
		<AnimatedPage renderNum={experienceForm.fields.length}>
			<div>
				<h1 className="text-5xl font-semibold">Experience</h1>
				<p>Add previous jobs related to the job you're applying to</p>
				<Forms
					formFields={experienceForm.fields}
					userData={userData}
					setFormData={setFormData}
					sectionName="experience"
					index={0}
				></Forms>
			</div>
		</AnimatedPage>
	);
}

export default Experience;
