import formFields from '../data/formFields';
import Forms from '../components/Forms';
import { AnimatedPage } from '../components/AnimatedPage';

import { useDataContext } from '../contexts/DataContext';

const experienceForm = formFields.find(
  section => section.sectionName === 'Experience',
);

function Jobs({ index }) {
  return (
    <div>
      <Forms
        formFields={experienceForm.fields}
        sectionName="experience"
        index={index}
        key={index}
      ></Forms>
    </div>
  );
}

function Experience() {
  const { data, setData } = useDataContext();
  const newData = {
    id: 0,
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  };
  function handleAddJob() {
    const newJob = { ...newData, id: data.experience.length };
    setData(prevData => ({
      ...prevData,
      experience: [...prevData.experience, newJob],
    }));
    console.log(data.experience);
  }
  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Experience</h1>
      <p>Add previous jobs related to the job you're applying to</p>
      <button
        onClick={handleAddJob}
        className="bg-emphasis-500 px-5 py-2 font-semibold text-slate-500 duration-200 hover:text-black"
      >
        Add Job
      </button>
      <div className="mr-5 bg-slate-100 p-4">
        {data.experience.map(exp => {
          console.log(exp);
          return <Jobs index={exp.id} key={exp.id} />;
        })}
      </div>
    </AnimatedPage>
  );
}

export default Experience;
