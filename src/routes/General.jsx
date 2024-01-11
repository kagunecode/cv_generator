import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

import ImageUpload from '../components/ImageUpload';
import Field from '../components/Field';

import { useDataContext } from '../contexts/DataContext';

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
      className="flex h-full flex-col"
    >
      <h1 className="text-5xl font-semibold">General</h1>
      <p>All your basic information goes here</p>
      <GeneralForm />
    </motion.div>
  );
}

function GeneralForm() {
  const { data, setData } = useDataContext();
  const [countries, setCountries] = useState([]);

  // TODO: Move the fetches into their own utility module for better management
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      const alphCountry = response.data.sort((a, b) => {
        const nameA = a.name.common;
        const nameB = b.name.common;

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setCountries(alphCountry);
    });
  }, []);

  // TODO: Check if the input changes can be managed with a global setter instead
  const handleInputChange = (fieldId, value, index) => {
    setData(prevData => ({
      ...prevData,
      generalInfo: prevData['generalInfo'].map((item, i) =>
        i === index ? { ...item, [fieldId]: value } : item,
      ),
    }));
  };

  return (
    <div className="row-auto mr-5 mt-5 grid flex-1 grid-cols-1 border bg-zinc-50 p-5">
      <div className="flex flex-col">
        <Field
          name="Full Name"
          field="fullname"
          set={handleInputChange}
          index={0}
          className="mr-4 h-8 border border-zinc-300 px-1"
          value={data.generalInfo[0].fullname}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age">
          Age
          <span className="text-xs text-slate-600">
            {' '}
            (no specific formatting)
          </span>
        </label>
        <input
          id="age"
          type="text"
          className="mr-4 h-8 border border-zinc-300 px-1"
          onChange={e => handleInputChange('age', e.target.value, 0)}
          value={data.generalInfo[0].age}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="mr-4 h-8 border border-zinc-300 px-1"
          onChange={e => handleInputChange('title', e.target.value, 0)}
          value={data.generalInfo[0].title}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          className="mr-4 h-8 border border-zinc-300 px-1"
          onChange={e => handleInputChange('email', e.target.value, 0)}
          value={data.generalInfo[0].email}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          className="mr-4 h-8 border border-zinc-300 px-1"
          onChange={e => handleInputChange('phone', e.target.value, 0)}
          value={data.generalInfo[0].phone}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="location">Country</label>
        <select
          id="location"
          className="mr-4 h-8 border border-zinc-300 px-1"
          onChange={e => handleInputChange('country', e.target.value, 0)}
          value={data.generalInfo[0].country}
        >
          {countries.map(country => {
            return (
              <option key={country.name.common} value={country.name.common}>
                {country.name.common}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="location">City</label>
        <input
          id="location"
          className="mr-4 h-8 border border-zinc-300 px-1"
          onChange={e => handleInputChange('city', e.target.value, 0)}
          value={data.generalInfo[0].city}
        ></input>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="about">About you</label>
          <textarea
            id="about"
            className="mr-4 h-40 border border-zinc-300 p-1"
            onChange={e => handleInputChange('about', e.target.value, 0)}
            value={data.generalInfo[0].about}
          />
        </div>
        <ImageUpload></ImageUpload>
      </div>
    </div>
  );
}

export default General;
