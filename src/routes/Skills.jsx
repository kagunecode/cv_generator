import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';

import Card from '../components/Card';
import { Field } from '../components/Field';

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
      <div className="flex justify-center px-6">
        <button className="border px-10 py-2 font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black">
          Add Skill
        </button>
      </div>
    </AnimatedPage>
  );
}

function SkillRender() {
  const [skills, updateItem] = useData(state => [
    state.skills,
    state.updateItem,
  ]);

  return (
    <AnimatePresence>
      <div className="grid grid-cols-5">
        <input className="col-span-4 h-8 w-full border border-zinc-300 px-1" />
        <button className="col-span-1 mx-2 border px-10 font-semibold text-slate-700 duration-200 hover:bg-emphasis-500 hover:text-black">
          Add Skill
        </button>
      </div>
    </AnimatePresence>
  );
}
