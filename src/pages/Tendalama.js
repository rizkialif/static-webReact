import React, { useState, useEffect } from "react";
import Pagebanner from '../components/Pagebanner';

const Tendalama = () => {
    const number = 0;
    const list = [
        { id:0,  text: 'Pertama buka aplikasi browser anda dan masukkan alamat 192.168.1.2', img:'/assets/content/tenda1/t1.png', alt:'t1'},
        { id:1,  text: 'Kedua masukkan password yang diberikan petugas lalu klik OK', img:'/assets/content/tenda1/t2.png', alt:'t1'},
        { id:2,  text: 'Ketiga setelah halaman terbuka klik kolom Security Key agar password anda tampil', img:'/assets/content/tenda1/t3.png', alt:'t1'},
        { id:3,  text: 'Terakhir setelah memasukkan password yang baru klik OK dan wifi anda otomatis terputus lalu masukkan password yang baru anda buat', img:'/assets/content/tenda1/t4.png', alt:'t1'}
    ]

    const [listtendalama, setList] = useState([]);

    useEffect(() => {
        getListtendalama();
    }, [])

    const getListtendalama = async () => {
        // const response = await axios.get(getUsersList);
        setList(list);
    }

    return(
        <div>
            <Pagebanner/>
            <div className='lg:my-10 my-5'>
                <header className='mb-2 px-4 lg:ml-[2.5rem]'>
                    <label className='lg:font-tutor text-2xl'>Tutorial Ganti Password Access Point Tenda Firmware Lama</label>
                </header>

                <div className='mb-2 px-4 lg:ml-[2.5rem] text-justify'>
                    <label className='text-md text-justify'>Lakukan langkah-langkah berikut secara berurutan agar firmware anda bisa digunakan :</label>
                    {listtendalama.map((item) => (
                        <div key={item.id} className='lg:my-5 my-6 rounded grid grid-cols-1'>
                            <label>{item.id + 1}. {item.text}</label>
                            <div className='border-2 border-slate-300 lg:h-[30rem] lg:w-[35rem]'>
                                <img className="" src={item.img} alt={item.alt}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tendalama