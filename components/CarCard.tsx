"use client";

import { useState } from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import { CarDetails, CustomButton } from '.';
import { calculateCarRent } from '@/utils';
// Retire as propriedades que voce nao usará se necessário!!
interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  // For modal opening or not
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group cursor-pointer '>
      <div className="car-card__content ">
        <h2 className='car-card__content-title'>{make}  {model}</h2>
      </div>


      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
          /dia
        </span>
      </p>

      <div className="relative w-full h-40  my-3 object-contain">
        <Image src="/hero.png" alt='Modelo de carro' fill priority className='object-contain' />
      </div>


      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt='Pneu' />
            {drive.toUpperCase()}
          </div>


          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt='Volante' />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automático' : 'Manual'}
            </p>
          </div>


          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt='Volante' />
            <p className='text-[14px]'>
              {city_mpg} Milhas/PG(EUA)
            </p>
          </div>




        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title='Veja mais'
            containerStyles='ease-in duration-300 w-full py-[16px] rounded-full bg-orange-50'
            textStyles="text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(!isOpen)}

          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />

    </div>
  )
}

export default CarCard