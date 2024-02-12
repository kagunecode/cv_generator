import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../contexts/SidebarContext';
import Curve from './Curve';
import sectionInfo from '../data/sectionInfo';
import { linkSlideSidebar, menuSlideSidebar } from '../variants';
import GithubIcon from '../icons/Github';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';

export default function Sidebar() {
  const { status, setStatus } = useSidebarContext();

  const handleSidebarToggle = () => {
    setStatus(!status);
  };

  return (
    <div className="relative md:w-[40vw] lg:w-[25vw]">
      <motion.div
        className="fixed z-20 flex h-[100dvh] w-full bg-emphasis-500 md:absolute md:left-0 md:top-0"
        variants={menuSlideSidebar}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Curve />
        <div
          className="absolute right-0 p-6 text-3xl font-bold hover:cursor-pointer"
          onClick={() => setStatus(!status)}
        >
          ×
        </div>
        <div className="ml-[10%] flex h-full flex-col justify-center">
          <p>Tools</p>
          <hr className="mb-2 border-black" />
          {sectionInfo.map((link, i) => {
            return (
              <motion.div
                custom={i}
                variants={linkSlideSidebar}
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
          <div className="absolute bottom-0 mb-5 mt-2 flex gap-2 self-center justify-self-center">
            <GithubIcon />
            <LinkedinIcon />
            <TwitterIcon />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
