import { useNavigate } from 'react-router-dom';
import logo from '../assets/sesau.png'

export function App(){
    const navigate = useNavigate();

    const handleRedirect = () => {
      navigate("/cnes/estabelecimentos");
    };
    return <div className='w-screen h-screen flex justify-center items-center bg-primary'>
        <div className='flex flex-col '>
        <span className='text-2xl text-center'>Bem-vindo</span>
            <img src={logo} width={300} />
            <button onClick={handleRedirect} className="bg-white text-gray-800 p-2 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
                Entrar
            </button>
        </div>
     
    </div>
}