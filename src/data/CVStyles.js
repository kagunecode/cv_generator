import { StyleSheet } from '@react-pdf/renderer';

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
    objectFit: 'cover',
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

export { styles };
