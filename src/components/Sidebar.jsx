import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../contexts/SidebarContext';
import Curve from './Curve';
import sectionInfo from '../data/sectionInfo';

export const menuSlide = {
  initial: { x: 'calc(-100% - 100px)' },
  enter: {
    x: '0',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: 'calc(-100% - 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const linkSlide = {
  initial: { x: '-80px' },
  enter: i => ({
    x: '0px',
    transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.03 * i },
  }),
  exit: i => ({
    x: '-80px',
    transition: { duration: 0.5, ease: [0.45, 0, 0.55, 1], delay: 0.03 * i },
  }),
};

export default function Sidebar() {
  const { status, setStatus } = useSidebarContext();

  const handleSidebarToggle = () => {
    setStatus(!status);
  };
  return (
    <div className="relative w-[25vw]">
      <motion.div
        className="absolute z-20 flex h-screen w-full bg-emphasis-500"
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Curve />
        <div
          className="absolute right-0 p-6 text-3xl font-bold hover:cursor-pointer"
          onClick={() => setStatus(!status)}
        >
          X
        </div>
        <div className="ml-[10%] flex h-full flex-col justify-center">
          <p>Tools</p>
          <hr className="mb-2 border-black" />
          {sectionInfo.map((link, i) => {
            return (
              <motion.div
                custom={i}
                variants={linkSlide}
                animate="enter"
                exit="exit"
                initial="initial"
                key={i}
              >
                <Link
                  className="px-[10%] text-4xl font-bold duration-200 hover:bg-black hover:text-emphasis-500"
                  onClick={handleSidebarToggle}
                  to={link.tabUrl}
                >
                  {link.tabName.toUpperCase()}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
