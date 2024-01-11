import { create } from 'zustand';
import cvData from './data/cvData';

const useData = create(set => ({
  generalInfo: cvData.generalInfo,
  experience: cvData.experience,
  updateGeneral: (field, value) =>
    set(state => ({
      generalInfo: { ...state.generalInfo, [field]: value },
    })),
  updateItem: (section, index, field, value) =>
    set(state => ({
      [section]: state[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    })),
}));

export { useData };
