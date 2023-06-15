'use client';
import React, { Ref, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  animatParentOpacity,
  childrent,
  childrentSelect,
} from '@/services/variant';
import { ArrowLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import useOnClickOutside from '@/hook/outside';
import Link from 'next/link';

interface Option {
  key: string;
  value: string;
}

interface AuxProps {
  className?: string;
  onClick?: () => void;
}

const Buttonback = ({ className, href }: any) => {
  const clx = 'balow w-fit h-[34px] ' + (className || '');
  return (
    <Link className={clx} href={href}>
      <div className="px-3 flex h-[34px] w-fit cursor-pointer items-center justify-center rounded bg-white transition-hover hover:shadow">
        <ArrowLeftIcon className=" h-5 w-5 stroke-black" />
        <span className="ml-2">QUAY LẠI</span>
      </div>
    </Link>
  );
};

export default Buttonback;
