import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import getProficiency from '../utilities/getProficiency';
import TrashCanIcon from '../icons/TrashCanIcon';
import { SkillCard } from '../components/Card';
import { addSkill } from '../utilities/addItems';

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

  const skillsRender = skills.map(skill => {
    return (
      <SkillCard key={skill.id}>
        <div className="flex justify-between">
          <h1 className="truncate text-xl font-bold">{skill.name}</h1>
          <TrashCanIcon onClick={() => deleteItem('skills', skill.id)} />
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
  });

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
            onClick={() => addSkill(skillName, active, addItem, setSkillName)}
            className="col-span-5 h-10 border font-semibold duration-200 hover:bg-emphasis-500 xl:col-span-1 xl:ml-2 xl:h-full"
          >
            Add Skill
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsRender}
        </div>
      </div>
    </AnimatePresence>
  );
}
