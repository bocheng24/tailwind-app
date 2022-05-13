import React from 'react'
import illustration from '../img/illustration-intro.svg'

function Hero() {
  return (
    <section id="hero">
        <div className="container mx-auto flex items-center md:flex-row flex-col-reverse px-6 mt-10 space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className='max-w-sm text-3xl font-bold text-center lg:text-5xl md:max-w-md md:text-4xl md:text-left'>
                    Bring everyone together to build better products
                </h1>

                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks
                while keeping the larger team goals in view.
                </p>

                <div className="flex justify-center md:justify-start">
                    <a href="#" className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
                </div>
            </div>

            <div className="w-1/2">
                <img src={ illustration } alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
