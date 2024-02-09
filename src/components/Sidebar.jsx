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
          <div className="absolute bottom-0 mb-5 mt-2 flex gap-2 self-center justify-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 cursor-pointer p-1 duration-200 hover:bg-black hover:fill-emphasis-500"
              viewBox="0 0 100 100"
              onClick={() =>
                window.open('https://github.com/kagunecode', '_blank')
              }
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 cursor-pointer p-1 duration-200 hover:bg-black hover:fill-emphasis-500"
              viewBox="0 0 50 50"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/cesar-augusto-cruz-benitez-76a935127/',
                  '_blank',
                )
              }
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 cursor-pointer p-1 duration-200 hover:bg-black hover:fill-emphasis-500"
              viewBox="0 0 50 50"
              onClick={() =>
                window.open('https://twitter.com/officialkagune', '_blank')
              }
            >
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
