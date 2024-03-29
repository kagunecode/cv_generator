import ImageUpload from '../components/ImageUpload';
import { Field, CountryField } from '../components/Field';
import { AnimatedPage } from '../components/AnimatedPage';

import { useData } from '../store';
import commonProps from '../utilities/commonProps';

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
  const generalInfo = useData(state => state.generalInfo[0]);

  return (
    <div className="row-auto mr-5 mt-5 grid flex-1 grid-cols-1 border bg-zinc-50 p-5 text-sm lg:text-lg">
      <div className="flex flex-col">
        <Field
          name="Full Name"
          field="fullname"
          value={generalInfo.fullname}
          {...commonProps('generalInfo', generalInfo)}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Age"
          field="age"
          value={generalInfo.age}
          desc="(no specific formatting)"
          {...commonProps('generalInfo', generalInfo)}
        ></Field>
      </div>
      <div className="flex flex-col">
        <Field
          name="Title"
          field="title"
          value={generalInfo.title}
          {...commonProps('generalInfo', generalInfo)}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Email"
          field="email"
          value={generalInfo.email}
          {...commonProps('generalInfo', generalInfo)}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="Phone"
          field="phone"
          value={generalInfo.phone}
          {...commonProps('generalInfo', generalInfo)}
        />
      </div>
      <div className="flex flex-col">
        <CountryField
          name="Country"
          field="country"
          value={generalInfo.country}
          {...commonProps('generalInfo', generalInfo)}
        />
      </div>
      <div className="flex flex-col">
        <Field
          name="City"
          field="city"
          value={generalInfo.city}
          {...commonProps('generalInfo', generalInfo)}
        />
      </div>
      <div className="md:grid md:grid-cols-3">
        <div className="flex flex-col md:col-span-2">
          <Field
            name="About You"
            field="about"
            value={generalInfo.about}
            textArea
            {...commonProps(
              'generalInfo',
              generalInfo,
              'h-20 md:h-[240px] border border-zinc-300 p-1 text-sm lg:text-lg',
            )}
          />
        </div>
        <ImageUpload />
      </div>
    </div>
  );
}

export default General;
