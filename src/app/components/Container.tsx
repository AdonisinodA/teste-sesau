import React from "react"

interface Props{
    children:React.ReactNode
}

export  function Container({children}:Props){
    return <div className="flex flex-col justify-center ">
        {children}
    </div>
}