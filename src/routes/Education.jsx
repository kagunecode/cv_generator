import { AnimatedPage } from '../components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';

import Card from '../components/Card';
import { Field, DateField } from '../components/Field';
import { useData } from '../store';
import { addEducation } from '../utilities/addItems';
import commonProps from '../utilities/commonProps';

function Education() {
  const addItem = useData(state => state.addItem);

  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">Education</h1>
      <p>
        Degrees, certificates and proven educational experiences. Add as many as
        you can!
      </p>
      <div className="grid gap-y-4 p-4 text-sm lg:text-lg">
        <FieldsRender />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => addEducation(addItem)}
          className="border px-4 py-2 font-semibold duration-200 hover:bg-emphasis-500"
        >
          Add Education
        </button>
      </div>
    </AnimatedPage>
  );
}

function FieldsRender() {
  const education = useData(state => state.education);

  const edu = education.map(ed => {
    return (
      <Card
        title={`${ed.title} at ${ed.institution}`}
        item={ed}
        section="education"
        key={ed.id}
      >
        <div className="flex flex-col p-2 text-sm lg:text-lg">
          <Field
            name="Institution"
            field="institution"
            value={ed.institution}
            {...commonProps('education', ed)}
          />
        </div>
        <div className="flex flex-col p-2 text-sm lg:text-lg">
          <Field
            name="Title"
            field="title"
            value={ed.title}
            {...commonProps('education', ed)}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 text-sm md:col-span-1 lg:text-lg">
          <div className="flex flex-col p-2 text-sm lg:text-lg">
            <DateField
              name="From"
              section="education"
              index={ed.id}
              fieldTwo="start"
              valueTwo={ed.start}
            />
          </div>
          <div className="flex flex-col p-2 text-sm lg:text-lg">
            <DateField
              name="To"
              section="education"
              index={ed.id}
              fieldTwo="end"
              valueTwo={ed.end}
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col p-2 text-sm md:col-span-1 lg:text-lg">
          <Field
            name="Degree"
            field="degree"
            value={ed.degree}
            {...commonProps('education', ed)}
          />
        </div>
      </Card>
    );
  });
  return <AnimatePresence>{edu}</AnimatePresence>;
}

export default Education;
