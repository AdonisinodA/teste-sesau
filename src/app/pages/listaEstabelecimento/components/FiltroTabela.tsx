import React from "react";

interface Props {
  filters: {
    codigoCnes: string;
    nomeFantasia: string;
    cnpj: string;
  };
  onFilterChange: (name: string, value: string) => void;
}

export function FiltroTabela({ filters, onFilterChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="mb-4 flex space-x-4 text-black">
      <input
        type="text"
        name="codigoCnes"
        value={filters.codigoCnes}
        onChange={handleChange}
        placeholder="Filtrar por Código CNES"
        className="border p-2 rounded bg-white"
      />
      <input
        type="text"
        name="nomeFantasia"
        value={filters.nomeFantasia}
        onChange={handleChange}
        placeholder="Filtrar por Nome Fantasia"
        className="border p-2 rounded bg-white"
      />
      <input
        type="text"
        name="cnpj"
        value={filters.cnpj}
        onChange={handleChange}
        placeholder="Filtrar por CNPJ"
        className="border p-2 rounded bg-white"
      />
    </div>
  );
}


