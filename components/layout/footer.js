import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MenuItems from "@data/menu.json";
import FooterItems from "@data/footer.json"; 

export default function Footer() {
  return (
    <>
      <footer className="relative bg-zinc-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-4 lg:pt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <Image
              src={FooterItems.logo}
              alt={FooterItems.logoalt}
              className="mb-4"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <ul className="mt-4">
              {MenuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-lg font-normal py-1 hover:text-fgprimary ease-in-out duration-500 cursor-pointer"
                >
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-3/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
            <ul className="mt-4">
              {FooterItems.contact.map((item, index) => (
                <li key={index} className={`mb-6 ${item.class}`}>
                  <a href={item.href} title={item.title}>
                    <div className="flex">
                      <Icon
                        icon={item.icon}
                        className="w-6 h-6 cursor-default"
                      />
                      <span className="ml-3"> 
                        {item.text.map((item, index) => (
                          <span key={index}>
                            {item}
                            <br />
                          </span>
                        ))}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="mt-4  uppercase text-xs tracking-wider font-semibold text-gray-500 ">
              {FooterItems.socialtitle}
            </h5>
            <ul className="flex mt-4  text-white">
              {FooterItems.socialitems.map((item, index) => (
                <li key={index} className="ml-3">
                  <Link href={item.href} title={item.title} target="_blank">
                    <Icon
                      icon={item.icon}
                      className="w-10 h-10 hover:text-fgprimary ease-in-out duration-500 cursor-pointer"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="uppercase text-xs tracking-wider font-semibold text-gray-500 mt-8">
              {FooterItems.regtitle}
            </h5>
            <ul className="flex mt-4 text-white">
              <li>{FooterItems.regno}</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 lg:pt-4 pb-3">
          <hr className="pb-3 border-t-1 border-gray-600" />
          <div className="text-center md:flex justify-between">
            <p className="text-sm text-gray-600 ">
              © {new Date().getFullYear()} {FooterItems.copyright}
            </p>
            <p className="text-sm text-gray-600">{FooterItems.developer}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
