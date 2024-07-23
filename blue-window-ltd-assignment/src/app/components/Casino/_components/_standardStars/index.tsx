import React from 'react'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function StandardStars() {
  return (
    <div>
        <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
    </div>
  )
}

export default StandardStars