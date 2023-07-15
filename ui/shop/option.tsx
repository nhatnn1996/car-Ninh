'use client';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { variants } from '@/services/variant';

const content1 = [
  { label: 'Aoyoa', count: 1 },
  { label: 'Biayaoa ', count: 2 },
  { label: 'Car Club ', count: 1 },
  { label: 'Ceoper  ', count: 1 },
  { label: 'Land Cripter  ', count: 1 },
  { label: 'Wilcon ', count: 1 },
];
const content2 = [
  { label: '$0 - $5,000', count: 2 },
  { label: '$5,000 - $10,000  ', count: 4 },
  { label: '$10,000 - $20,000  ', count: 4 },
  { label: '$20,000 - $100,000  ', count: 4 },
];

const content3 = [
  { label: '1900', count: 2 },
  { label: '1990', count: 0 },
  { label: '2015', count: 3 },
];

const content4 = [
  { label: 'Convertible', count: 1 },
  { label: 'Electric', count: 2 },
  { label: 'Hybrid', count: 1 },
];

const content5 = [{ label: 'Petrol', count: 9 }];

const content6 = [
  { label: 'Manual', count: 8 },
  { label: 'Auto', count: 1 },
];

const content7 = [{ label: '4', count: 9 }];

const content8 = [{ label: '2500', count: 9 }];
const renderContenByIndex = [
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  content8,
];

const PartialQuery = ({ partial, index }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="border-b-[1px] border-slate-200">
        <div
          className="w-full   px-6 py-8"
          onClick={() => setShow((state) => !state)}
        >
          <div className="flex items-center">
            <div
              className={
                'text-xl font-bold duration-300  ' +
                (show == true ? 'text-primary' : 'text-neutral-800')
              }
            >
              {partial}
            </div>
            <div className="ml-auto">
              {show === true && (
                <MinusIcon className="w-6 stroke-primary stroke-[1px] " />
              )}
              {show === false && (
                <PlusIcon className="w-6 stroke-neutral-800 stroke-[1px] " />
              )}
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              variants={variants}
              initial={'hidden'}
              animate="enter"
              exit={'exit'}
              className="overflow-hidden"
              key={partial}
              transition={{ duration: 0.3 }}
            >
              {renderContenByIndex[index].map((item: any, index: number) => {
                return (
                  <div
                    className="flex items-center px-4 py-1 pb-4"
                    key={item + index + 'keyyyy'}
                  >
                    <input
                      id={index + 'label'}
                      type="checkbox"
                      className="h-4 w-4 rounded-none"
                    />
                    <label htmlFor={index + 'label'} className="ml-3 text-sm ">
                      {item.label}{' '}
                      <span className="text-neutral-500">({item.count})</span>
                    </label>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PartialQuery;
