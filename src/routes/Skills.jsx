import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useData } from '../store';

export default function Skills() {
  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Skills</h1>
      <p>Flex on the knowledge you have on different areas</p>
      <div className="mr-2 grid gap-y-4 p-4">
        <SkillRender />
      </div>
    </AnimatedPage>
  );
}

function SkillRender() {
  const [skills, deleteItem, addItem] = useData(state => [
    state.skills,
    state.deleteItem,
    state.addItem,
  ]);

  const [skillName, setSkillName] = useState('');

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const [active, setActive] = useState('Beginner');

  function handleSkillLevel(selection) {
    const newSelection = selection;
    setActive(newSelection);
  }

  function handleAddSkill() {
    console.log(skillName);
    if (skillName == '') return;
    const newItem = { id: uuidv4(), name: skillName, expertise: active };
    addItem('skills', newItem);
    setSkillName('');
  }

  function getProficiency(proficiency) {
    switch (proficiency) {
      case 'Beginner':
        return 'w-[25%]';
      case 'Intermediate':
        return 'w-[50%]';
      case 'Advanced':
        return 'w-[75%]';
      case 'Expert':
        return 'w-[100%]';
    }
  }

  return (
    <AnimatePresence>
      <div className="flex h-full flex-col">
        <div
          id="input-container"
          className="mb-10 grid h-16 grid-cols-5 xl:mb-0"
        >
          <input
            onChange={e => setSkillName(e.target.value)}
            className="col-span-5 h-8 w-full border border-zinc-300 px-1 text-sm xl:col-span-2 xl:h-full xl:text-xl"
            value={skillName}
          />
          <div className="text-md col-span-5 grid grid-cols-2 grid-rows-1 xl:col-span-2 xl:ml-2 xl:grid-cols-4">
            {skillLevels.map((skillLevel, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleSkillLevel(skillLevel)}
                  className={`border duration-200 ${
                    active == skillLevel
                      ? 'bg-emphasis-500 font-bold'
                      : 'bg-zinc-50 hover:bg-emphasis-500'
                  }`}
                >
                  {skillLevel}
                </button>
              );
            })}
          </div>
          <button
            onClick={handleAddSkill}
            className="col-span-5 h-10 border font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black xl:col-span-1 xl:ml-2 xl:h-full"
          >
            Add Skill
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(skill => {
            return (
              <SkillCard key={skill.id}>
                <div className="flex justify-between">
                  <h1 className="truncate text-xl font-bold">{skill.name}</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-red-600"
                    onClick={() => deleteItem('skills', skill.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <div className="mt-2 h-6 w-full border bg-zinc-100">
                  <div
                    className={`h-full bg-emphasis-500 ${getProficiency(
                      skill.expertise,
                    )}`}
                  />
                </div>
              </SkillCard>
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
}

function SkillCard({ children }) {
  const animations = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -1000 },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex h-[7rem] w-full flex-col border bg-zinc-50 p-7"
    >
      {children}
    </motion.div>
  );
}
