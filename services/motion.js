export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      // ease: 'backIn',
      // ease: [0.17, 0.67, 0.83, 0.67],
      // type: 'spring',
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export const fadeLeft = {
  hidden: (redirect) => {
    return { opacity: 0, x: redirect === 'left' ? -100 : 100 }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955], once: true },
  },
}

export const animatParent = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const fade = {
  closed: ({ redirect }) => {
    const hidden = { opacity: 0 }
    if (redirect === 'left') hidden.x = -30
    if (redirect === 'right') hidden.x = 30
    if (redirect === 'top') hidden.y = -30
    if (redirect === 'bottom') hidden.y = 30
    return hidden
  },
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.3, ease: [0.455, 0.03, 0.515, 0.955], type: 'spring' },
  },
}

export const fadeWithoutTransition = {
  hidden: (redirect) => {
    const hidden = { opacity: 0 }
    if (redirect === 'left') hidden.x = -100
    if (redirect === 'right') hidden.x = 100
    if (redirect === 'top') hidden.y = -100
    if (redirect === 'bottom') hidden.y = 100
    return hidden
  },
  show: { opacity: 1, x: 0, y: 0 },
}
export const zoom = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}
const types = { zoom, fadeWithoutTransition, fade }
export const animateWhileInView = (type = 'fade', redirect = 'left', delay = 0) => {
  return {
    variants: types[type],
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true },
    custom: { redirect, delay },
  }
}
