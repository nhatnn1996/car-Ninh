'use client';
import React, { Ref, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  animatParentOpacity,
  childrent,
  childrentSelect,
} from '@/services/variant';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useOnClickOutside from '@/hook/outside';

interface Option {
  key: string;
  value: string;
}

interface AuxProps {
  className?: string;
  onClick?: () => void;
  children: any;
}

const Button = ({ className, onClick = () => {}, children }: AuxProps) => {
  const clx =
    'balow whitespace-nowrap cursor-pointer h-[34px] px-4 bg-gota-black text-white ' +
    className;
  return (
    <div className={clx} onClick={onClick}>
      <div className="flex h-[34px] items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default Button;
