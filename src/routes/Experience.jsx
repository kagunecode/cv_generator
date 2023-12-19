import { useState } from 'react';
import { AnimatedPage } from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

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

  const handleInputChange = (fieldId, value, jobId) => {
    setData(prevData => ({
      ...prevData,
      experience: prevData['experience'].map(item =>
        item.id === jobId ? { ...item, [fieldId]: value } : item,
      ),
    }));
  };

  const handleJobDeletion = id => {
    setData(prevData => ({
      ...prevData,
      experience: prevData.experience.filter(item => item.id !== id),
    }));
    console.log(data);
  };

  const handleCardStatus = (jobId, value) => {
    setData(prevData => ({
      ...prevData,
      experience: prevData.experience.map(item =>
        item.id === jobId ? { ...item, status: value } : item,
      ),
    }));
  };

  const animations = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  const cardVariants = {
    open: { opacity: 1, y: 0, display: 'grid' },
    closed: {
      opacity: 0,
      y: -10,
      display: 'none',
      height: '0px',
      zIndex: -20,
    },
  };

  const jobs = data.experience.map(job => {
    return (
      <motion.div
        className="border bg-zinc-50 p-5"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2 }}
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
              onClick={() => handleJobDeletion(job.id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-black"
              onClick={() => handleCardStatus(job.id, !job.status)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </div>
        </div>
        <motion.div
          animate={job.status ? 'open' : 'closed'}
          variants={cardVariants}
          className="grid-cols-2"
          key={job.id}
        >
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
                    return (
                      <option key={month} value={`${month}`}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="h-8 w-full border border-zinc-300 px-1"
                  onChange={e =>
                    handleInputChange('startYear', e.target.value, job.id)
                  }
                >
                  {years.map(year => {
                    return (
                      <option key={year} value={`${year}`}>
                        {year}
                      </option>
                    );
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
                    return (
                      <option key={month} value={`${month}`}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="h-8 w-full border border-zinc-300 px-1"
                  onChange={e =>
                    handleInputChange('endYear', e.target.value, job.id)
                  }
                >
                  {years.map(year => {
                    return (
                      <option key={year} value={`${year}`}>
                        {year}
                      </option>
                    );
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
        </motion.div>
      </motion.div>
    );
  });
  return <AnimatePresence>{jobs}</AnimatePresence>;
}

function Experience() {
  const { data, setData } = useDataContext();
  const [cardState, setCardState] = useState([
    { id: 0, status: true },
    { id: 3, status: false },
  ]);
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
    setData(prevData => ({
      ...prevData,
      experience: [...prevData.experience, newJob],
    }));
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
          className="border px-7 py-2 font-semibold text-slate-500 duration-200 hover:bg-emphasis-500 hover:text-black"
        >
          Add Job
        </button>
      </div>
    </AnimatedPage>
  );
}

export default Experience;
