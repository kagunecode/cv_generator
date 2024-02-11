import { motion as m } from 'framer-motion';
import { arrowVariants } from '../variants';

const ArrowIcon = ({ status, onClick }) => (
  <m.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-black"
    variants={arrowVariants}
    animate={status ? 'open' : 'closed'}
    transition={{ duration: 0.05 }}
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
    />
  </m.svg>
);

export default ArrowIcon;
