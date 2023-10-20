import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {

  const allCars = await fetchCars()
  const IsDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden ">
      <Hero />


      <div className="mt-12 padding-x padding-y max-width" id='discover'>

        <div className="home__text-container">
          <h1 className="text-4xl  font-extrabold">Catálogo de Carros</h1>
          <p>Pesquise os carros que você deseja</p>

        </div>

        <div className="home__filters">

          <SearchBar />

          <div className="home__filter-container ">


            <CustomFilter title="Combustível" />
            <CustomFilter title="Ano" />

          </div>
        </div>




        {!IsDataEmpty ? (

          <section>

            <div className="home__cars-wrapper">

              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">

            <h2 className='text-xl '>Opa, nenhum resultado...</h2>
            <p>{allCars?.message}</p>
          </div>
        )}




      </div>
    </main>
  )
}
