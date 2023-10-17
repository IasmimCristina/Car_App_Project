"use client"
// Change detail if possible
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { useEffect, useState } from "react";


const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);

  // Needed to make the second styling for navbar corected
  useEffect(() => {
    setIsSticky(window.scrollY > 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updating local storage

  // Atualize o armazenamento local quando o estado isSticky mudar
  useEffect(() => {
    if (isSticky !== null) {
      localStorage.setItem("isSticky", isSticky.toString());
    }
  }, [isSticky]);


  const headerClass = ` fixed top-0 w-full  z-10 ${isSticky ? "sticky-custom" : ""}`;
  const imageClass = `${isSticky ? "w-16" : "object-contain"}`;


  return (
    <header className={headerClass}>
      <div className="header-background ">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 ">


          <Link href="/" className="flex justify-center items-center">
            <Image
              src={"/logocustom.png"}
              alt="Central Carros Logo"
              width={80}
              height={18}

              className={imageClass}></Image>


          </Link>
          <div className=" flex gap-2">
            <CustomButton
              title="Cadastrar"
              btnType="button"
              containerStyles="text-yellow-950 rounded-full bg-orange-200 h-10 min-w-[130px]"
            ></CustomButton>

            <CustomButton
              title="Entrar"
              btnType="button"
              containerStyles="bg-orange-800  text-white rounded-full p-0 h-10"
            ></CustomButton>

          </div>


        </nav>

      </div>
    </header>
  )
}

export default Navbar