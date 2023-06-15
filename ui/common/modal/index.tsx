import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { variantsHidden } from '@/services/variant';

interface PropsAux {
  open?: any;
  toggle?: any;
  children: any;
  disableClose?: any;
  preventHideClickOverlay?: any;
}
const ModalView = ({
  open,
  toggle,
  children,
  disableClose,
  preventHideClickOverlay,
}: PropsAux) => {
  useEffect(() => {
    const handleClose = (event: any) => {
      const code = event.keyCode || event.which;
      if (code === 27) toggle();
    };
    document.addEventListener('keydown', handleClose);
    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          variants={variantsHidden}
          initial="hidden"
          exit="hidden"
          animate="visible"
          transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
          className="fixed top-0 left-0 z-[10000] flex h-screen w-screen items-center md:justify-center"
        >
          <div
            onClick={
              disableClose || preventHideClickOverlay ? () => {} : toggle
            }
            className="absolute inset-0 top-0 left-0 z-50 h-screen w-screen bg-black bg-opacity-80"
          ></div>
          <div className="relative z-50 mx-[20px] w-full md:mx-0 md:w-auto">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ModalView;
