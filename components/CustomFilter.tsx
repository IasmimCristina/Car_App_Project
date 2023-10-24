"use client"
import React from 'react';
import { Listbox } from '@headlessui/react';

import { useState, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import Image from 'next/image';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);


  const handleUpdateParams = (e: { type: string, value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());



    router.push(newPathName, { scroll: false })
  }
  return (
    <div className="w-fit dark-list ">
      <Listbox
        value={selected}
       
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams({ type: "string", value: e.value });

        }}
      >
       
        <div className="relative w-fit z-10 ">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className='block truncate'>{selected.title}</span>
            <Image src={"/chevron-up-down.svg"} width={20} height={20} className={"ml-4 object-contain"} alt='Seta cima e baixo' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className={"custom-filter__options"}
            >
              {options.map((option) => (
                // Getting active from the component
                <Listbox.Option key={option.title} value={option} className={({ active }) => ` relative cursor-default select-none py-2 px-4 ${active ? "bg-orange-400" : 'text-gray-900'}`} >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'} `}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div >
  );
};

export default CustomFilter;
