import { useState } from 'react';

// Hook modificado para aceptar propiedades opcionales
export const useFormErrors = <T extends { [K: string]: string | undefined }>() => {
    const [errors, setErrors] = useState<T>({} as T);

    const resetErrors = () => {
        setErrors({} as T);
    };

    const clearError = (name: keyof T) => {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    };

    return {
        errors,
        setErrors,
        resetErrors,
        clearError
    };
};
