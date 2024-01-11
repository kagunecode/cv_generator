import { create } from 'zustand';
import cvData from './data/cvData';

const useData = create(set => ({
  generalInfo: cvData.generalInfo,
  updateGeneral: (field, value) =>
    set(state => ({
      generalInfo: { ...state.generalInfo, [field]: value },
    })),
}));

export { useData };
