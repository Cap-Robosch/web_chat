import { Sidebar } from "./components/Sidebar"

const DocumentationPage = ()=>{
    return(
        <main>
            <div className="w-full z-50 fixed h-1.5 bg-gradient-to-r from-purple to-pink"></div>
            <Sidebar page="Doc" />
        <div className="h-screen w-full flex justify-center items-center">
            
            <p>This page is in development! I'm sorry :(</p>
        </div>
        </main>
    )
}

export default DocumentationPage