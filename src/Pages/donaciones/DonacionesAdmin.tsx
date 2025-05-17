
import { useEffect, useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

const DonacionesAdmin = () => {
  const [datos, setDatos] = useState<any[]>([]);
  const columnHelper = createColumnHelper<any>();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/6825f9d88a456b79669e5167/latest", {
          headers: {
            "X-Master-Key": "$2a$10$Kn1O5OTnfUNYLIxVBnQKvegY/b2FC2diA2SX7DVLQispv7.woMQV6",
          },
        });
        const data = await res.json();
        console.log("Datos:", data.record); // ← debug
        setDatos(data.record || []);
      } catch (error) {
        console.error("Error al cargar donaciones:", error);
      }
    };
    obtenerDatos();
  }, []);

  const columnas = useMemo(() => {
    if (datos.length === 0) return [];
    return Object.keys(datos[0]).map((key) =>
      columnHelper.accessor(key, {
        header: key.charAt(0).toUpperCase() + key.slice(1),
        cell: (info) => String(info.getValue() ?? ""),
      })
    );
  }, [datos]);

  const table = useReactTable({
    data: datos,
    columns: columnas,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className=" bg-amber-300 max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Donaciones Recibidas</h2>
      <div className="overflow-x-auto border rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-800 text-blue-800 font-semibold">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 border-b text-left">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonacionesAdmin;