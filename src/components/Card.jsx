import { motion as m } from 'framer-motion';
import { useData } from '../store';
import { cardAnimations, cardVariants, skillCardAnimations } from '../variants';
import TrashCanIcon from '../icons/TrashCanIcon';
import ArrowIcon from '../icons/ArrowIcon';

export default function Card({ title, item, section, children }) {
  const [deleteItem, updateItem] = useData(state => [
    state.deleteItem,
    state.updateItem,
  ]);

  return (
    <m.div
      className="border bg-zinc-50 p-5"
      variants={cardAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.1 }}
    >
      <div className="flex items-center justify-between p-2">
        <h1 className="font-bold md:text-xl">{title}</h1>
        <div className="flex gap-3">
          <TrashCanIcon onClick={() => deleteItem(section, item.id)} />
          <ArrowIcon
            status={item.status}
            onClick={() => updateItem(section, item.id, 'status', !item.status)}
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <m.div
          variants={cardVariants}
          animate={item.status ? 'open' : 'closed'}
          className="grid grid-cols-2"
          initial={false}
        >
          {children}
        </m.div>
      </div>
    </m.div>
  );
}

function SkillCard({ children }) {
  return (
    <m.div
      variants={skillCardAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex h-[7rem] w-full flex-col border bg-zinc-50 p-7"
    >
      {children}
    </m.div>
  );
}

export { SkillCard };
