import { v4 as uuidv4 } from 'uuid';

function addEducation(addItem) {
  const newData = {
    id: 0,
    institution: '',
    title: '',
    location: '',
    start: '',
    end: '',
    degree: '',
    status: true,
  };
  const newEd = { ...newData, id: uuidv4() };
  addItem('education', newEd);
}

function addJob(addItem) {
  const newJob = {
    id: uuidv4(),
    position: '',
    company: '',
    startDate: 'January',
    startYear: '2021',
    endDate: 'January',
    endYear: '2024',
    description: '',
    status: true,
  };
  addItem('experience', newJob);
}

function addSkill(skillName, active, addItem, setSkillName) {
  if (skillName == '') return;
  const newItem = { id: uuidv4(), name: skillName, expertise: active };
  addItem('skills', newItem);
  setSkillName('');
}

export { addEducation, addJob, addSkill };
