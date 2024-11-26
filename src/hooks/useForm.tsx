import { useState, ChangeEvent } from "react";

type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

// T es el tipo genérico que definirá la estructura del formulario
export interface UseFormReturn<T extends Record<string, any>> {
    values: T;
    handleChange: (event: InputChangeEvent) => void;
    updateFormValue: (name: keyof T, value: T[keyof T]) => void;
    setFormValues: (values: Partial<T>) => void;
    resetForm: () => void;
}

// El hook ahora acepta un tipo genérico T
const useForm = <T extends Record<string, any>>(initialForm: T): UseFormReturn<T> => {
    //estado de almacenar name:value del formulario
    const [values, setValues] = useState<T>(initialForm);

    //funcion que maneja el evento de asignar value a name
    // Manejador para cambios en los inputs individuales
    const handleChange = ({ target }: InputChangeEvent) => {
        const { name, value } = target;
        // Verificamos que el name existe en T
        if (name in values) {
            setValues({
                ...values,
                [name]: value
            });
        }
    };

    //funcion que asigna el valor de name:value a name:value del formulario
    const updateFormValue = (name: keyof T, value: T[keyof T]) => {
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //funcion que asigna multiples name:value
    const setFormValues = (newValues: Partial<T>) => {
        setValues(prevState => ({
            ...prevState,
            ...newValues
        }));
    };

    //funcion que limpia el formulario
    const resetForm = () => {
        setValues(initialForm);
    };

    return {
        values, // Los valores actuales del formulario.
        handleChange, // Función que maneja los cambios en los campos del formulario.
        updateFormValue, // Función para actualizar un campo específico del formulario.
        setFormValues, // Función para establecer múltiples valores a la vez.
        resetForm, // Función para restablecer el formulario a su estado inicial.
    };
};

export default useForm;