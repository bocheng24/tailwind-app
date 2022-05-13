import React from 'react'
import logo from '../img/logo.svg'

function Navbar() {
    return (

        <nav className="realative container mx-auto p-6">
            <div className="flex items-center justify-between">
                
                {/* Logo */}
                <div className="pt-2">
                    <img src={ logo } alt="logo" />
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                    <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                    <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                    <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                    <a href="#" className="hover:text-darkGrayishBlue">Community</a>
                </div>

                {/* Navbar Button */}
                <a href="#" className="hidden md:block p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                    Get Started
                </a>
            </div>
        </nav>

    )
}

export default Navbar
