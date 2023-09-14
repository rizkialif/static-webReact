import React from 'react';
import { Disclosure} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Tutorial', href: '/list-tutorial', current: false },
    { name: 'Cek Harga Paket', href: '#', current: false },
    { name: 'Info Pemasangan', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white border-b border-inherit sticky top-0 border-b border-slate-200 border-2">
        {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white hover:text-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a className='flex flex-shrink-0 items-center' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <span className='px-2 text-black font-bold '>RizNetwork</span>
                            </a>
                        </div>
                        <div className="hidden sm:block sm:ml-auto">
                            <div className="flex space-x-2">
                            {navigation.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-white text-black' : 'text-black hover:bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white',
                                    'rounded-md px-4 py-2 text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? 'bg-white text-black' : 'text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
            </Disclosure.Panel>
        </>
        )}
        </Disclosure>
    )
}

export default Navbar;