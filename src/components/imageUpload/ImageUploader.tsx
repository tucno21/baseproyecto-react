import React from 'react';
import fondo from "./../../assets/fondo.png";
import { FormErrors } from '../../hooks/useFormErrors';

interface ImageUploaderProps<T> {
    title?: string;
    setImagenFile: React.Dispatch<React.SetStateAction<File | null>>;
    imagenUrl: string | null;
    setErrors: (errors: FormErrors<T>) => void;
    error: string | undefined;
    fieldName: keyof T;
}

const ImageUploader = <T extends Record<string, any>>({
    title = "Cargar Foto",
    setImagenFile,
    imagenUrl,
    setErrors,
    error,
    fieldName
}: ImageUploaderProps<T>) => {

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Limpiamos el error del campo
        setErrors({ [fieldName]: undefined } as FormErrors<T>);

        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];

            const newErrors: FormErrors<T> = {} as FormErrors<T>;
            if (img.type.split('/')[0] !== 'image') {
                newErrors[fieldName] = 'Solo se permiten imágenes';
            }
            if (img.size > 2000000) {
                newErrors[fieldName] = 'La imagen debe pesar máximo 2MB';
            }

            if (Object.keys(newErrors).length > 0) {
                setImagenFile(null);
                setErrors(newErrors);
                return;
            }

            setImagenFile(img);
        } else {
            setImagenFile(null);
        }
    };

    return (
        <div className={`input-photo-border ${error ? 'border-red-600' : ''}`}>
            <div className="space-y-1 input-photo-center">
                <div className="input-photo-center">
                    <label htmlFor={`image-${String(fieldName)}`} className="input-photo-label">
                        <span>{title}</span>
                        <input
                            id={`image-${String(fieldName)}`}
                            name={`image-${String(fieldName)}`}
                            accept="image/*"
                            onChange={handleImageChange}
                            type="file"
                            className="sr-only"
                        />
                    </label>
                </div>
                <div className="input-photo-center">
                    <img src={imagenUrl || fondo} alt={title} className="w-32" />
                </div>
                <p className={`text-xs ${error ? 'text-red-500' : 'text-gray-500'} `}>
                    {error ? error : 'PNG, JPG, GIF hasta 1 MB'}
                </p>
            </div>
        </div>
    );
};

export default ImageUploader;