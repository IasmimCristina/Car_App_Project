"use client"
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, { scroll: false });


  }



  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {
        !isNext && (
          <CustomButton title='Mostrar mais' btnType='button' containerStyles='bg-orange-100 rounded-full dark-show-more ' handleClick={handleNavigation} />
        )
      }
    </div>
  )
}

export default ShowMore