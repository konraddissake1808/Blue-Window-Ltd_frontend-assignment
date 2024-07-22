import React from 'react';
import GrosvenorCasino from "../../../../public/Grosvenor-casinos.png"
import HappySpins from "../../../../public/Happy-spins.png"
import Hajpers from "../../../../public/Hajpers.png"
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CasinoProps {
  title?: string;
  image?: string;
  id?: string;
  rating?: number;
}


const Casino: React.FC<CasinoProps> = ({image, id, title, rating}) => {
    if (id=="0001"){
        return (
            <div className='text-black'>
                <div>
                    <Image src={GrosvenorCasino} alt=''/>
                </div>
                <p>{title}</p>
            </div>
        );
    }
    else if (id=="0002") {
        return(
            <div className='text-black'>
                <div>
                    <Image src={HappySpins} alt=''/>
                </div>
                <p>{title}</p>
            </div>
        )
    }
    else if (id=="0003") {
        return(
            <div className='text-black'>
                <div>
                    <Image src={Hajpers} alt=''/>
                </div>
                <p>{title}</p>
            </div>
        )
    }
  }


export default Casino
