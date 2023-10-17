"use client";

import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

  const [query, setQuery] = useState('');

  // const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
  //   // Removing empty spaces and setting to lower case
  //   item.toLowerCase()
  //     .replace(/\s+/g, "")
  //     .includes(query.toLowerCase().replace(/\s+/g, ""))
  // ))
// Fixed version: the search happens with the initial letter
  const filteredManufacturers = query === ""
  ? manufacturers
  : manufacturers.filter((item) => item.toLowerCase().startsWith(query.toLowerCase()));


  return (
    <div className='search-manufacturer'>

      <Combobox>

        <div className="relative w-full">
          <Combobox.Button className={'absolute left-[12px] top-[14px]'}>
            <Image
              src={"/logocustom.png"}
              alt='Logomarca Central Carros'
              width={20}
              height={20}
            />
          </Combobox.Button>

          <Combobox.Input
            className={"search-manufacturer__input"}
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}

          />



          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className={"search-manufacturer__option"}
                >
                  Crie "{query}"
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => ` relative search-manufacturer__option ${active ? 'bg-orange-900 text-white' : 'text-orange-900 bg-orange-100'}  `}
                    value={item}
                  >
                    {/*  */}
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer