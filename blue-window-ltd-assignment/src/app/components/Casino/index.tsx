import React from 'react';
import GrosvenorCasino from "../../../../public/Grosvenor-casinos.png"
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CasinoProps {
  title?: string;
  image?: string;
  id?: string;
  rating?: number;
}

const Casino: React.FC<CasinoProps> = ({image, id, title, rating}) => {
  return (
    <div className='text-black'>
        <div>
            
        </div>
        <p>{title}</p>
    </div>
  )
}

export default Casino