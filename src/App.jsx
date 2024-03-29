// Libraries
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Components
import Navbar from './components/Navbar';
import General from './routes/General';
import Experience from './routes/Experience';
import Welcome from './routes/Welcome';
import Sidebar from './components/Sidebar';
import Education from './routes/Education';
import Skills from './routes/Skills';
import PreviewCV from './components/PreviewCV';
import MobileViewer from './components/MobileViewer';

// Contexts
import { useSidebarContext } from './contexts/SidebarContext';

function App() {
  const location = useLocation();
  const [showPreview, setPreview] = useState(false);
  const variants = {
    open: { filter: 'blur(16px)', userSelect: 'none', pointerEvents: 'none' },
    closed: {},
  };
  const { status, setStatus } = useSidebarContext();

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">{status && <Sidebar />}</AnimatePresence>
      {location.pathname != '/' && <Navbar />}
      <button
        onClick={() => setPreview(true)}
        className="fixed bottom-0 right-0 z-10 m-5 rounded-full bg-emphasis-500 p-5 font-bold lg:hidden"
      >
        See
      </button>
      <div
        className={`fixed z-50 h-full w-full ${
          showPreview ? 'block' : 'hidden'
        }`}
      >
        <MobileViewer setPreview={setPreview} showPreview={showPreview} />
      </div>
      <motion.div
        className="h-full"
        initial={false}
        variants={variants}
        animate={status ? 'open' : 'closed'}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="h-full w-[calc(100vw-3rem)] translate-x-[3rem] p-3 md:grid-cols-3 lg:grid">
          <div className="col-span-2 h-full overflow-y-auto overflow-x-hidden">
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
    </div>
  );
}

export default App;
