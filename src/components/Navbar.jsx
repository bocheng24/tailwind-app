import React, { useEffect, useState } from 'react'
import logo from '../img/logo.svg'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState()

    useEffect(() => {

        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
        
        if (windowWidth > 768) {
            setIsOpen(false)
        }
        
    }, [windowWidth])
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

                {/* Hamburger Icon */}
                <button onClick={ () => setIsOpen(prev => !prev) }
                        id="btn-hamburger" 
                        className={ `${isOpen && 'open'} md:hidden btn-hamburger block focus:outline-none` }>
                    <span className="ham-top"></span>
                    <span className="ham-mid"></span>
                    <span className="ham-bottom"></span>
                </button>
            </div>

            {/* Mobile Menue */}
            <div className={ `${!isOpen && 'hidden'} md:hidden flex flex-col rounded-lg items-center mt-10 bg-white w-auto py-8 self-end space-y-6 drop-shadow-md` }>
                <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                <a href="#" className="hover:text-darkGrayishBlue">Community</a>
            </div>
        </nav>

    )
}

export default Navbar
