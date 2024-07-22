import Image from "next/image";
import { Montserrat } from "next/font/google";
import Casino from "./components/Casino/index";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between font-sans">
      <div className="z-10 w-full mt-[60px] px-5 max-w-5xl items-center justify-between font-sans text-sm lg:flex">
        <div>
          <div>
            <p className="font-bold text-2xl text-[#939393]">Best Casinos 2024</p>
          </div>
          <Casino image="Grosvenor" id="0001" title="Grosvenor Casinos" rating={5}/>
          <Casino image="Happy-spins" id="0002" title="Happy Spins" rating={5}/>
          <Casino image="Hajpers" id="0003" title="Hajpers" rating={5}/>
        </div>
      </div>
    </main>
  );
}
