import React, { useState } from 'react'

export const Sidebar = ()=> {
    let [open,setOpen]=useState(false);

    return(
        <div className='font-fonte md:w-72 w-full h-full bg-gray fixed md:top-0 md:pt-2 flex flex-col'>
            <div className='md:bg-gray md:h-full bg-white py-5 px-7'>
                <div className='flex items-center'>
                    <img src="./RoboschLogoWithName.svg" className="h-10 w-44"/>
                    <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-5 md:hidden'><i className={open ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i></div>
                </div>
                <ul className={`md:pt-4 pt-2 md:pl-2 pl-10 md:gap-14 pb-12 md:pb-0 absolute md:static md:bg-gray bg-white md:z-auto z-[-1] left-0 w-full md:text-base text-lg md:w-auto pl-9 md:pl-0 transition-all duration-400 ease-in ${open ? 'top-16':'top-[-490px] opacity-0'} md:opacity-100`}>
                    <li className='md:my-5 my-7'><a className="flex gap-x-2 items-center duration-500 hover:text-purple hover:scale-105" href="">
                        <i className="fa-regular text-lg fa-comment-dots"></i>Chat</a>
                    </li>
                    <li className='md:my-5 my-7'><a className="flex gap-x-3 items-center duration-500 hover:text-purple hover:scale-105" href="">
                        <i className="fa-regular text-lg fa-file-lines"></i>Documentação</a>
                    </li>
                    <li className='md:my-5 my-7'><a className="flex gap-x-2 items-center duration-500 hover:text-purple hover:scale-105" href="">
                        <i className="fa-regular text-lg fa-circle-question"></i>Saiba mais</a>
                    </li>
                </ul>
            </div>
        </div> 
    )
}