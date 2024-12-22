/* eslint-disable @typescript-eslint/no-explicit-any */

import { Estabelecimento } from "../types/estabelecimento";

interface TableProps {
  columns: string[][];
  data: { [key: string]: any }[];
  onClickRow:(row:Estabelecimento)=> void
}

export default function Tabela({ columns, data, onClickRow }: TableProps) {
  return (
    <div className="overflow-hidden">
      <table className="w-[80vw] table-auto ">
        <thead className="bg-gray-100">
          <tr>
            {columns[1].map((column, index) => (
              <th key={index} className="px-4 py-2 text-left font-semibold text-gray-700">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}  className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-200"} hover:scale-[101%] hover:cursor-pointer hover:bg-blue-200`}>
              {columns[0].map((column, idx) => (
                <td key={idx} onClick={()=>{
                  onClickRow(row as Estabelecimento)
                }} className="px-4 py-2 text-gray-600">
                  {row[column] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


