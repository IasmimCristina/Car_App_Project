"use client"
import Image from 'next/image'
import { CustomButton } from '.';
const Hero = () => {

const handleScroll  = () => {}


  return (
    <div className="hero">
      <div className="flex-1 pt-52 padding-x">
        <h1 className='hero__title'>Pesquise e escolha o melhor carro aqui!</h1>

        <p className='hero__subtitle'>Encontre seu carro agora. Sua jornada até o carro ideal certamente começa aqui.</p>



        <CustomButton
        title="Pesquisar carros"
        containerStyles="bg-orange-800 text-white rounded-full mt-10"
        handleClick={handleScroll}
        
        />
      </div>


      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt='Hero' fill className='object-contain'/>

        
        </div>
      </div>
      </div>
  )
}

export default Hero;