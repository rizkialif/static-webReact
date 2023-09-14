import React from 'react';
import Pagebanner from '../components/Pagebanner';

const tutorialmenu = [
    { id: 1, title: 'Access Point Tenda Type Lama', img:'/assets/rizbarner.jpg', href: '/tendalama'},
    { id: 2, title: 'Access Point Tenda Type Baru', img:'/assets/rizbarner.jpg', href: '/tendabaru'},
    { id: 3, title: 'Access Point Zte', img:'/assets/rizbarner.jpg', href: '/zte'},
    { id: 4, title: 'Access Point Huawei', img:'/assets/rizbarner.jpg', href: '/huawei'},
    { id: 5, title: 'Access Point Ruckus', img:'/assets/rizbarner.jpg', href: '/Ruckus'},
    { id: 6, title: 'Link Ganti Password Access Point 1', img:'/assets/rizbarner.jpg', href: 'http://192.168.1.2'},
    { id: 7, title: 'Link Ganti Password Access Point 2', img:'/assets/rizbarner.jpg', href: 'http://192.168.1.3'}
]

function PagesTutorial() {
    return(
        <div>
            <Pagebanner/>
            
            <div className='lg:my-10 my-5'>
                <div className='ml-5 mb-2 lg:ml-[2.5rem]'>
                    <label className='lg:font-tutor text-2xl'>Tutorial Konfigurasi Jaringan</label>
                </div>
                
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4 px-5 lg:pl-10 text-center">
                    {tutorialmenu.map((item) => (
                        <a key={item.id} href={item.href}>
                            <div className='h-[8rem] lg:h-[12rem] mb-5 lg:mb-5 lg:py-2 rounded shadow-slate-600/50 shadow-lg hover:shadow-purple-600/90 hover:shadow-lg hover:cursor-pointer'>
                                <div  className='rounded lg:image-size-lg'>
                                    <img className="h-27 rounded w-full" src={item.img} alt='banner-1'/>
                                </div>
                                <div className='px-2 lg:py-3 py-2'>
                                    <label>
                                        {item.title}
                                    </label>
                                </div>
                            </div>
                        </a>
                    ))}       
                </div>
            </div>
        </div>
        
    )
}

export default PagesTutorial