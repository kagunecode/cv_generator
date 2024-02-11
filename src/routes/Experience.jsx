import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Field, DateField } from '../components/Field';
import Card from '../components/Card';
import { useData } from '../store';
import commonProps from '../utilities/commonProps';

function Experience() {
  const addItem = useData(state => state.addItem);

  function handleAddJob() {
    const newJob = {
      id: uuidv4(),
      position: '',
      company: '',
      startDate: 'January',
      startYear: '2021',
      endDate: 'January',
      endYear: '2024',
      description: '',
      status: true,
    };
    addItem('experience', newJob);
  }

  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Experience</h1>
      <p>Add previous jobs related to the job you're applying to</p>
      <div className="mr-2 grid gap-y-4 p-4 text-sm lg:text-lg">
        <JobRender />
      </div>
      <div className="flex justify-center px-6">
        <button
          onClick={handleAddJob}
          className="border px-10 py-2 text-sm font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black lg:text-lg"
        >
          Add Job
        </button>
      </div>
    </AnimatedPage>
  );
}

function JobRender() {
  const [experience, updateItem] = useData(state => [
    state.experience,
    state.updateItem,
  ]);

  const jobs = experience.map(job => {
    return (
      <Card
        title={`${job.position} at ${job.company}`}
        item={job}
        section="experience"
        key={job.id}
      >
        <div className="flex flex-col p-2 text-sm lg:text-lg">
          <Field
            arraySet
            name="Company"
            field="company"
            value={job.company}
            {...commonProps(job, updateItem)}
          />
        </div>
        <div className="flex flex-col p-2 text-sm lg:text-lg">
          <Field
            arraySet
            name="Position"
            field="position"
            value={job.position}
            {...commonProps(job, updateItem)}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 text-sm lg:text-lg xl:col-span-1">
          <div className="flex flex-col p-2 text-sm lg:text-lg">
            <DateField
              name="From"
              set={updateItem}
              section="experience"
              index={job.id}
              field="startDate"
              fieldTwo="startYear"
              valueOne={job.startDate}
              valueTwo={job.startYear}
              useMonth
            />
          </div>
          <div className="flex flex-col p-2 text-sm lg:text-lg">
            <DateField
              name="To"
              set={updateItem}
              section="experience"
              index={job.id}
              field="endDate"
              fieldTwo="endYear"
              valueOne={job.endDate}
              valueTwo={job.endYear}
              useMonth
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col p-2 text-sm lg:text-lg xl:col-span-1">
          <Field
            arraySet
            name="Description"
            field="description"
            value={job.description}
            {...commonProps(job, updateItem)}
          />
        </div>
      </Card>
    );
  });
  return <AnimatePresence>{jobs}</AnimatePresence>;
}

export default Experience;
