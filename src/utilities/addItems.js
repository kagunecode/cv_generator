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

export { addEducation };
