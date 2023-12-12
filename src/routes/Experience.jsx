import formFields from "../data/formFields";
import Forms from "../components/Forms";
import { AnimatedPage } from "../components/AnimatedPage";
import cvData from "../data/cvData";
import { useState } from "react";

const experienceForm = formFields.find(
	(section) => section.sectionName === "Experience"
);

function Jobs({ userData, setFormData, index }) {
	return (
		<div>
			<Forms
				formFields={experienceForm.fields}
				userData={userData}
				setFormData={setFormData}
				sectionName="experience"
				index={index}
				key={index}
			></Forms>
		</div>
	);
}

function Experience({ userData, setFormData }) {
	const newData = {
		id: 0,
		position: "",
		company: "",
		startDate: "",
		endDate: "",
		description: "",
	};
	function handleAddJob() {
		const newJob = { ...newData, id: userData.experience.length };
		setFormData((prevData) => ({
			...prevData,
			experience: [...prevData.experience, newJob],
		}));
		console.log(userData.experience);
	}
	return (
		<AnimatedPage renderNum={experienceForm.fields.length}>
			<h1 className="text-5xl font-semibold">Experience</h1>
			<p>Add previous jobs related to the job you're applying to</p>
			<button
				onClick={handleAddJob}
				className="bg-emphasis-500 font-semibold text-slate-500 py-2 px-5 hover:text-black duration-200"
			>
				Add Job
			</button>
			<div className="bg-slate-100 p-4 mr-5">
				{userData.experience.map((exp) => {
					console.log(exp);
					return (
						<Jobs
							userData={userData}
							setFormData={setFormData}
							index={exp.id}
							key={exp.id}
						/>
					);
				})}
			</div>
		</AnimatedPage>
	);
}

export default Experience;
