import { useState } from 'react';
import { useData } from '../store';
import { PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';
import cvData from '../data/cvData';
import Inter from '/fonts/Inter.ttf';
import InterBold from '/fonts/Inter-Bold.ttf';
import InterItalic from '/fonts/Inter-Italic.ttf';
import PDFDocument from './PDFDocument';

Font.register({
  family: 'Inter',
  fonts: [
    { src: Inter },
    { src: InterBold, fontWeight: 700 },
    { src: InterItalic, fontStyle: 'italic' },
  ],
});

function PreviewCV() {
  const [generalInfo, setGeneralInfo] = useState(cvData.generalInfo[0]);
  const [experience, setExperience] = useState(cvData.experience);
  const [education, setEducation] = useState(cvData.education);
  const [skills, setSkills] = useState(cvData.skills);

  const [dataGeneralInfo, dataExperience, dataEducation, dataSkills] = useData(
    state => [
      state.generalInfo[0],
      state.experience,
      state.education,
      state.skills,
    ],
  );

  function handleRender() {
    setGeneralInfo(dataGeneralInfo);
    setExperience(dataExperience);
    setEducation(dataEducation);
    setSkills(dataSkills);
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between gap-10 border bg-gray-50">
        <button
          className="px-10 py-2 font-bold duration-200 hover:bg-emphasis-500"
          onClick={handleRender}
        >
          Compile
        </button>
        <div className="px-10 py-2 font-bold duration-200 hover:bg-emphasis-500">
          <PDFDownloadLink
            fileName={`${generalInfo.fullname}_CV`}
            document={
              <PDFDocument
                generalInfo={generalInfo}
                experience={experience}
                education={education}
                skills={skills}
              />
            }
          >
            {({ loading }) => (loading ? 'Loading...' : 'Download')}
          </PDFDownloadLink>
        </div>
      </div>
      <PDFViewer showToolbar={false} className="h-full w-full">
        <PDFDocument
          generalInfo={generalInfo}
          experience={experience}
          education={education}
          skills={skills}
        />
      </PDFViewer>
    </div>
  );
}

export default PreviewCV;
