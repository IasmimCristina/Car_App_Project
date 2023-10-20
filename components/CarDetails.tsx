"use client";

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';
import { Fragment } from 'react';




interface CarDetailesProps {
  isOpen: boolean;
  closeModal: () => {};
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailesProps) => {
  return (

   
    <>

      <Transition appear show={isOpen} as={Fragment}>

        <Dialog as='div' className={"relative z-10"} onClose={closeModal}>
          <Transition.Child>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>    
        </Dialog>
      </Transition>

    </>
  )
}

export default CarDetails