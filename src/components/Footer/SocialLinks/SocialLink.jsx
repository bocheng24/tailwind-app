import React from 'react'

function SocialLink({ svg, name }) {
  return (
    <a href="#">
        <img src={ svg } alt={ name } className='h-8' />
    </a>
  )
}

export default SocialLink
