import { AnimatedPage } from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Field, DateField } from '../components/Field';
import { useData } from '../store';

function JobRender() {
  const [experience, updateItem, deleteItem] = useData(state => [
    state.experience,
    state.updateItem,
    state.deleteItem,
  ]);

  const animations = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  const cardVariants = {
    open: {
      opacity: 1,
      display: 'grid',
      visibility: 'visible',
      pointerEvents: 'auto',
    },
    closed: {
      opacity: 0,
      height: '0px',
      visibility: 'visible',
      pointerEvents: 'none',
    },
  };

  const arrowVariants = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  };

  const jobs = experience.map(job => {
    return (
      <motion.div
        className="border bg-zinc-50 p-5"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.1 }}
        key={job.id}
      >
        <div className="flex items-center justify-between">
          <h1 className="p-2 text-xl font-bold">{`Job at ${job.company}`}</h1>
          <div className="flex gap-3 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-red-600"
              onClick={() => deleteItem('experience', job.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-black"
              variants={arrowVariants}
              animate={job.status ? 'open' : 'closed'}
              transition={{ duration: 0.05 }}
              onClick={() =>
                updateItem('experience', job.id, 'status', !job.status)
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </motion.svg>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            animate={job.status ? 'open' : 'closed'}
            variants={cardVariants}
            className="grid grid-cols-2"
            key={job.id}
            initial={false}
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
          </motion.div>
        </div>
      </motion.div>
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
