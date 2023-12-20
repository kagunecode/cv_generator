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

// Styles
import './styles/styles.css';

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
      </motion.div>
    </>
  );
}

export default App;
