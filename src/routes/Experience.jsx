import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Field, DateField } from '../components/Field';
import Card from '../components/Card';
import { useData } from '../store';

function JobRender() {
  const [experience, updateItem] = useData(state => [
    state.experience,
    state.updateItem,
  ]);

  const jobs = experience.map(job => {
    return (
      <Card
        title={`Job at ${job.company}`}
        item={job}
        section="experience"
        key={job.id}
      >
        <div className="flex flex-col p-2">
          <Field
            arraySet
            name="Company"
            section="experience"
            index={job.id}
            field="company"
            set={updateItem}
            value={job.company}
            className="h-8 w-full border border-zinc-300 px-1"
          />
        </div>
        <div className="flex flex-col p-2">
          <Field
            arraySet
            name="Position"
            section="experience"
            index={job.id}
            field="position"
            set={updateItem}
            value={job.position}
            className="h-8 w-full border border-zinc-300 px-1"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-2">
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
          <div className="flex flex-col p-2">
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
        <div className="flex flex-col p-2">
          <Field
            arraySet
            name="Description"
            section="experience"
            index={job.id}
            field="description"
            set={updateItem}
            value={job.description}
            className="h-8 w-full border border-zinc-300 px-1"
          />
        </div>
      </Card>
    );
  });
  return <AnimatePresence>{jobs}</AnimatePresence>;
}

function Experience() {
  const addItem = useData(state => state.addItem);

  const newData = {
    id: 0,
    position: '',
    company: '',
    startDate: '',
    startYear: '',
    endDate: '',
    endYear: '',
    description: '',
    status: true,
  };

  function handleAddJob() {
    const newJob = { ...newData, id: uuidv4() };
    addItem('experience', newJob);
  }

  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Experience</h1>
      <p>Add previous jobs related to the job you're applying to</p>
      <div className="mr-2 grid gap-y-4 p-4">
        <JobRender></JobRender>
      </div>
      <div className="flex justify-center px-6">
        <button
          onClick={handleAddJob}
          className="border px-10 py-2 font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black"
        >
          Add Job
        </button>
      </div>
    </AnimatedPage>
  );
}

export default Experience;
