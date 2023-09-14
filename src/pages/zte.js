import React, { useState, useEffect } from "react";
import Pagebanner from '../components/Pagebanner';

const Zte = () => {
    const number = 0;
    const list = [
        { id:0,  text: 'Pertama buka aplikasi browser anda dan masukkan alamat 192.168.1.2', img:'/assets/content/zte/z1.png', alt:'td1'},
        { id:1,  text: 'Kedua masukkan username dan password yang diberikan petugas lalu klik log in', img:'/assets/content/zte/z2.png', alt:'z2'},
        { id:2,  text: 'Ketiga setelah halaman terbuka klik menu network', img:'/assets/content/zte/z3.png', alt:'z3'},
        { id:3,  text: 'Keempat setelah halaman network terbuka klik menu security untuk mengganti password wifi', img:'/assets/content/zte/z4.png', alt:'z4'},
        { id:4,  text: 'Terakhir setelah mengganti password yang baru klik submit dan wifi anda terputus lalu sambungkan kembali dengan password baru', img:'/assets/content/zte/z5.png', alt:'z5'}
    ]

    const [listzte, setList] = useState([]);

    useEffect(() => {
        getListzte();
    }, [])

    const getListzte = async () => {
        // const response = await axios.get(getUsersList);
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
                    {listzte.map((item) => (
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

export default Zte