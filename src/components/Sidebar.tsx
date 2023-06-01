import { useState } from 'react'

export const Sidebar = ()=> {
    let [open,setOpen]=useState(false);

    return(
        <div className='font-fonte lg:w-72 w-full h-[50vh] lg:h-full bg-gray fixed lg:top-0 lg:pt-2 z-20 flex flex-col'>
            <div className='lg:bg-gray lg:h-full bg-white py-5 px-7'>
                <div className='flex items-center'>
                    <img src="./RoboschLogoWithName.svg" className="h-10 w-44 z-30"/>
                    <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-5 lg:hidden'><i className={open ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i></div>
                </div>
                <ul className={`lg:pt-4 pt-2 lg:pl-2 lg:gap-14 pb-12 lg:pb-0 absolute lg:static lg:bg-gray bg-white md:z-auto z-[-1] left-0 w-full lg:text-base text-lg lg:w-auto pl-9  transition-all duration-400 ease-in ${open ? 'top-16':'top-[-490px] opacity-0'} md:opacity-100`}>
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