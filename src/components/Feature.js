import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi} from '@fortawesome/free-solid-svg-icons'

function Feature() {
    return (
        <div className='mt-4 lg:mt-6'>
            <div className="mx-auto max-w-7xl items-stretch">
                <div className="px-2 lg:px-5">
                    {/* <p className='text-center text-3xl font-sans'>Our Feature</p> */}
                    <div className="grid grid-cols-3 gap-4 h-[10em]">
                        <div className='rounded-lg shadow-md shadow-slate-300 text-center pt-10 hover:cursor-pointer'>
                        <FontAwesomeIcon icon={faWifi} size="lg" color="green"/>
                            <p>Koneksi lancar dan stabil</p>
                        </div>
                        <div className='rounded-lg shadow-md shadow-slate-300 text-center pt-10 hover:cursor-pointer'>
                            <p>Cakupan area luas</p>
                        </div>
                        <div className='rounded-lg shadow-md shadow-slate-300 text-center pt-10 hover:cursor-pointer'>
                            <p>Layanan pengaduan 24jam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature