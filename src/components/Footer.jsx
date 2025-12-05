import { useState } from 'react'
import '../App.css'
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className=" mx-0 bg-white shadow-2xl shadow-blue-500 text-left">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start text-left justify-between gap-6">
        <div className=''>
          <div className="grid grid-cols-1 gap-4">
            <img
              alt=""
              src={logo}
              className="h-auto w-12 ml-15"
            />
            <div className="flex flex-1 md:flex-1">
              <h1 className="text-xs text-shadow-gray-400 text-gray-400 ">HimTech</h1>
              <p className="text-xs pt-9 text-gray-400">NIG LTD</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 max-w-xs">A Revolutional System, It Optimize and Simplify School System With Little Efford and Zero Stress.</p>
        </div>
        <div className="flex gap-8">
          <div>
            <h5 className="font-semibold">Shop</h5>
            <ul className="mt-2 text-sm text-gray-600">
              <li>s</li>
              <li>Home Items</li>
              <li>Best Deals</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Support</h5>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Contact</li>
              <li>Privacy</li>
              <li>Affiliate Disclosure</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 text-gray-500 text-sm py-3 text-center">© {new Date().getFullYear()} HimTech — Built by Zakariya</div>
    </footer>
  );
}
