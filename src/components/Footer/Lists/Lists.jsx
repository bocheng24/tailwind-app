import React from 'react'
import List from './List'

function Lists() {

    const linksName = ['Home', 'Pricing', 'Products', 'About']
    const linksName2 = ['Careers', 'Community', 'Privacy Policy']

    return (

        <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
                { linksName.map(ln => <List linkName={ ln } />) }
            </div>
            
            <div className="flex flex-col space-y-3 text-white">
                { linksName2.map(ln => <List linkName={ ln } />) }
            </div>
        </div>

    )
}

export default Lists
