import React from 'react'

function Testimonial({ avatar, content, name}) {
    return (
        <div className="flex flex-col item-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={ avatar} alt={ name } className='w-16 -mt-14' />
            <h5 className="text-lg font-bold">{ name }</h5>
            <p className="text-sm text-darkGrayishBlue">{ content }</p>
        </div>
    )
}

export default Testimonial
