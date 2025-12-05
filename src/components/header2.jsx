import { useState } from 'react'
import '../App.css'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
  return (
    <header className="bg-gray-900 shadow-sm  shadow-gray-600 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-md flex items-center justify-center text-white font-bold">OS</div>
          <div>
            <h1 className="text-lg text-white font-semibold">OneStore</h1>
            <p className="text-xs text-white">Smart gadgets & home essentials</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-yellow-600" href="#gadgets">Gadgets</a>
          <a className="hover:text-yellow-600" href="#home">Home Items</a>
          <a className="hover:text-yellow-600" href="#deals">Best Deals</a>
          <a className="hover:text-yellow-600" href="#blog">Blog</a>
        </nav>
        <div className="flex items-center gap-3">
          <input placeholder="Search products" className="hidden md:inline-block border-none focus:border rounded-md px-3 py-1 text-sm  focus:outline-none bg-gray-600 focus:ring-2 focus:ring-gray-200" />
          <a className="text-sm px-3 py-1 border rounded-md" href="#">Contact</a>
        </div>
      </div>
    </header>
  );
}
