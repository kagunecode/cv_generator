import React from "react";

function Fields({ formFields, userData, setFormData, sectionName, index }) {
	const handleInputChange = (fieldId, value) => {
		setFormData((prevData) => ({
			...prevData,
			[sectionName]: prevData[sectionName].map((item, i) =>
				i === index ? { ...item, [fieldId]: value } : item
			),
			[fieldId]: value,
		}));
	};
	const fieldsContent = formFields.map((field) => {
		return (
			<div key={field.id} className="flex flex-col mb-6">
				<label className="mb-1" htmlFor={field.id}>
					{field.fieldName}
				</label>
				<input
					className="w-[60%] h-9 bg-zinc-200 rounded px-1"
					type={field.fieldType}
					id={field.id}
					value={userData[sectionName][index][field.id]}
					onChange={(e) => handleInputChange(field.id, e.target.value)}
				/>
			</div>
		);
	});
	return <form>{fieldsContent}</form>;
}

function Forms({ formFields, userData, setFormData, sectionName, index }) {
	return (
		<>
			<Fields
				formFields={formFields}
				userData={userData}
				setFormData={setFormData}
				sectionName={sectionName}
				index={index}
			></Fields>
		</>
	);
}

export default Forms;
