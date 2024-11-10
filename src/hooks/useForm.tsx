import { useState, ChangeEvent } from "react";

interface FormState {
    [key: string]: any;
}

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

interface returForm {
    [key: string]: any;
    handleChange: (event: InputChangeEvent) => void;
    updateFormValue: (name: string, value: any) => void;
    setFormValues: (values: FormState) => void;
    resetForm: () => void;
}

//recibe un objeto por defecto
const useForm = (initialForm: FormState = {}): returForm => {

    //eatdo de almacenar name:value del formulario
    const [values, setValues] = useState<FormState>(initialForm);

    //funcion que maneja el evento de asignar value a name
    // Manejador para cambios en los inputs individuales
    const handleChange = ({ target }: InputChangeEvent) => {
        const { name, value } = target;
        setValues({
            //destructuring
            ...values,
            //buscamos el name del input y le asignamos el valor
            [name]: value
        })
    }

    //funcion que asigna el valor de name:value a name:value del formulario
    const updateFormValue = (name: string, value: any) => {
        setValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    //funcion que asigna multiples name:value
    const setFormValues = (values: FormState) => {
        setValues((prevState) => ({
            ...prevState,
            ...values
        }));
    }

    //funcion que limpia el formulario
    const resetForm = () => {
        setValues(initialForm);
    }

    return {
        values, // Los valores actuales del formulario.
        handleChange, // Función que maneja los cambios en los campos del formulario.
        updateFormValue, // Función para actualizar un campo específico del formulario.
        setFormValues, // Función para establecer múltiples valores a la vez.
        resetForm, // Función para restablecer el formulario a su estado inicial.
    }
}
export default useForm