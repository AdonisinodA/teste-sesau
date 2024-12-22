import React from "react"

interface Props{
    children:React.ReactNode
}

export function ContainerConteudo({children}:Props){
    return <div className=" rounded-md overflow-hidden shadow-lg bg-white w-[80vw] p-3 ">
        {children}
    </div>
}