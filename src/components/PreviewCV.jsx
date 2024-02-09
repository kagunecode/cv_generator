import React, { useState } from 'react';
import { useData } from '../store';
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer';
import cvData from '../data/cvData';
import Inter from '/fonts/Inter.ttf';
import InterBold from '/fonts/Inter-Bold.ttf';
import InterItalic from '/fonts/Inter-Italic.ttf';

Font.register({
  family: 'Inter',
  fonts: [
    { src: Inter },
    { src: InterBold, fontWeight: 700 },
    { src: InterItalic, fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#FFC107',
    color: 'black',
    padding: 20,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '20px',
  },
  profileImage: {
    borderRadius: '50%',
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  intro: {
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

function PDFDocument({ generalInfo, education, experience, skills }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {generalInfo.photo && (
            <Image style={styles.profileImage} src={generalInfo.photo} />
          )}
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
            {generalInfo.fullname}
          </Text>
          <Text style={{ fontSize: 16, fontStyle: 'italic', color: 'black' }}>
            {generalInfo.title}
          </Text>
          <Text
            style={styles.text}
          >{`${generalInfo.age}, ${generalInfo.country}, ${generalInfo.city}`}</Text>
          <Text style={styles.text}>{generalInfo.email}</Text>
          <Text style={styles.text}>{generalInfo.phone}</Text>
          <Text style={styles.intro}>{generalInfo.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>Experience</Text>
          {experience.map(job => (
            <View key={job.id} style={styles.text}>
              <Text style={styles.bold}>{job.position}</Text>
              <Text>{job.company}</Text>
              <Text>{`${job.startDate} ${job.startYear} - ${job.endDate} ${job.endYear}`}</Text>
              <Text>{job.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>Education</Text>
          {education.map(ed => (
            <View key={ed.id} style={styles.text}>
              <Text style={styles.bold}>{ed.title}</Text>
              <Text>{ed.institution}</Text>
              <Text>{`${ed.start} - ${ed.end}`}</Text>
              <Text>{ed.degree}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subheader}>Skills</Text>
          {skills.map(skill => (
            <View key={skill.id} style={styles.text}>
              <Text style={styles.bold}>{skill.name}</Text>
              <Text>{skill.expertise}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

function PreviewCV() {
  const [generalInfo, setGeneralInfo] = useState(cvData.generalInfo);
  const [experience, setExperience] = useState(cvData.experience);
  const [education, setEducation] = useState(cvData.education);
  const [skills, setSkills] = useState(cvData.skills);

  const [dataGeneralInfo, dataExperience, dataEducation, dataSkills] = useData(
    state => [
      state.generalInfo,
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
            {({ blob, url, loading, error }) =>
              loading ? 'Loading...' : 'Download'
            }
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
