import React, { useState, useEffect } from "react";
import Pagebanner from '../components/Pagebanner';

const Ruckus = () => {
    const number = 0;
    const list = [
        { id:0,  text: 'Pertama buka aplikasi browser anda dan masukkan alamat 192.168.1.2', img:'/assets/content/ruckus/r1.png', alt:'r1'},
        { id:1,  text: 'Kedua masukkan username dan password yang diberikan petugas lalu klik log in', img:'/assets/content/ruckus/r2.png', alt:'r2'},
        { id:2,  text: 'Ketiga setelah halaman terbuka pilih salah satu band wifi yang mau diganti passwordnya', img:'/assets/content/ruckus/r3.png', alt:'r3'},
        { id:3,  text: 'Untuk band 2.4 pilih ssid yang mau di ganti passwordnya lalu klik update setting setelah memasukkan password yang baru', img:'/assets/content/ruckus/r4.png', alt:'r4'},
        { id:4,  text: 'Sama seperti band 2.4, untuk band 5.8 pilih ssid yang mau di ganti passwordnya lalu klik update setting setelah memasukkan password yang baru dan wifi anda otomatis terputus lalu masukkan password yang baru anda buat', img:'/assets/content/ruckus/r5.png', alt:'r5'}
    ]

    const [listruckus, setList] = useState([]);

    useEffect(() => {
        getListruckus();
    }, [])

    const getListruckus = async () => {
        setList(list);
    }

    return(
        <div>
            <Pagebanner/>
            <div className='lg:my-10 my-5'>
                <header className='mb-2 px-4 lg:ml-[2.5rem]'>
                    <label className='lg:font-tutor text-2xl'>Tutorial Ganti Password Access Point Tenda Firmware Baru</label>
                </header>

                <div className='mb-2 px-4 lg:ml-[2.5rem] text-justify'>
                    <label className='text-md text-justify'>Lakukan langkah-langkah berikut secara berurutan agar firmware anda bisa digunakan :</label>
                    {listruckus.map((item) => (
                        <div key={item.id} className='lg:my-6 my-6 rounded grid grid-cols-1'>
                            <label>{item.id + 1}. {item.text}</label>
                            <div className='border-2 border-slate-300 lg:w-[25rem] lg:mt-2'>
                                <img className="" src={item.img} alt={item.alt}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ruckus