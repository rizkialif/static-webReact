import React from 'react';
const listpromo = 0;

function Promo() {
    return (
        <div className='mt-10 lg:mt-[10rem] lg:mb-[5rem]'>
            <div className="mx-auto max-w-7xl items-stretch">
                <div className="px-2 lg:px-5 mb-10">
                    <p className='text-center text-3xl font-sans'>Promo Terbatas</p>
                    <div className="h-[10em] m-auto">
                        <div className='text-center pt-10'>
                            <p className='text-2xl'>Mohon maaf promo belum tersedia</p>
                        </div>
                        {/* <div className='rounded-lg shadow-md shadow-slate-700/50 text-center pt-10 hover:shadow-regal-blue hover:shadow-lg hover:cursor-pointer'>
                            <p>01</p>
                        </div>
                        <div className='rounded-lg shadow-md shadow-slate-700/50 text-center pt-10 hover:shadow-regal-blue hover:shadow-lg hover:cursor-pointer'>
                            <p>02</p>
                        </div>
                        <div className='rounded-lg shadow-md shadow-slate-700/50 text-center pt-10 hover:shadow-regal-blue hover:shadow-lg hover:cursor-pointer'>
                            <p>03</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo