import React, { useState } from 'react'

export const Sidebar = ()=> {
    let [open,setOpen]=useState(false);

    return(
        <div className="bg-white h-full md:w-72 w-full fixed left-0 md:pt-10 pt-7 flex flex-col md:items-center p-6">
            <div className="flex items-center">
                <img src="./RoboschLogoWithName.svg" className="h-10 w-44"/>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-12 cursor-pointer md:hidden">
                    <i className={open ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
                </div>
            </div>
            <div>
                <ul className={`left-0 w-full md:pl-0 pl-9 md:static absolute md:text-base pt-4 transition-all duration-500 ease-in ${open ? 'mt-0': 'mt-[-490px]'} md:mt-0`}>
                    <li className="my-5"><a className="flex gap-x-2 items-center duration-500 hover:text-purple hover:scale-105" href="#chat">
                        <i className="fa-regular text-lg fa-comment-dots"></i>Chat</a>
                    </li>
                    <li className="my-5"><a className="flex gap-x-3 items-center duration-500 hover:text-purple hover:scale-105" href="#docs">
                        <i className="fa-regular text-lg fa-file-lines"></i>Documentação</a>
                    </li>
                    <li className="my-5"><a className="flex gap-x-2 items-center duration-500 hover:text-purple hover:scale-105" href="#mais">
                        <i className="fa-regular text-lg fa-circle-question"></i>Saiba mais</a>
                    </li>  
                </ul>
            </div>
        </div>
    )
}