import React from 'react'
import ListItem from './ListItem'

function NumberedList() {

    const items = [
        {
            id: 1,
            title: 'Track company-wide progress',
            content: `See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture
            again.`
        },

        {
            id: 2,
            title: 'Advanced built-in reports',
            content: `Set internal delivery estimates and track progress toward
            company goals. Our customisable dashboard helps you build out
            the reports you need to keep key stakeholders informed.`
        },

        {
            id: 3,
            title: 'Everything you need in one place',
            content: `Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an
            all-in-one team productivity solution.`
        }

    ]

    return (
    <div className='flex flex-col space-y-8 mx-auto md:w-1/2'>
        
        {
            items.map(
                item => <ListItem key={item.id} id={ item.id } title={ item.title } content={ item.content } />
            )
        }
        
    </div>
    )
}

export default NumberedList
