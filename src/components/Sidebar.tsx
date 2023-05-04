export const Sidebar = ()=>{
    return(
        <div className="bg-white h-full w-72 fixed left-0 pt-10 flex flex-col items-center">
            <img src="./RoboschLogoWithName.svg" />
            <ul className="font-fonte my-7 ">
                <li className="my-5"><a className="flex gap-x-2 items-center inline-block duration-500 hover:text-purple hover:scale-105" href="#chat">
                    <i className="fa-regular fa-comment-dots"></i>Chat</a>
                </li>
                <li className="my-5"><a className="flex gap-x-2 items-center inline-block duration-500 hover:text-purple hover:scale-105" href="#docs">
                    <i className="fa-regular fa-file-lines"></i>Documentação</a>
                </li>
                <li className="my-5"><a className="flex gap-x-2 items-center inline-block duration-500 hover:text-purple hover:scale-105" href="#mais">
                <i className="fa-regular fa-circle-question"></i>Saiba mais</a>
                </li>
            </ul>
        </div>
    )
}