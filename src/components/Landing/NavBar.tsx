import logo from "../../assets/logoasoniped.png";
import { navItems } from "../../constanst/index";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from '@tanstack/react-router';

const NavBar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b.border-neutral-700/80">
        <div className="container mx-auto px-4 text-sm relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img className="h-15 w-15 mr-7 rounded-full" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">Asoniped Digital</span>
                    </Link>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center mr-6">
                    <Link to="/admin-login" className="py-2 px-3 border rounded-md">
                        Login
                    </Link>
                    {/*
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md mr-4">
                       Crear Cuenta 
                    </a>
                    */}
                </div>    
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20  w-full p-12 flex delx-col justify-between items-center lg:hidden">
                        <ul >
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <Link to="/admin-login" className="py-2 px-3 border rounded-md">
                                Login
                            </Link>
                            {/*
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Crear Cuenta 
                            </a>
                            */}
                        </div>
                    </div>
                )}
        </div>
    </nav>
  )
}

export default NavBar

 