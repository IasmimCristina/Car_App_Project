"use client";

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';
import { Fragment } from 'react';
import { generateCarImageUrl } from '@/utils';




interface CarDetailesProps {
  isOpen: boolean ;
  closeModal: () => {};
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailesProps) => {


  // Translation array
  interface KeyTranslations {
    [key: string]: string;
  }

  const keyTranslations: KeyTranslations = {
    city_mpg: 'Cidade (MPG)',
    class: 'Classe',
    combination_mpg: 'Combinação (MPG)',
    cylinders: 'Cilindros',
    displacement: 'Deslocamento',
    drive: 'Tração',
    fuel_type: 'Tipo de Combustível',
    highway_mpg: 'Rodovia (MPG)',
    make: 'Fabricante',
    model: 'Modelo',
    transmission: 'Transmissão',
    year: 'Ano',
  };

  return (


    <>

      <Transition appear show={isOpen} as={Fragment}>

        <Dialog as='div' className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'

          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>


          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">



              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'

              >


                <Dialog.Panel
                  className={"relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-4 text-left shadow-xl transition-all flex flex-col gap-5  dark:bg-zinc-800 dark:text-orange-50"}
                >
                  <button
                    type='button'
                    onClick={closeModal}
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full dark:bg-orange-700'
                  >

                    <Image src={"/close.svg"} alt='close' width={20} height={20} className='object-contain' />

                  </button>


                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg ">

                      <Image src={generateCarImageUrl(car)} alt='Modelo de carro' fill priority className='object-contain' />


                    </div>


                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-orange-50 rounded-lg dark:bg-zinc-500">
                        <Image src={generateCarImageUrl(car, '29')} alt='Modelo de carro' fill priority className='object-contain' />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-orange-50 rounded-lg dark:bg-zinc-500">
                        <Image src={generateCarImageUrl(car, '33')} alt='Modelo de carro' fill priority className='object-contain' />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-orange-50 rounded-lg dark:bg-zinc-500">
                        <Image src={generateCarImageUrl(car, '13')} alt='Modelo de carro' fill priority className='object-contain' />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex gap-2 flex-col">
                    <h2 className='font-semibold text-xl capitalize'>
                      {car.make} {car.model.charAt(0).toUpperCase() + car.model.slice(1)}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">

                      {/* Getting the key as the title for the dialog */}
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between gap-5 w-full text-right" key={key}>
                          <h4 className='text-grey  dark:text-orange-100 capitalize'>
                            {keyTranslations[key] || key}
                          </h4>
                          <p className='text-black-100 dark:text-orange-200 font-semibold'>{value}</p>
                        </div>
                      ))}

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>



            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

export default CarDetails