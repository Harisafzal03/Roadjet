import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { ReactComponent as Roadjet } from "./assets/svg/Roadjet.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import footerImage from "./assets/Image/footerbg.png";
import Home from "./pages/Home";
import Price from "./pages/Price";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-[90%] mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0 flex items-center">
                <Roadjet className="h-12 w-auto" />
                <div className="ml-2">
                  <h1 className="text-xl font-bold">ROAD JET</h1>
                  <p className="text-xs italic">Let's Jet!</p>
                </div>
              </div>
              <nav className="relative">
                <div className="hidden sm:block sm:flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium ${isActive ? "bg-[#c1651c] text-white" : "text-white bg-black"} rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/price"
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium ${isActive ? "bg-[#c1651c] text-white" : "text-white bg-black"} rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1`
                    }
                  >
                    Price
                  </NavLink>
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium ${isActive ? "bg-[#c1651c] text-white" : "text-white bg-black"} rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1`
                    }
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    to="/faqs"
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium ${isActive ? "bg-[#c1651c] text-white" : "text-white bg-black"} rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1`
                    }
                  >
                    FAQs
                  </NavLink>
                  <NavLink
                    to="/terms"
                    className={({ isActive }) =>
                      `px-3 py-2 text-base font-medium ${isActive ? "bg-[#c1651c] text-white" : "text-white bg-black"} rounded-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1`
                    }
                  >
                    Ts & Cs
                  </NavLink>
                </div>

                <div className="sm:hidden block flex items-center">
                  <button onClick={toggleSidebar} className="text-white p-2">
                    <Bars3Icon className="w-6 h-6 text-black" />
                  </button>
                </div>
                <div
                  className={`fixed sm:hidden block inset-0 bg-black bg-opacity-75 transition-transform transform ${isOpen ? "block" : "hidden"} w-4/5 p-4 z-50`}
                >
                  <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 text-white"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                  <div className="flex flex-col space-y-4 mt-12">
                    <Link
                      to="/"
                      className="text-white text-lg font-medium"
                      onClick={toggleSidebar}
                    >
                      Home
                    </Link>
                    <Link
                      to="/price"
                      className="text-white text-lg font-medium"
                      onClick={toggleSidebar}
                    >
                      Price
                    </Link>
                    <Link
                      to="/contact-us"
                      className="text-white text-lg font-medium"
                      onClick={toggleSidebar}
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/faqs"
                      className="text-white text-lg font-medium"
                      onClick={toggleSidebar}
                    >
                      FAQs
                    </Link>
                    <Link
                      to="/terms"
                      className="text-white text-lg font-medium"
                      onClick={toggleSidebar}
                    >
                      Ts & Cs
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <footer>
          <img
            src={footerImage}
            alt="Footer"
            className="bg-contain object-contain"
          />
          <h4 className=" text-center text-white bg-black">
            © 2024 Road Jet Sydney &lt;&gt; Canberra 24 Hours Service Allows an
            easier to travel between Sydney and Canberra. Offering a door to
            destination service.. All <br /> rights reserved.
          </h4>
        </footer>
      </div>
    </Router>
  );
}

export default App;
