import React, { useState, useEffect } from "react";
import Pagebanner from '../components/Pagebanner';

const Huawei = () => {
    const number = 0;
    const list = [
        { id:0,  text: 'Pertama buka aplikasi browser anda dan masukkan alamat 192.168.1.2', img:'/assets/content/huawei/h1.png', alt:'td1'},
        { id:1,  text: 'Kedua masukkan username dan password yang diberikan petugas lalu klik log in', img:'/assets/content/huawei/h2.png', alt:'h2'},
        { id:2,  text: 'Ketiga setelah halaman terbuka klik gambar antena untuk menampilkan menu', img:'/assets/content/huawei/h3.png', alt:'h3'},
        { id:3,  text: 'Keempat agar password terlihat hilangkan cheklist yang berpanah merah', img:'/assets/content/huawei/h4.png', alt:'h4'},
        { id:4,  text: 'Terakhir setelah mengganti password yang baru klik save dan wifi anda terputus lalu sambungkan kembali dengan password baru', img:'/assets/content/huawei/h5.png', alt:'h5'}
    ]

    const [listhuawei, setList] = useState([]);

    useEffect(() => {
        getListhuawei();
    }, [])

    const getListhuawei = async () => {
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
                    {listhuawei.map((item) => (
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

export default Huawei