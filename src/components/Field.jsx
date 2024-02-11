import { useState, useEffect } from 'react';
import { useData } from '../store';
import countryFetch from '../utilities/countryFetch';

function Field({
  name,
  section,
  index,
  field,
  desc,
  textArea = false,
  arraySet = true,
  ...props
}) {
  const set = useData(state => state.updateItem);
  const handleChange = e => {
    set(section, index, field, e.target.value);
  };
  return (
    <>
      <label htmlFor={field}>
        {name}
        {desc && <span className="text-xs text-slate-600"> {desc}</span>}
      </label>
      {textArea && <textarea id={field} onChange={handleChange} {...props} />}
      {arraySet && !textArea && <input onChange={handleChange} {...props} />}
    </>
  );
}

function CountryField({ name, field, section, index, ...props }) {
  const [countries, setCountries] = useState([]);
  const set = useData(state => state.updateItem);
  const handleChange = e => {
    set(section, index, field, e.target.value);
  };

  useEffect(() => {
    countryFetch(setCountries);
  }, [setCountries]);

  return (
    <>
      <label htmlFor={field}>{name}</label>
      <select id={field} onChange={handleChange} {...props}>
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
  valueOne,
  valueTwo,
  useMonth = false,
}) {
  const set = useData(state => state.updateItem);
  return (
    <>
      <label htmlFor="">{name}</label>
      <div className="grid grid-cols-1 gap-2 text-sm lg:text-lg xl:grid-cols-3">
        {useMonth && (
          <select
            className=" h-8 w-full border border-zinc-300 px-1 xl:col-span-2"
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
        )}
        <select
          className={`h-8 w-full border border-zinc-300 px-1 xl:col-span-1 ${
            !useMonth && 'xl:col-span-3'
          }`}
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
