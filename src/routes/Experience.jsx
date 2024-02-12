import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';

import { Field, DateField } from '../components/Field';
import Card from '../components/Card';
import { useData } from '../store';
import commonProps from '../utilities/commonProps';
import { addJob } from '../utilities/addItems';

function Experience() {
  const addItem = useData(state => state.addItem);

  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Experience</h1>
      <p>Add previous jobs related to the job you're applying to</p>
      <div className="mr-2 grid gap-y-4 p-4 text-sm lg:text-lg">
        <JobRender />
      </div>
      <div className="flex justify-center px-6">
        <button
          onClick={() => addJob(addItem)}
          className="border px-5 py-2 text-sm font-semibold duration-200 hover:bg-emphasis-500 lg:px-8 lg:text-lg"
        >
          Add Job
        </button>
      </div>
    </AnimatedPage>
  );
}

function JobRender() {
  const experience = useData(state => state.experience);

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
            {...commonProps('experience', job)}
          />
        </div>
        <div className="flex flex-col p-2 text-sm lg:text-lg">
          <Field
            arraySet
            name="Position"
            field="position"
            value={job.position}
            {...commonProps('experience', job)}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 text-sm lg:text-lg xl:col-span-1">
          <div className="flex flex-col p-2 text-sm lg:text-lg">
            <DateField
              name="From"
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
            {...commonProps('experience', job)}
          />
        </div>
      </Card>
    );
  });
  return <AnimatePresence>{jobs}</AnimatePresence>;
}

export default Experience;
