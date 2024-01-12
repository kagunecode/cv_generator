import { motion } from 'framer-motion';

import ImageUpload from '../components/ImageUpload';
import { Field, CountryField } from '../components/Field';

import { useData } from '../store';

function General() {
  // TODO: Move variants to a separate file
  const animations = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    //exit: { opacity: 0, y: -10 },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      //exit="exit"
      transition={{ duration: 0.3 }}
      className="flex h-[97vh] flex-col"
    >
      <h1 className="text-5xl font-semibold">General</h1>
      <p>All your basic information goes here</p>
      <GeneralForm />
    </motion.div>
  );
}

function GeneralForm() {
  const [generalInfo, updateGeneral] = useData(state => [
    state.generalInfo,
    state.updateGeneral,
  ]);

  return (
    <div className="row-auto mr-5 mt-5 grid flex-1 grid-cols-1 border bg-zinc-50 p-5">
      <div className="flex flex-col">
        <Field
          name="Full Name"
          field="fullname"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.fullname}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Age"
          field="age"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.age}
          desc="(no specific formatting)"
        ></Field>
      </div>
      <div className="flex flex-col">
        <Field
          name="Title"
          field="title"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.title}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Email"
          field="email"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.email}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Phone"
          field="phone"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.phone}
        />
      </div>
      <div className="flex flex-col">
        <CountryField
          name="Country"
          field="country"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.country}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="City"
          field="city"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={generalInfo.city}
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <Field
            name="About You"
            field="about"
            set={updateGeneral}
            className="mr-4 h-40 border border-zinc-300 p-1"
            value={generalInfo.about}
            textArea
          />
        </div>
        <ImageUpload />
      </div>
    </div>
  );
}

export default General;
