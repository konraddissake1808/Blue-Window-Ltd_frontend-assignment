import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SolidStar() {
  return (
    <div>
        <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
    </div>
  )
}

export default SolidStar