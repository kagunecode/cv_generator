import { useState, useEffect } from 'react';
import axios from 'axios';

function Field({ name, field, set, desc, textArea = false, ...props }) {
  return (
    <>
      <label htmlFor={field}>
        {name}
        {desc && <span className="text-xs text-slate-600"> {desc}</span>}
      </label>
      {!textArea && (
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

export { Field, CountryField };
