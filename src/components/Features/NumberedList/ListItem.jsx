import React from 'react'

function ListItem({ id, title, content }) {
  return (
    <div className='flex flex-col space-y-3 items-start md:space-y-6 md:space-x-6 md:flex-row'>
      <div className="bg-brightRedSupLight rounded-l-full md:bg-transparent">
          <div className="flex items-center md:mt-6 space-x-2">
            <div className="px-4 py-2 rounded-full bg-brightRed text-white md:py-1">
                { `0${id}` }
            </div>
            <h3 className="font-bold text-base md:mb-4 md:hidden">{ title }</h3>
          </div>
      </div>

      <div>
          <h3 className="hidden text-lg mb-4 font-bold md:block">{ title }</h3>
          <p className="text-darkGrayishBlue">
                { content }
          </p>
      </div>
    </div>
  )
}

export default ListItem
