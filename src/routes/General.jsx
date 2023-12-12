import Forms from "../components/Forms";
import formFields from "../data/formFields";
import { AnimatedPage } from "../components/AnimatedPage";

import { useDataContext } from "../contexts/DataContext";

function General() {
	const generalForm = formFields.find(
		(section) => section.sectionName === "General"
	);
	return (
		<AnimatedPage>
			<div>
				<h1 className="text-5xl font-semibold">General</h1>
				<p>All your basic information goes here</p>
				<GeneralForm />
			</div>
		</AnimatedPage>
	);
}

function GeneralForm() {
	const { data, setData } = useDataContext();
	const handleInputChange = (fieldId, value, index) => {
		setData((prevData) => ({
			...prevData,
			generalInfo: prevData["generalInfo"].map((item, i) =>
				i === index ? { ...item, [fieldId]: value } : item
			),
		}));
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 row-auto gap-y-4 p-5">
			<div className="flex flex-col mr-4">
				<label htmlFor="fullname">Full Name</label>
				<input
					id="fullname"
					type="text"
					className="h-8 bg-slate-200 px-1 border-slate-400 border w-full"
					onChange={(e) => handleInputChange("fullname", e.target.value, 0)}
					value={data.generalInfo[0].fullname}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					className="h-8 bg-slate-200 px-1 border-slate-400 border mr-4"
					onChange={(e) => handleInputChange("title", e.target.value, 0)}
					value={data.generalInfo[0].title}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="text"
					className="h-8 bg-slate-200 px-1 border-slate-400 border mr-4"
					onChange={(e) => handleInputChange("email", e.target.value, 0)}
					value={data.generalInfo[0].email}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="phone">Phone</label>
				<input
					id="phone"
					type="text"
					className="h-8 bg-slate-200 px-1 border-slate-400 border mr-4"
					onChange={(e) => handleInputChange("phone", e.target.value, 0)}
					value={data.generalInfo[0].phone}
				/>
			</div>
		</div>
	);
}

export default General;
