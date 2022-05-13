import React from 'react'
import Testimonial from './Testimonial/Testimonial'

import anisha from '../../img/avatar-anisha.png'
import ali from '../../img/avatar-ali.png'
import richard from '../../img/avatar-richard.png'

function Testimonials() {

    const items = [
        {
            id: 1,
            avatar: anisha,
            name: 'Anisha Li',
            content: `Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.`
        },

        {
            id: 2,
            avatar: ali,
            name: 'Ali Bravo',
            content: `Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.`
        },

        {
            id: 3,
            avatar: richard,
            name: 'Richard Watts',
            content: `Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.`
        },
    ]


    return (

    <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">What's Different About Manage?</h2>

            <div className="flex flex-col mt-24 space-y-12 md:space-y-0 md:flex-row md:space-x-6">
                {
                    items.map(
                        item => <Testimonial key={ item.id } name={ item.name } avatar={ item.avatar } content={ item.content } />
                    )
                }
            </div>

            <div className="my-16">
                <a href="#" className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
            </div>
        </div>
    </section>

    )
}

export default Testimonials
