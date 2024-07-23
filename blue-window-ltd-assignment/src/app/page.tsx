import Image from "next/image";
import { Montserrat } from "next/font/google";
import Casino from "./components/Casino/index";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between font-sans">
      <div className="z-10 w-full mt-[60px] px-5 items-center justify-between font-sans text-sm lg:flex">
        <div className="w-full">
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="w-[95%]">
              <p className="font-bold text-2xl text-[#939393] w-full text-start">Best Casinos 2024</p>
            </div>
            <div className="w-[95%] mt-10">
              <Casino image="Grosvenor" id="0001" title="Grosvenor Casinos" rating={5}/>
              <Casino image="Happy-spins" id="0002" title="Happy Spins" rating={5}/>
              <Casino image="Hajpers" id="0003" title="Hajper" rating={5}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
