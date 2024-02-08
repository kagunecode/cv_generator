// Libraries
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import General from './routes/General';
import Experience from './routes/Experience';
import Welcome from './routes/Welcome';
import Sidebar from './components/Sidebar';
import Education from './routes/Education';
import Skills from './routes/Skills';

// Contexts
import { useSidebarContext } from './contexts/SidebarContext';

function App() {
  const location = useLocation();
  const variants = {
    open: { filter: 'blur(16px)', userSelect: 'none', pointerEvents: 'none' },
    closed: {},
  };
  const { status, setStatus } = useSidebarContext();

  return (
    <>
      <AnimatePresence mode="wait">{status && <Sidebar />}</AnimatePresence>
      <motion.div
        className="relative h-screen"
        initial={false}
        variants={variants}
        animate={status ? 'open' : 'false'}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {location.pathname != '/' && <Navbar />}
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
            path="/education"
            element={
              <Layout>
                <Education />
              </Layout>
            }
          />
          <Route
            path="/skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />
          <Route index element={<Welcome />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
