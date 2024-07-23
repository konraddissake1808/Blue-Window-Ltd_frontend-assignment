import React from 'react';
import GrosvenorCasino from "../../../../public/Grosvenor-casinos.png"
import HappySpins from "../../../../public/Happy-spins.png"
import Hajpers from "../../../../public/Hajpers.png"
import Image from 'next/image';
import SolidStar from './_components/_solidStars';
import StandardStars from './_components/_standardStars';
import Button from './_components/_button';

interface CasinoProps {
  title?: string;
  image?: string;
  id?: string;
  rating?: number;
}


const Casino: React.FC<CasinoProps> = ({image, id, title, rating}) => {
    if (id=="0001"){
        return (
            <div className='casinoCard mb-4 lg:w-full'>
                <div className='text-black p-4 rounded lg:flex lg:w-full lg:justify-between'>
                    <div className='text-black p-4 rounded md:flex lg:w-[80%] lg:p-0 lg:flex'>
                        <div className='h-[117px] flex justify-center items-center overflow-hidden bg-[#03252B]
                        md:min-w-[40%] md:h-[162px]'>
                            <Image className='bg-contain bg-center h-[133px] w-[133px]' src={GrosvenorCasino} alt=''/>
                        </div>
                        <div className='md:ml-[29px] md:flex md:flex-col md:justify-start lg:flex-row lg:ml-0 lg:w-[60%] lg:pl-[29px] lg:items-center'>
                            <div className='lg:w-[60%]'>
                                <div>
                                    <p className='text-center text-xl font-normal underline mt-[18px] md:text-left md:mt-1'>{title}</p>
                                </div>
                                <div className='w-full flex justify-center mt-[18px] md:justify-start lg:mt-10'>
                                    <div className='flex justify-center text-[#F09F00]'>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <SolidStar/>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-[18px] md:text-left lg:min-w-[149px] lg:mt-0'>
                                <div className='font-semibold text-xl'>
                                    <p>Bonus</p>
                                </div>
                                <div className='font-normal text-[28px] mt-[6px] flex flex-col sm:flex-row sm:justify-center 
                                lg:flex-col lg:mt-4'>
                                    <div>
                                        <p>Bet £10</p>
                                    </div>
                                    <div className='mt-[12px] sm:mt-0 sm:ml-2 lg:ml-0 lg:mt-[12px]'>
                                        <p>Get £400</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className='flex justify-center mt-7 lg:min-w-[20%] lg:mt-0 lg:items-center'>
                        <Button></Button>
                    </div>
                </div>
            </div>
        );
    }
    else if (id=="0002") {
        return(
            <div className='casinoCard mb-4 lg:w-full'>
                <div className='text-black p-4 rounded lg:flex lg:w-full lg:justify-between'>
                    <div className='text-black p-4 rounded md:flex lg:w-[80%] lg:p-0 lg:flex'>
                        <div className='h-[117px] flex justify-center items-center overflow-hidden bg-[#43082F]
                        md:min-w-[40%] md:h-[162px]'>
                            <Image className='bg-contain bg-center h-[133px] w-[133px]' src={HappySpins} alt=''/>
                        </div>
                        <div className='md:ml-[29px] md:flex md:flex-col md:justify-start lg:flex-row lg:ml-0 lg:w-[60%] lg:pl-[29px] lg:items-center'>
                            <div className='lg:w-[60%]'>
                                <div>
                                    <p className='text-center text-xl font-normal underline mt-[18px] md:text-left md:mt-1'>{title}</p>
                                </div>
                                <div className='w-full flex justify-center mt-[18px] md:justify-start lg:mt-10'>
                                    <div className='flex justify-center text-[#F09F00]'>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <StandardStars/>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-[18px] md:text-left lg:min-w-[149px] lg:mt-0'>
                                <div className='font-semibold text-xl'>
                                    <p>Bonus</p>
                                </div>
                                <div className='font-normal text-[28px] mt-[6px] flex flex-col sm:flex-row sm:justify-center 
                                lg:flex-col lg:mt-4'>
                                    <div>
                                        <p>Bet £10</p>
                                    </div>
                                    <div className='mt-[12px] sm:mt-0 sm:ml-2 lg:ml-0 lg:mt-[12px]'>
                                        <p>Get £400</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className='flex justify-center mt-7 lg:min-w-[20%] lg:mt-0 lg:items-center'>
                        <Button></Button>
                    </div>
                </div>
            </div>
        )
    }
    else if (id=="0003") {
        return(
            <div className='casinoCard mb-4 lg:w-full'>
                <div className='text-black p-4 rounded lg:flex lg:w-full lg:justify-between'>
                    <div className='text-black p-4 rounded md:flex lg:w-[80%] lg:p-0 lg:flex'>
                        <div className='h-[117px] flex justify-center items-center overflow-hidden bg-[#123156]
                        md:min-w-[40%] md:h-[162px]'>
                            <Image className='bg-contain bg-center h-[133px] w-[133px]' src={Hajpers} alt=''/>
                        </div>
                        <div className='md:ml-[29px] md:flex md:flex-col md:justify-start lg:flex-row lg:ml-0 lg:w-[60%] lg:pl-[29px] lg:items-center'>
                            <div className='lg:w-[60%]'>
                                <div>
                                    <p className='text-center text-xl font-normal underline mt-[18px] md:text-left md:mt-1'>{title}</p>
                                </div>
                                <div className='w-full flex justify-center mt-[18px] md:justify-start lg:mt-10'>
                                    <div className='flex justify-center text-[#F09F00]'>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <SolidStar/>
                                        <StandardStars/>
                                        <StandardStars/>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-[18px] md:text-left lg:min-w-[149px] lg:mt-0'>
                                <div className='font-semibold text-xl'>
                                    <p>Bonus</p>
                                </div>
                                <div className='font-normal text-[28px] mt-[6px] flex flex-col sm:flex-row sm:justify-center 
                                lg:flex-col lg:mt-4'>
                                    <div>
                                        <p>Bet £10</p>
                                    </div>
                                    <div className='mt-[12px] sm:mt-0 sm:ml-2 lg:ml-0 lg:mt-[12px]'>
                                        <p>Get £400</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className='flex justify-center mt-7 lg:min-w-[20%] lg:mt-0 lg:items-center'>
                        <Button></Button>
                    </div>
                </div>
            </div>
        )
    }
  }


export default Casino
