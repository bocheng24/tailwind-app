import React from 'react'
import fb from '../../../img/icon-facebook.svg'
import yt from '../../../img/icon-youtube.svg'
import tw from '../../../img/icon-twitter.svg'
import pt from '../../../img/icon-pinterest.svg'
import ins from '../../../img/icon-instagram.svg'

import SocialLink from './SocialLink'

function SocialLinks() {

    const socials = [
        {
            id: 1,
            svg: fb,
            name: 'facebook'
        },
        
        {
            id: 2,
            svg: yt,
            name: 'youtube'
        },

        {
            id: 3,
            svg: tw,
            name: 'twitter'
        },

        {
            id: 4,
            svg: pt,
            name: 'pinterest'
        },
        {
            id: 5,
            svg: ins,
            name: 'instagram'
        },

    ]

    return (
        <div className="flex justify-center space-x-4">
            {
                socials.map(
                    sc => <SocialLink key={ sc.id } svg={ sc.svg } name={ sc.name } />
                )
            }
        </div>
    )
}

export default SocialLinks
