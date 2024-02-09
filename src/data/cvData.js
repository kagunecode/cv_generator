import defaultPhoto from '/images/default.jpg';

const cvData = {
  generalInfo: {
    fullname: 'John Doe',
    age: 'November 16 - 1998',
    title: 'Web Developer',
    email: 'jhondoe@gmail.com',
    phone: '999999999',
    country: 'United States',
    city: 'New York',
    about: 'Say something about you!',
    photo: defaultPhoto,
  },

  experience: [
    {
      id: 0,
      position: 'Software Engineer',
      company: 'Tech Co',
      startDate: 'January',
      startYear: '2021',
      endDate: 'May',
      endYear: '2023',
      description: 'Worked on exciting projects...',
      status: true,
    },
  ],
  education: [
    {
      id: 0,
      institution: 'Harvard University',
      title: 'Electronic Engineer',
      location: 'Cambridge - Massachussets',
      start: '2017',
      end: '2023',
      degree: 'Web Designer',
      status: true,
    },
  ],
  skills: [
    {
      id: 0,
      name: 'React',
      expertise: 'Beginner',
    },
  ],
};

export default cvData;
