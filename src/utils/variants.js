export const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 12,
      when: 'beforeChildren',
      staggerChildren: 0.4, 
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

export const iconsVariant = {
    hidden: { opacity: 0, y: 120 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        type: 'spring',
        stiffness: 40,
        damping: 12,
        delayChildren: 0.2, 
        staggerChildren: 0.2, 
        },
    },
}