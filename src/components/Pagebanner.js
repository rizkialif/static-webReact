import React from 'react';
// import Logo from '../assets/rizbarner.jpg';

const image = [
    { img:'/assets/rizbarner.jpg', alt: 'banner-page'}
]
function Pagebanner() {
    return (
        <div className="bg-banner h-[10rem] bg-no-repeat bg-cover"></div>
    )
    // {image.map((item, i) => {
    //     console.log(item.img);
    //     return (
    //     <div className='hidden lg:block'>
    //         <img className="" src={item.img} alt={item.item}/>
    //         {/* <img className="image-size-lg" src={Logo} alt={item.item}/> */}
    //     </div>
    // )})}

}
export default Pagebanner