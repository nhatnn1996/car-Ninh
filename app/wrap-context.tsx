'use client';

import Toast from '@/ui/widget/toast';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
const ToastContext = createContext({});

const ToastProvider = ({ children }: any) => {
  const timmer = useRef();
  const toast_: any = useRef(null);
  const [toast, setToast] = useState({
    show: false,
    status: '',
    message: '',
    time: 3000,
  });
  toast_.current = toast;

  const toggleToast = async (data: any) => {
    clearTimeout(timmer.current);
    if (toast_.current.show) {
      setToast((state) => ({ ...state, show: false }));
      timmer.current = setTimeout(() => {
        toggleToast(data);
      }, 500) as any;
      return;
    }
    const temp = { ...data };
    if (!temp.time) temp.time = 5000;
    setToast(temp);
    timmer.current = setTimeout(() => {
      setToast((state) => ({ ...state, show: false }));
    }, temp.time) as any;
  };

  const onClose = () => {
    clearTimeout(timmer.current);
    setToast((state) => ({ ...state, show: false }));
  };

  return (
    <ToastContext.Provider value={{ setToast, toggleToast }}>
      {children}
      <Toast toast={toast} onClose={onClose} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const toast = useContext(ToastContext);
  return toast;
};

export default ToastProvider;
