"use client";
import Image from "next/image";
import { images } from "@/utils/images";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Modal from "@/shared/Modal";
import ModelContents from "@/shared/ModelContents";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);   
  const[isOpen , setIsOpen] = useState(false);

  
  return (
    <header className="w-full bg-[#f5f6fa] border-b border-gray-200 fixed z-20 ">
      {isMenuOpen && (
        <div className={`absolute lg:hidden h-[calc(100vh-64px)] top-16  bg-linear-to-b
              from-grey-100
              to-grey-900 w-screen z-10 p-4`} >
                <div className="flex flex-col gap-2">
                  {/* nav */}
                  <div className="border border-amber-50/25 p-3  bg-card-bg ">
                    <a href="#" className="hover:text-black transition">
              Max Enterprise
            </a>
                  </div>

                 <div className="border border-amber-50/25 p-3  bg-card-bg ">
                   <a href="#" className="hover:text-black transition">
              Pricing
            </a>
                  </div>  
           
                </div>

                <div className=" flex my-4 gap-4">
                  <button
              className="
                h-9
                px-4
                text-sm
                font-medium
                rounded-md
                border
                border-white
                text-white
                hover:bg-purple-50
                transition
              "
            >
              START
            </button>

            {/* Filled button */}
            <button
              className="
                h-9
                px-5
                text-sm
                font-medium
                rounded-md
                bg-bg-primary
                text-white
                hover:opacity-90
                transition
              "
            >
              GET STARTED
            </button>
                </div>
        </div>
      ) }

      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={images.logo}
            alt="MAX logo"
            width={90}
            height={28}
            priority
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X size={25} className="text-black" />
            ) : (
              <Menu size={25} className="text-black" />
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition">
              Max Enterprise
            </a>
            <a href="#" className="hover:text-black transition">
              Pricing
            </a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Outline button */}
            <button
              className="
                h-9
                px-4
                text-sm
                font-medium
                rounded-md
                border
                border-bg-primary
                text-bg-primary
                hover:bg-purple-50
                transition
              "
            >
              START
            </button>

            {/* Filled button */}
            <button
              className="
                h-9
                px-5
                text-sm
                font-medium
                rounded-md
                bg-bg-primary
                text-white
                hover:opacity-90
                transition
              "
              onClick={()=>setIsOpen(true)}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <Modal
            open={isOpen}
            setOpen={() => {
               setIsOpen(false);
            }}
            // title={'Login before getting started '}
            content={ 
              <ModelContents/>
            }
            classNameForTitle={"-mt-4 text-[20px]"}
            className="text-text-primary-200 bg-card-bg w-full max-w-full sm:max-w-[70%] lg:max-w-[35%] mx-auto"
        />
    </header>
  );
}
