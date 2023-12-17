// Libraries
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import General from './routes/General';
import Experience from './routes/Experience';
import Welcome from './routes/Welcome';

// Styles
import './styles/styles.css';

function App() {
  const location = useLocation();

  return (
    <div className="h-screen">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/general"
          element={
            <Layout>
              <General />
            </Layout>
          }
        />
        <Route
          path="/experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          index
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </div>
  );
}

export default App;
