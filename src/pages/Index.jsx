import { useLoaderData} from 'react-router-dom'
import {obtenerUsuario } from '../api/Usuario.jsx';

export async function loader() {
    const usuario = await obtenerUsuario();
    return usuario;
}

function Index() {

    const datosUsuario = useLoaderData();
    const { email, firstName, lastName } = datosUsuario;

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Datos del Usuario</h1>
            <p className="mt-3">Estos son sus datos (Atributos)</p>

            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className='bg-blue-800 text-white'>
                <tr>
                    <th className='p-2'>Usuario</th>
                    <th className='p-2'>Nombre Completo</th>
                    <th className='p-2'>Grupo</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='p-6 text-center space-y-2'>
                        <p className="text-2xl text-gray-800">{email}</p>
                    </td>
                    <td className='p-6 text-center'>
                        <p className="text-gray-600">
                            <span className="text-gray-800 uppercase font-bold">Email:</span> {`${firstName} ${lastName}`}
                        </p>
                    </td>
                    <td className='p-6 flex justify-evenly'>
                        <p className="text-gray-600">
                            <span className="text-gray-800 uppercase font-bold">Grupo:</span> {"Everyone"}
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Index