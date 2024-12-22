interface Props{
    children:React.ReactNode
}

export function Titulo({children}:Props){
    return  <div className="w-full flex justify-center">
    <h1 className="text-xl font-black">{children}</h1>
        </div>
}