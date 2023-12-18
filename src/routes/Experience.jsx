import { AnimatedPage } from '../components/AnimatedPage';

import { useDataContext } from '../contexts/DataContext';

function JobRender() {
  const { data, setData } = useDataContext();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );

  const handleInputChange = (fieldId, value, index) => {
    setData(prevData => ({
      ...prevData,
      experience: prevData['experience'].map((item, i) =>
        i === index ? { ...item, [fieldId]: value } : item,
      ),
    }));
  };

  const jobs = data.experience.map(job => {
    return (
      <div className="border bg-zinc-50 p-5">
        <h1 className="p-2 text-xl font-bold">{`Job at ${job.company}`}</h1>
        <div className="grid grid-cols-2" key={job.id}>
          <div className="flex flex-col p-2">
            <label htmlFor="">Company</label>
            <input
              type="text"
              value={job.company}
              className="h-8 w-full border border-zinc-300 px-1"
              onChange={e =>
                handleInputChange('company', e.target.value, job.id)
              }
            />
          </div>

          <div className="flex flex-col p-2">
            <label htmlFor="">Position</label>
            <input
              type="text"
              value={job.position}
              className="h-8 w-full border border-zinc-300 px-1"
              onChange={e =>
                handleInputChange('position', e.target.value, job.id)
              }
            />
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col p-2">
              <label htmlFor="">From</label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  className="col-span-2 h-8 w-full border border-zinc-300 px-1"
                  onChange={e =>
                    handleInputChange('startDate', e.target.value, job.id)
                  }
                >
                  {months.map(month => {
                    return <option value={`${month}`}>{month}</option>;
                  })}
                </select>
                <select
                  className="h-8 w-full border border-zinc-300 px-1"
                  onChange={e =>
                    handleInputChange('startYear', e.target.value, job.id)
                  }
                >
                  {years.map(year => {
                    return <option value={`${year}`}>{year}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="flex flex-col p-2">
              <label htmlFor="">To</label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  className="col-span-2 h-8 w-full border border-zinc-300 px-1"
                  onChange={e =>
                    handleInputChange('endDate', e.target.value, job.id)
                  }
                >
                  {months.map(month => {
                    return <option value={`${month}`}>{month}</option>;
                  })}
                </select>
                <select
                  className="h-8 w-full border border-zinc-300 px-1"
                  onChange={e =>
                    handleInputChange('endYear', e.target.value, job.id)
                  }
                >
                  {years.map(year => {
                    return <option value={`${year}`}>{year}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={job.description}
              className="h-8 w-full border border-zinc-300 px-1"
              onChange={e =>
                handleInputChange('description', e.target.value, job.id)
              }
            />
          </div>
        </div>
      </div>
    );
  });
  return <>{jobs}</>;
}

function Experience() {
  const { data, setData } = useDataContext();
  const newData = {
    id: 0,
    position: '',
    company: '',
    startDate: '',
    startYear: '',
    endDate: '',
    endYear: '',
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
        className="bg-emphasis-500 px-2 py-2 font-semibold text-slate-500 duration-200 hover:text-black"
      >
        Add Job
      </button>
      <div className="mr-2 grid gap-y-4 p-4">
        <JobRender></JobRender>
      </div>
    </AnimatedPage>
  );
}

export default Experience;
