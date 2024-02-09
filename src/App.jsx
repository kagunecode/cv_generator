// Libraries
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import General from './routes/General';
import Experience from './routes/Experience';
import Welcome from './routes/Welcome';
import Sidebar from './components/Sidebar';
import Education from './routes/Education';
import Skills from './routes/Skills';
import PreviewCV from './components/PreviewCV';

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
        <div className="grid h-full w-[calc(100vw-3rem)] translate-x-[3rem] grid-cols-3 p-3">
          <div className="col-span-2 overflow-y-auto overflow-x-hidden">
            <div>
              <Routes location={location} key={location.pathname}>
                <Route path="/general" element={<General />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route index element={<Welcome />} />
                <Route path="*" element={<Navigate to="/error" replace />} />
              </Routes>
            </div>
          </div>
          {location.pathname != '/' && (
            <div className="col-span-1 hidden p-2 lg:block">
              <PreviewCV />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default App;
