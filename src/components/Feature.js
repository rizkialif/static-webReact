import React from 'react';

function Feature() {
    return (
        <div className='mt-4 lg:mt-6'>
            <div className="mx-auto max-w-7xl items-stretch">
                <div className="px-2 lg:px-5">
                    {/* <p className='text-center text-3xl font-sans'>Our Feature</p> */}
                    <div className="grid grid-cols-3 gap-4 h-[10em]">
                        <div className='rounded-lg shadow-md shadow-slate-300 text-center pt-10 hover:cursor-pointer'>
                            <p>01</p>
                        </div>
                        <div className='rounded-lg shadow-md shadow-slate-300 text-center pt-10 hover:cursor-pointer'>
                            <p>02</p>
                        </div>
                        <div className='rounded-lg shadow-md shadow-slate-300 text-center pt-10 hover:cursor-pointer'>
                            <p>03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature