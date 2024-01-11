import { useState } from 'react';
import { AnimatedPage } from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { useDataContext } from '../contexts/DataContext';

function Education() {
  const { data, setData } = useDataContext();
  const newData = {
    id: 0,
    institution: '',
    title: '',
    location: '',
    start: '',
    end: '',
    degree: '',
    status: true,
  };

  function handleAddEducation() {
    const newEd = { ...newData, id: uuidv4() };
    setData(prevData => ({
      ...prevData,
      education: [...prevData.education, newEd],
    }));
  }

  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Education</h1>
      <p>
        Degrees, certificates and proven educational experiences, add as many as
        you can!
      </p>
      <div className="mr-2 grid gap-y-4 p-4">
        <FieldsRender></FieldsRender>
      </div>
      <div className="flex justify-center px-6">
        <button
          onClick={handleAddEducation}
          className="border px-10 py-2 font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black"
        >
          Add Education
        </button>
      </div>
    </AnimatedPage>
  );
}

function FieldsRender() {
  const { data, setData } = useDataContext();

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );

  const handleInputChange = (fieldId, value, edId) => {
    setData(prevData => ({
      ...prevData,
      education: prevData['education'].map(item =>
        item.id === edId ? { ...item, [fieldId]: value } : item,
      ),
    }));
  };

  const handleEducationDeletion = id => {
    setData(prevData => ({
      ...prevData,
      education: prevData.education.filter(item => item.id !== id),
    }));
    console.log(data);
  };

  const handleCardStatus = (edId, value) => {
    setData(prevData => ({
      ...prevData,
      education: prevData.education.map(item =>
        item.id === edId ? { ...item, status: value } : item,
      ),
    }));
  };

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

  const education = data.education.map(ed => {
    return (
      <motion.div
        className="border bg-zinc-50 p-5"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.1 }}
        key={ed.id}
      >
        <div className="flex items-center justify-between">
          <h1 className="p-2 text-xl font-bold">{`Studies at ${ed.institution}`}</h1>
          <div className="flex gap-3 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-red-600"
              onClick={() => handleEducationDeletion(ed.id)}
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
              animate={ed.status ? 'open' : 'closed'}
              transition={{ duration: 0.05 }}
              onClick={() => handleCardStatus(ed.id, !ed.status)}
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
            animate={ed.status ? 'open' : 'closed'}
            variants={cardVariants}
            className="grid grid-cols-2"
            key={ed.id}
            initial={false}
          >
            <div className="flex flex-col p-2">
              <label htmlFor="">Institution</label>
              <input
                type="text"
                value={ed.institution}
                className="h-8 w-full border border-zinc-300 px-1"
                onChange={e =>
                  handleInputChange('institution', e.target.value, ed.id)
                }
              />
            </div>
            <div className="flex flex-col p-2">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={ed.title}
                className="h-8 w-full border border-zinc-300 px-1"
                onChange={e =>
                  handleInputChange('title', e.target.value, ed.id)
                }
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col p-2">
                <label htmlFor="">From</label>
                <div className="gap-2">
                  <select
                    className="h-8 w-full border border-zinc-300 px-1"
                    onChange={e =>
                      handleInputChange('start', e.target.value, ed.id)
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
                <div className="gap-2">
                  <select
                    className="h-8 w-full border border-zinc-300 px-1"
                    onChange={e =>
                      handleInputChange('end', e.target.value, job.id)
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
              <label htmlFor="">Degree</label>
              <input
                type="text"
                value={ed.degree}
                className="h-8 w-full border border-zinc-300 px-1"
                onChange={e =>
                  handleInputChange('degree', e.target.value, ed.id)
                }
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  });
  return <AnimatePresence>{education}</AnimatePresence>;
}

export default Education;
