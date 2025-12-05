import { Link } from "react-router-dom";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "../assets/logo.png" // Ensure this path is correct

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 dark:bg-gray-900 bg-white left-0 w-full shadow-md z-50">
      <nav className="mx-auto flex max-w-7xl items-center py-2 justify-between p-6 lg:px-8" aria-label="Global">
        
        {/* LOGO SECTION */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img className="h-8 w-auto" src={logo} alt="HimTech Logo" />
            <div className="flex flex-col">
              <p className="text-3xl font-medium text-white dark:text-blue-600">HIMTECH</p>
              {/* <p className="text-[10px] font-medium text-gray-500 leading-none">NIG LTD</p> */}
            </div>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:bg-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex lg:gap-x-12">
          {['Features', 'Pricing', 'How it works', 'Integrations'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium leading-6 text-gray-900 hover:text-blue-600 transition-colors dark:text-white dark:hover:text-white">
              {item}
              
            </a>
          ))}
          
          {/* Search Input (Integrated here) */}
          <div className="hidden md:flex items-center gap-2">
             <input 
                placeholder="Search..." 
                className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:border-blue-500 text-gray-700 w-32 focus:w-48 transition-all dark:border-white dark:text-white" 
             />
          </div>
        </div>
        

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white py-2">
           Request Demo
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 transition-all dark:text-gray-900 dark:bg-white hover:text-gray-300">
            Get Started
          </a>
        </div>
      </nav>

      {/* MOBILE MENU DIALOG */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img className="h-8 w-auto" src={logo} alt="" />
              <span className="text-sm font-bold text-blue-600">HimTech</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                    <a
                    key={item}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}