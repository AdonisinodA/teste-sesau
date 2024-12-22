import { useState } from "react";

interface Props{
    onChange:(checked:boolean)=>void
    label:string
}

export function CheckBox ({onChange, label}:Props) {
    const [checked, setChecked] = useState(false);
  
    return (
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => 
          {
           setChecked(!checked)
              onChange(!checked)
          }
        }
          className="hidden"
        />
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-md border-2 ${
            checked
              ? "bg-blue-500 border-blue-500"
              : "bg-white border-gray-300"
          } transition-colors duration-200`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <span className="text-gray-700">{label}</span>
      </label>
    );
  };
  
  