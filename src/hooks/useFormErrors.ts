import { useState } from 'react';

// Interfaz para definir la forma que deben tener los errores
export type FormErrors<T> = {
    [K in keyof T]?: string;
};

// Interfaz para el retorno del hook
export interface UseFormErrorsReturn<T> {
    errors: FormErrors<T>;
    setErrors: (errors: FormErrors<T>) => void;
    resetErrors: () => void;
    clearError: (name: keyof T) => void;
    setError: (name: keyof T, message: string) => void;
}

// Hook con tipado genérico
export const useFormErrors = <T extends Record<string, any>>(): UseFormErrorsReturn<T> => {
    const [errors, setErrors] = useState<FormErrors<T>>({});

    const resetErrors = () => {
        setErrors({});
    };

    const clearError = (name: keyof T) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    };

    const setError = (name: keyof T, message: string) => {
        setErrors(prev => ({
            ...prev,
            [name]: message
        }));
    };

    return {
        errors,
        setErrors,
        resetErrors,
        clearError,
        setError
    };
};