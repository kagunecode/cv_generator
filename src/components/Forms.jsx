import React from "react";

function Fields(props) {
	const fieldsContent = props.formFields.map((field) => {
		return (
			<div key={field.id} className="flex flex-col mb-6">
				<label className="mb-1" htmlFor={field.id}>
					{field.fieldName}
				</label>
				<input
					className="w-[60%] h-9 bg-zinc-200 rounded px-1"
					type={field.fieldType}
					id={field.id}
				/>
			</div>
		);
	});
	return <form>{fieldsContent}</form>;
}

function Forms({ formFields }) {
	return (
		<>
			<Fields formFields={formFields}></Fields>
		</>
	);
}

export default Forms;
