"use client"
import React, { Ref, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { animatParentOpacity, childrentSelect } from '@/services/variant'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import useOnClickOutside from '@/hook/outside'

interface Option {
  key: string
  value: string
}

interface AuxProps {
  className?: string
  placeholder?: string
  options: Option[]
  onChange?: (key: string) => void
  defaultValue?: any

}

const Select = ({
  placeholder,
  className,
  options = [],
  onChange = (event: any) => { },
  defaultValue = null,
}: AuxProps) => {
  const valueInit = options.find(element => element.key === defaultValue)?.value
  const [select, setSelect] = useState(false)
  const [value, setValue] = useState(valueInit)
  const ref = useRef<any>()
  useEffect(() => {
    const valueInit = options.find(element => element.key === defaultValue)?.value
    setValue(valueInit)
  }, [defaultValue])
  const toggle = () => {
    setSelect((state) => !state)
  }
  const close = () => {
    setSelect(false)
  }
  useOnClickOutside(ref, close)

  const onClick = (key: string, value: string) => {
    return () => {
      onChange(key)
      setValue(value)
      close()
    }
  }
  const clx =
    'md:min-w-[128px] cursor-pointer relative px-3 z-10 ' + className
  return (
    <div className={clx} ref={ref}>
      <div className="h-[34px] flex justify-between items-center " onClick={toggle}>
        <span className="text-[11px] mt-[1px] mr-3 text-white-pure truncate" style={{ lineHeight: "20px" }}>{value || placeholder}</span>
        <ChevronDownIcon className='w-4 h-3' />
      </div>
      <AnimatePresence>
        {select && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animatParentOpacity}
            className={
              'absolute left-0 z-10 top-full mt-2 w-full bg-white overflow-hidden shadow '
            }
          >
            <div className="">
              {options.map((element) => (
                <motion.div
                  key={element.key}
                  variants={childrentSelect}
                  onClick={onClick(element.key, element.value)}
                  className="last:mb-0 mb-1 group"
                >
                  <span className="text-[11px] text-left transition-color text-gota-black duration-150 p-2 border-[1px] bg-stone-50 group-hover:text-gota-primary border-transparent block w-full"> {element.value} </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select

