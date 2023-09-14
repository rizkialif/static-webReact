import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className='lg: bg-[#5900FF] h-[28rem] text-white md:max-h-40'>
            <div className="grid lg:grid-cols-3 gap-4 content-banner">
                <address className='pt-5 lg:h-[10em]'>
                    <div className='flex lg:text-2xl ml-[1rem] lg:mx-[0]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className='text-white font-bold ml-2'>CompName</span>
                    </div>
                    <p className='hidden lg:block'>Boulevard Tower B</p>
                    <p className='hidden lg:block'>South Jakarta, Indonesia</p>
                    <p className='hidden lg:block'>021-718271</p>
                </address>
                <div className='lg:py-2 pl-[1rem] lg:pt-5 lg:h-[10em]'>
                    <p>Follow us on :</p>
                    <div className='flex'>
                        <a className='mr-3'>
                            <FacebookIcon fontSize="large"/>
                        </a>
                        
                        <a>
                            <TwitterIcon fontSize="large"/>
                        </a>
                    </div>
                </div>
                <div className='lg:pt-5 py-2 px-auto hidden lg:block lg:h-[10em]'>
                    <p className='mb-2'>Our Location</p>
                    {/* <div className="google-map-code">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div> */}
                </div>
            </div>
        </div>
        
    )
}

export default Footer