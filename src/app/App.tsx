import logo from '../assets/sesau.png'

export function App(){

    return <div className='w-screen h-screen flex justify-center items-center bg-[#0086CF]'>
        <div className='flex flex-col items-center'>
            <img src={logo} width={350} />
            <span className='text-2xl '>Bem-vindo</span>
        </div>
     
    </div>
}