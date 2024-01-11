import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import Card from '../components/Card';
import { Field, DateField } from '../components/Field';
import { useData } from '../store';

function Education() {
  const addItem = useData(state => state.addItem);
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
    addItem('education', newEd);
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
  const [education, updateItem] = useData(state => [
    state.education,
    state.updateItem,
  ]);

  const edu = education.map(ed => {
    return (
      <Card
        title={`Studies at ${ed.institution}`}
        item={ed}
        section="education"
        key={ed.id}
      >
        <div className="flex flex-col p-2">
          <Field
            arraySet
            name="Institution"
            section="education"
            index={ed.id}
            field="institution"
            set={updateItem}
            value={ed.institution}
            className="h-8 w-full border border-zinc-300 px-1"
          />
        </div>
        <div className="flex flex-col p-2">
          <Field
            arraySet
            name="Title"
            section="education"
            index={ed.id}
            field="title"
            set={updateItem}
            value={ed.title}
            className="h-8 w-full border border-zinc-300 px-1"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-2">
            <DateField
              name="From"
              set={updateItem}
              section="education"
              index={ed.id}
              fieldTwo="start"
              valueTwo={ed.start}
            />
          </div>
          <div className="flex flex-col p-2">
            <DateField
              name="To"
              set={updateItem}
              section="education"
              index={ed.id}
              fieldTwo="end"
              valueTwo={ed.end}
            />
          </div>
        </div>
        <div className="flex flex-col p-2">
          <Field
            arraySet
            name="Degree"
            section="education"
            index={ed.id}
            field="degree"
            set={updateItem}
            value={ed.degree}
            className="h-8 w-full border border-zinc-300 px-1"
          />
        </div>
      </Card>
    );
  });
  return <AnimatePresence>{edu}</AnimatePresence>;
}

export default Education;
