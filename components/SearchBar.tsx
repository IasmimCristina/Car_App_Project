'use client';
import React from "react";
import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (

  <button type="submit" className={`-m-l-3 z-10 ${otherClasses}`}>

    <Image src="/magnifying-glass.svg" alt="Ícone de busca" width={40} height={40} className="object-contain"
    />
  </button>
)

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacturer === '' && model === '') return;
    // Stopped at 2:21:49

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>

      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses={"sm:hidden"} />


      </div>

      <div className="searchbar__item">
        <Image
          src={"/tire.svg"}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Modelo de carro"
        />

        <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input" />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />

    </form>
  )
}

export default SearchBar