import ImageUpload from '../components/ImageUpload';
import { Field, CountryField } from '../components/Field';
import { AnimatedPage } from '../components/AnimatedPage';

import { useData } from '../store';

function General() {
  return (
    <AnimatedPage>
      <h1 className="text-5xl font-semibold">General</h1>
      <p>All your basic information goes here</p>
      <GeneralForm />
    </AnimatedPage>
  );
}

function GeneralForm() {
  const [generalInfo, updateGeneral] = useData(state => [
    state.generalInfo,
    state.updateGeneral,
  ]);

  return (
    <div className="row-auto mr-5 mt-5 grid flex-1 grid-cols-1 border bg-zinc-50 p-5 text-sm text-sm lg:text-lg lg:text-lg">
      <div className="flex flex-col">
        <Field
          name="Full Name"
          field="fullname"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm text-sm lg:text-lg lg:text-lg"
          value={generalInfo.fullname}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Age"
          field="age"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm lg:text-lg"
          value={generalInfo.age}
          desc="(no specific formatting)"
        ></Field>
      </div>
      <div className="flex flex-col">
        <Field
          name="Title"
          field="title"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm lg:text-lg"
          value={generalInfo.title}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Email"
          field="email"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm lg:text-lg"
          value={generalInfo.email}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Phone"
          field="phone"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm lg:text-lg"
          value={generalInfo.phone}
        />
      </div>
      <div className="flex flex-col">
        <CountryField
          name="Country"
          field="country"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm lg:text-lg"
          value={generalInfo.country}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="City"
          field="city"
          set={updateGeneral}
          className="mr-4 h-8 border border-zinc-300 px-1 text-sm lg:text-lg"
          value={generalInfo.city}
        />
      </div>
      <div className="md:grid md:grid-cols-2">
        <div className="flex flex-col">
          <Field
            name="About You"
            field="about"
            set={updateGeneral}
            className="mr-4 h-40 border border-zinc-300 p-1 text-sm lg:text-lg"
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
