import { motion } from 'framer-motion';
import { useData } from '../store';

const animations = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

const cardVariants = {
  open: {
    opacity: 1,
    display: 'grid',
    visibility: 'visible',
    pointerEvents: 'auto',
    height: 'auto',
  },
  closed: {
    opacity: 0,
    height: '0px',
    visibility: 'visible',
    pointerEvents: 'none',
  },
};

const arrowVariants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
};

export default function Card({ title, item, section, children }) {
  const [deleteItem, updateItem] = useData(state => [
    state.deleteItem,
    state.updateItem,
  ]);

  return (
    <motion.div
      className="border bg-zinc-50 p-5"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.1 }}
    >
      <div className="flex items-center justify-between">
        <h1 className="p-2 text-xl font-bold">{title}</h1>
        <div className="flex gap-3 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-red-600"
            onClick={() => deleteItem(section, item.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-slate-500 duration-200 hover:cursor-pointer hover:text-black"
            variants={arrowVariants}
            animate={item.status ? 'open' : 'closed'}
            transition={{ duration: 0.05 }}
            onClick={() => updateItem(section, item.id, 'status', !item.status)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </motion.svg>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          variants={cardVariants}
          animate={item.status ? 'open' : 'closed'}
          className="grid grid-cols-2"
          initial={false}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
