interface Props{
    children:React.ReactNode
}

export function SubTitulo({children}:Props){
    return <div className="w-full flex justify-center">

<h2 className="text-lg font-black">{children}</h2>
    </div>
}