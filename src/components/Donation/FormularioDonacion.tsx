
const FormularioDonacion = () => {
  return (
    <section className="my-12 px-6 text-gray-800">
{/* Métodos de Donación y Formulario */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Métodos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Métodos de Donación</h3>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-2 px-4 border">Tipo de donación</th>
                  <th className="py-2 px-4 border">Método</th>
                  <th className="py-2 px-4 border">Detalles</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="odd:bg-gray-100">
                  <td className="py-2 px-4 border">Monetaria</td>
                  <td className="py-2 px-4 border">SINPE Móvil</td>
                  <td className="py-2 px-4 border">6000-XXXX (Cuenta ASONIDEP)</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="py-2 px-4 border">Monetaria</td>
                  <td className="py-2 px-4 border">Transferencia bancaria</td>
                  <td className="py-2 px-4 border">Cuenta BCR XXX-XXXXXXX</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="py-2 px-4 border">En especie</td>
                  <td className="py-2 px-4 border">Electrodomésticos, etc.</td>
                  <td className="py-2 px-4 border">Coordinar con Fernanda</td>
                </tr>
                <tr className="odd:bg-gray-100">
                  <td className="py-2 px-4 border">Junta de Protección</td>
                  <td className="py-2 px-4 border">Aportes institucionales</td>
                  <td className="py-2 px-4 border">Ya integrados</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Formulario */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4">Formulario de Donación</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Nombre completo</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Teléfono</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Correo electrónico</label>
                <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Tipo de donación</label>
                <select className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm">
                  <option>Monetaria</option>
                  <option>En especie</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Método</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium">Monto o detalle</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded shadow-sm" />
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Acepto que esta donación es para fortalecer ASONIDEP.</span>
                </label>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow">
                Enviar mi donación
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
export default FormularioDonacion;