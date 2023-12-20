import { motion } from 'framer-motion';

export default function Curve() {
  const initialPath = `M0 0 L0 ${window.innerHeight} Q 200 ${
    window.innerHeight / 2
  } 0 0`;

  const targetPath = `M0 0 L0 ${window.innerHeight} Q -200 ${
    window.innerHeight / 2
  } 0 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.45, 0, 0.55, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
    },
  };

  return (
    <svg className="absolute right-[-99px] top-0 z-10 h-screen w-[100px] fill-emphasis-500 stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
