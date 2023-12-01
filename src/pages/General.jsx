import React from "react";
import Form from "../components/Form";
import formFields from "../data/formFields";

function General() {
	const generalForm = formFields.find(
		(section) => section.sectionName === "General"
	);
	return (
		<>
			<h1 className="text-5xl font-semibold">General</h1>
			<p>All your basic information goes here</p>
			<Form formFields={generalForm.fields}></Form>
		</>
	);
}

export default General;
