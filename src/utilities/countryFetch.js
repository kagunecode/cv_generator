import axios from 'axios';

const countryFetch = setCountries => {
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
};

export default countryFetch;
