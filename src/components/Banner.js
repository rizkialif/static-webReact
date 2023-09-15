import React from 'react';
import Logo from '../pict-banner1.png';
// import homebanner from '../asdp.jpeg';
import homebanner from '../homebanner.jpg';

function Banner() {
    return (
      <div class="hidden lg:block">
        <img class="object-fill h-[450px] w-[1349px] m-auto" src={homebanner} />
      </div>
    )

          
       /* <div className="bg-homebanner h-[28rem] bg-no-repeat bg-cover"></div>
         <div className='bg-white border-b-4 border-slate-100 h-[20rem] lg:h-[22rem]'>
             <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 items-stretch px-1 content-banner lg:px-5">
               <div className='bg-white extra-padding px-2 lg:mt-10 lg:py-5 lg:col-span-2 lg:px-5'>
                   <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semi-bold tracking-tight font-banner">
                   <p className="font-semi-bold font-banner text-[#5900FF]">
                    Title Banner
                   </p>
                   <p className='text-justify'>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quo officiis repellat sunt eum ipsa aut, vero quibusdam quia, illo obcaecati quas excepturi aliquam ex ipsam? Aliquam
                   </p>
                   <button className="border-2 border-fuchsia-500 text-fuchsia-500 btn-banner rounded-lg font-bold mt-3 lg:mt-5 hover:bg-fuchsia-500 hover:border-0 hover:text-white" >Daftar Sekarang</button>
               </div>
               <div className='hidden lg:block lg:py-2'>
                     <img className="image-size-lg" src={Logo} alt='banner-1'/>
               </div>
             </div>
         </div> */
}

export default Banner;