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
      [section]: state[section].map(item =>
        item.id === index ? { ...item, [field]: value } : item,
      ),
    })),

  deleteItem: (section, id) =>
    set(state => ({
      [section]: state[section].filter(item => item.id !== id),
    })),

  addItem: (section, newItem) =>
    set(state => ({ [section]: [...state[section], newItem] })),
}));

export { useData };
