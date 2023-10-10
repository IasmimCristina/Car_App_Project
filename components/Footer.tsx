import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t borger-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justfy-start items-start gap-6">
          <Image
            src={"/logocustom.png"}
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">Central Carros 2023<br />
            Todos os direitos reservados &copy;
          </p>
        </div>

        <div className="footer__links">
          {/* It will be added dyamically */}
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-orange-500 footer-link"
                >
                  {item.title}
                </Link>
              )))}
            </div>
          )
          )}
        </div>
        
        </div>

      <div className="footer-end flex justify-between flex-wrap mt-10 items-center border-t border-gray-100 sm:px-16 px-6 py-10">

        <p>@2023 Central Carros. Todos os direitos reservados.</p>


        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500 hover:text-orange-500 footer-link">
            Política de Privacidade
          </Link>

          <Link href={"/"} className="text-gray-500 hover:text-orange-500 footer-link">
            Termos de Uso
          </Link>

        </div>

      </div>
      
    </footer>
  )
}

export default Footer