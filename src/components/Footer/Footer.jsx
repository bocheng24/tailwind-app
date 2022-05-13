import React from 'react'
import logoWhite from '../../img/logo-white.svg'
import SocialLinks from './SocialLinks/SocialLinks'
import Lists from './Lists/Lists'

function Footer() {
  return (
    <footer className='bg-veryDarkBlue'>
        <div className="container mx-auto flex flex-col-reverse items-center justify-between px-6 py-10 space-y-8 lg:flex-row lg:space-y-0">
            <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2022, All Rights Reserved
            </div>
            <div className="flex flex-col space-y-6 items-center">

                <div>
                    <img src={ logoWhite } alt="logo white" />
                </div>

                <SocialLinks />
            </div>

            <Lists />

            <div className="flex flex-col space-y-6 items-center flex-between">
                <form>
                    <input type="text" placeholder='Updated in your inbox' className="flex-1 px-4 py-1 rounded-full focus:outline-none" />
                    <button className="px-6 py-2 mt-3 ml-3 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                </form>
                <div class="hidden text-white md:block">
                    Copyright &copy; 2022, All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
