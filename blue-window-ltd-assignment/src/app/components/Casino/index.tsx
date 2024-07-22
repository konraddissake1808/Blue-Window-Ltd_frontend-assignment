import React from 'react';
import GrosvenorCasino from "../../../../public/Grosvenor-casinos.png"
import HappySpins from "../../../../public/Happy-spins.png"
import Hajpers from "../../../../public/Hajpers.png"
import Image from 'next/image';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CasinoProps {
  title?: string;
  image?: string;
  id?: string;
  rating?: number;
}


const Casino: React.FC<CasinoProps> = ({image, id, title, rating}) => {
    if (id=="0001"){
        return (
            <div className='casinoCard'>
                <div className='text-black flex justify-center flex-col p-4 rounded shadow-[0px_0px_20px_0px_rgba(0, 0, 0, 0.1)]'>
                    <div className='h-[117px] flex justify-center items-center overflow-hidden bg-[#03252B]'>
                        <Image className='bg-contain bg-center h-[133px] w-[133px]' src={GrosvenorCasino} alt=''/>
                    </div>
                    <div>
                        <p className='text-center'>{title}</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='flex justify-center text-[#F09F00]'>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (id=="0002") {
        return(
            <div className='casinoCard'>
                <div className='text-black p-4 rounded shadow-[0px_0px_20px_0px_rgba(0, 0, 0, 0.1)]'>
                    <div className='h-[117px] flex justify-center items-center overflow-hidden bg-[#43082F]'>
                        <Image className=' bg-center bg-contain h-[133px] w-[133px]' src={HappySpins} alt=''/>
                    </div>
                    <div>
                        <p className='text-center'>{title}</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='flex justify-center text-[#F09F00]'>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (id=="0003") {
        return(
            <div className='casinoCard'>
                <div className='text-black p-4 rounded'>
                    <div className='h-[117px] flex justify-center items-center overflow-hidden bg-[#123156]'>
                        <Image className='bg-contain bg-center h-[133px] w-[133px]' src={Hajpers} alt=''/>
                    </div>
                    <div>
                        <p className='text-center font-sans'>{title}</p>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='flex justify-center text-[#F09F00]'>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='h-[31px] w-[31px]' icon={faStar}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='font-semibold text-xl'>
                            <p>Bonus</p>
                        </div>
                        <div className='font-normal text-[28px]'>
                            <div>
                                <p>Bet £10</p>
                            </div>
                            <div>
                                <p>Get £400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }


export default Casino
