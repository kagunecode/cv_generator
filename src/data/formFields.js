const formFields = [
	{
		sectionName: "General",
		fields: [
			{ id: "fullname", fieldName: "Full Name", fieldType: "text" },
			{ id: "title", fieldName: "Title", fieldType: "text" },
			{ id: "email", fieldName: "Email", fieldType: "email" },
			{ id: "phone", fieldName: "Phone", fieldType: "phone" },
			{ id: "location", fieldName: "Location", fieldType: "text" },
		],
	},
	{
		sectionName: "Experience",
		fields: [
			{ id: "jobname", fieldName: "Company Name", fieldType: "text" },
			{ id: "charge", fieldName: "Position", fieldType: "text" },
		],
	},
];

export default formFields;
