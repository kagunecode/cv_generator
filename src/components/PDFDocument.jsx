import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import { styles } from '../data/CVStyles';

export default function PDFDocument({
  generalInfo,
  education,
  experience,
  skills,
}) {
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
