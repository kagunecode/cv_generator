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

const menuSlideSidebar = {
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

const linkSlideSidebar = {
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

export {
  cardAnimations,
  cardVariants,
  arrowVariants,
  menuSlideSidebar,
  linkSlideSidebar,
};
