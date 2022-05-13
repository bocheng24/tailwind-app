import React from 'react'

function CTA() {
  return (
    <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-around px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h2 className="text-4xl font-bold text-white text-center leading-tight md:text-4xl md:max-w-xl md:text-left">
                Simplify how your team works today
            </h2>
            <div>
                <a href="" className="p-3 px-6 rounded-full text-brightRed bg-white baseline shadow-2xl hover:bg-gray-700">Get Started</a>
            </div>
        </div>

    </section>
  )
}

export default CTA
