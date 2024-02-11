const cardAnimations = {
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

export { cardAnimations, cardVariants, arrowVariants };
