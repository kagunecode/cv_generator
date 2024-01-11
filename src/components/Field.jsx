import { useState, useEffect } from 'react';
import axios from 'axios';

function Field({
  name,
  section,
  index,
  field,
  set,
  desc,
  textArea = false,
  arraySet = false,
  ...props
}) {
  return (
    <>
      <label htmlFor={field}>
        {name}
        {desc && <span className="text-xs text-slate-600"> {desc}</span>}
      </label>
      {!textArea && !arraySet && (
        <input
          id={field}
          onChange={e => set(field, e.target.value)}
          {...props}
        />
      )}
      {textArea && (
        <textarea
          id={field}
          onChange={e => set(field, e.target.value)}
          {...props}
        />
      )}
      {arraySet && (
        <input
          onChange={e => set(section, index, field, e.target.value)}
          {...props}
        />
      )}
    </>
  );
}

function CountryField({ name, field, set, ...props }) {
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
  return (
    <>
      <label htmlFor={field}>{name}</label>
      <select
        id={field}
        className="mr-4 h-8 border border-zinc-300 px-1"
        onChange={e => set(field, e.target.value)}
        {...props}
      >
        {countries.map(country => {
          return (
            <option key={country.name.common} value={country.name.common}>
              {country.name.common}
            </option>
          );
        })}
      </select>
    </>
  );
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i,
);

function DateField({
  name,
  section,
  fieldTwo,
  index,
  field,
  set,
  valueOne,
  valueTwo,
  ...props
}) {
  return (
    <>
      <label htmlFor="">{name}</label>
      <div className="grid grid-cols-3 gap-2">
        <select
          className="col-span-2 h-8 w-full border border-zinc-300 px-1"
          onChange={e => set(section, index, field, e.target.value)}
          value={valueOne}
        >
          {months.map(month => {
            return (
              <option key={month} value={`${month}`}>
                {month}
              </option>
            );
          })}
        </select>
        <select
          className="h-8 w-full border border-zinc-300 px-1"
          onChange={e => set(section, index, fieldTwo, e.target.value)}
          value={valueTwo}
        >
          {years.map(year => {
            return (
              <option key={year} value={`${year}`}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export { Field, CountryField, DateField };
