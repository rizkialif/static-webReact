import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes, faHouseSignal, faUsers, faWifi3 } from '@fortawesome/free-solid-svg-icons'

function Feature() {
    return (
        <div className='mt-4 lg:mt-6'>
            <div className="mx-auto max-w-7xl items-stretch">
                <div className="px-2 lg:px-5">
                    {/* <p className='text-center text-3xl font-sans'>Our Feature</p> */}
                    <div className="grid grid-cols-3 gap-4 h-[10em]">
                        <div className='rounded-lg pt-10 hover:cursor-pointer text-center'>
                            <FontAwesomeIcon icon={faHouseSignal} size="3x" color="#053B50"/>
                            <p className='text-2xl mt-3'>Koneksi lancar dan stabil</p>
                            <p className=''>Dengan menggunakan kabel FO yang sudah sangat terbukti cepat menjadikan kualitas sinyal yang kami tawarkan sudah pasti cepat dan stabil untuk segala kebutuhan</p>
                        </div>
                        <div className='rounded-lg text-center pt-10 hover:cursor-pointer'>
                            <FontAwesomeIcon icon={faCircleNodes} size="3x" color="#053B50"/>
                            <p className='text-2xl mt-3'>Cakupan area luas</p>
                            <p className=''>Dengan menggunakan kabel FO yang sudah sangat terbukti cepat menjadikan kualitas sinyal yang kami tawarkan sudah pasti cepat dan stabil untuk segala kebutuhan</p>
                        </div>
                        <div className='rounded-lg text-center pt-10 hover:cursor-pointer'>
                        <FontAwesomeIcon icon={faUsers} size="3x" color="#053B50"/>
                            <p className='text-2xl mt-3'>Layanan Pengaduan</p>
                            <p className=''>Dengan menggunakan kabel FO yang sudah sangat terbukti cepat menjadikan kualitas sinyal yang kami tawarkan sudah pasti cepat dan stabil untuk segala kebutuhan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature