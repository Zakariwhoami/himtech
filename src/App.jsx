import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./Home.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";


export default function App() {
  return (
    <>
      <Navbar />
      <div className="absolute inset-x-0 top-0 z-10 bg-gray-50 text-gray-800 mx-0  bg-gradient-to-br from-gray-900 to-gray-700">

        <main className="max-w-7xl text-white mx-auto px-4 pt-10">
          <Hero />
          <section className="max-w-6xl mx-auto pt-25  px-4">
            <h2 className="text-3xl text-gray-800 font-bold text-center mb-10">Our Features</h2>

            <div className="mt-10">

              <FeatureCard/>
              {/* <FeatureCard
                title="Attendance Tracking"
                desc="Take student attendance easily and generate daily/weekly reports."
                icon="📅"
              />

              <FeatureCard
                title="Fees Management"
                desc="Track payments, invoices, balances and generate fee receipts."
                icon="💰"
              />

              <FeatureCard
                title="Exams & Results"
                desc="Create exams, upload scores, generate automatic report cards."
                icon="📊"
              /> */}

            </div>

            <Features />
          </section>
          <About />
          
        </main>
        <div className="bg-gradient-to-br from-gray-800  to-blue-200 flex items-center justify-between text-white">
          <Contact/>
        </div>
        <Footer />
      </div>

    </>
  );
};
