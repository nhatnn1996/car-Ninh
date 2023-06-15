export const variants = {
  hidden: { opacity: 0, height: 0 },
  enter: { opacity: 1, height: 'auto' },
  exit: { opacity: 0 },
};

export const variantsHidden = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const variantsScale = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.96 },
  exit: { opacity: 0, scale: 0.99 },
};

export const popup = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
  exit: { opacity: 0, y: 30 },
};

export const hiddenOpacity = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const variantsToast = {
  visible: {
    opacity: 1,
    y: -70,
  },
  hidden: {
    opacity: 0,
    y: -0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const parent = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export const childrent = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const childrentSelect = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      // y: { stiffness: 10, velocity: -10 },
    },
  },
  hidden: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.1,
      y: { stiffness: 1000 },
    },
  },
};

export const animatParentOpacity = {
  visible: {
    opacity: 1,
    transition: { duration: 0.2, staggerChildren: 0.07, delayChildren: -0.1 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.2, staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export const timeCache = 60 * 3;
