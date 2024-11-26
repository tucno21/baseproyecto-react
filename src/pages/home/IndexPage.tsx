import { Link } from "react-router-dom"
import Input from "../../components/basic/Input"
import useForm from "../../hooks/useForm"
import { useFormErrors } from "../../hooks/useFormErrors";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import errorResponse from "../../utils/errorResponse";
import apiPrueba from "../../utils/apiPrueba";

interface FormErrors {
    nombre?: string;
    apellido?: string;
    correo?: string;
    telefono?: string;
}

const IndexPage = () => {

    const { values, handleChange } = useForm({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
    })
    const { errors, setErrors, resetErrors } = useFormErrors<FormErrors>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        resetErrors();

        // Validación mejorada
        let tempErrors: FormErrors = {};
        if (values.nombre === '') tempErrors.nombre = 'El campo nombre es requerido';
        if (values.apellido === '') tempErrors.apellido = 'El campo apellido es requerido';
        if (values.correo === '') tempErrors.correo = 'El campo correo es requerido';
        if (values.telefono === '') tempErrors.telefono = 'El campo telefono es requerido';

        // Si hay errores, se deben mostrar
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }

        // Lógica para enviar la solicitud según el tipo de modal
        sendRequest('post', '/admin/user/create', values);
    }

    const sendRequest = async (method: 'post' | 'put', url: string, data: any) => {
        try {
            const response = await apiPrueba[method](url, data);
            console.log(response.data);
        } catch (error: any) {
            errorResponse(error.response.data, 'nombre', setErrors);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">

            <Link to="/dashboard" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">Dashboard</Link>

            <form onSubmit={handleSubmit} >
                <div className="flex flex-col gap-y-4 mt-6">
                    <Input icon={<FaRegCircleUser />} label="Nombre" type="text" name="nombre" value={values.nombre} onChange={handleChange} placeholder="Tu nombre" error={errors.nombre} />
                    <Input icon={<IoPersonOutline />} label="Apellido" type="text" name="apellido" value={values.apellido} onChange={handleChange} placeholder="Tu apellido" error={errors.apellido} />
                    <Input icon={<MdOutlineMailOutline />} label="Correo" type="email" name="correo" value={values.correo} onChange={handleChange} placeholder="Tu correo" error={errors.correo} />
                    <Input icon={<MdOutlineLocalPhone />} label="Telefono" type="number" name="telefono" value={values.telefono} onChange={handleChange} placeholder="Tu telefono" error={errors.telefono} />
                </div>

                <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mt-6">Prueba</button>
            </form>
        </div>
    )
}

export default IndexPage