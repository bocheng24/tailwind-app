import React from 'react'

import NumberedList from './NumberedList/NumberedList'

function Features() {
  return (
    <section id="features">
        <div className="container mx-auto mt-10 p-4 space-y-12 flex flex-col md:flex-row md:space-y-0">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className='max-w-md font-bold text-3xl text-center lg:text-4xl md:text-left'>
                    What's different about Manage?
                </h2>

                <p className='max-w-md text-center text-darkGrayishBlue md:text-left'>
                    Manage provides all the functionality your team needs, without the
                    complexity. Our software is tailor-made for modern digital product
                    teams.
                </p>
            </div>

            <NumberedList />
        </div>
    </section>
  )
}

export default Features
