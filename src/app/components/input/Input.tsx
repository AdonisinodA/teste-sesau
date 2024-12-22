import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label:string
}

export function Input ({ label, ...res}:Props)  {
    const {register} = useFormContext()

  return (
    <div className="relative w-full mt-6">
      <input
        type="text"
        className="block bg-white w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0 peer"
        {...res}
        {...register(res.name ?? '')}
      />
      <label
        className={`absolute -top-5 text-sm peer-focus:text-blue-500`}
      >
        {label}
      </label>
    </div>
  );
};
