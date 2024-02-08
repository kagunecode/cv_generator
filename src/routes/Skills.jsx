import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useData } from '../store';

export default function Skills() {
  return (
    <AnimatedPage>
      {' '}
      <h1 className="text-5xl font-semibold">Skills</h1>
      <p>Flex on the knowledge you have on different areas</p>
      <div className="mr-2 grid gap-y-4 p-4">
        <SkillRender></SkillRender>
      </div>
    </AnimatedPage>
  );
}

function SkillRender() {
  const [skills, updateItem, addItem] = useData(state => [
    state.skills,
    state.updateItem,
    state.addItem,
  ]);

  const [skillName, setSkillName] = useState();

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const [active, setActive] = useState('Beginner');

  function handleSkillLevel(selection) {
    const newSelection = selection;
    setActive(newSelection);
  }

  function handleAddSkill() {
    const newItem = { id: uuidv4(), name: skillName, expertise: active };
    addItem('skills', newItem);
  }

  return (
    <AnimatePresence>
      <div className="flex h-full flex-col">
        <div id="input-container" className="grid h-14 grid-cols-5">
          <input
            onChange={e => setSkillName(e.target.value)}
            className="col-span-2 h-full w-full border border-zinc-300 px-1 text-xl"
          />
          <div className="text-md col-span-2 ml-2 grid grid-cols-4 grid-rows-1">
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
            className="col-span-1 ml-2 border font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black"
          >
            Add Skill
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {skills.map(skill => {
            return (
              <SkillCard key={skill.id}>
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <div className="mt-4 grid h-12 grid-cols-4 border bg-zinc-100"></div>
              </SkillCard>
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
}

function SkillCard({ children }) {
  return (
    <div className="flex h-[9rem] w-full flex-col border bg-zinc-50 p-7">
      {children}
    </div>
  );
}
