import { useDataContext } from '../contexts/DataContext';

function Fields({ formFields, sectionName, index }) {
  const { data, setData } = useDataContext();
  const handleInputChange = (fieldId, value) => {
    setData(prevData => ({
      ...prevData,
      [sectionName]: prevData[sectionName].map((item, i) =>
        i === index ? { ...item, [fieldId]: value } : item,
      ),
    }));
  };
  const fieldsContent = formFields.map(field => {
    return (
      <div key={field.id} className="mb-6 flex flex-col">
        <label className="mb-1" htmlFor={field.id}>
          {field.fieldName}
        </label>
        <input
          className="h-9 w-[60%] rounded bg-zinc-200 px-1"
          type={field.fieldType}
          id={field.id}
          value={data[sectionName][index][field.id]}
          onChange={e => handleInputChange(field.id, e.target.value)}
        />
      </div>
    );
  });
  return <form>{fieldsContent}</form>;
}

function Forms({ formFields, sectionName, index }) {
  return (
    <>
      <Fields
        formFields={formFields}
        sectionName={sectionName}
        index={index}
      ></Fields>
    </>
  );
}

export default Forms;
