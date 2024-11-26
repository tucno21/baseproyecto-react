import React, { useState, useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Importa el ícono de eliminación
import { FormErrors } from '../../hooks/useFormErrors';


interface FotoUploadProps<T> {
    title?: string;
    setImagenFile: React.Dispatch<React.SetStateAction<File | null>>;
    imagenUrl: string | null;
    setErrors: (errors: FormErrors<T>) => void;
    error: string | undefined;
    fieldName: keyof T;
}

const FotoUpload = <T extends Record<string, any>>({
    title = "Cargar Foto",
    setImagenFile,
    imagenUrl,
    setErrors,
    error,
    fieldName
}: FotoUploadProps<T>) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            handleFile(file);
            e.dataTransfer.clearData();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            handleFile(file);
        }
    };

    const handleFile = (file: File) => {
        if (file.type.startsWith('image/')) {
            setImagenFile(file);
            setErrors({ [fieldName]: undefined } as FormErrors<T>); // Conversión explícita;
        } else {
            setErrors({ [fieldName]: 'Archivo no válido. Por favor, sube una imagen.' } as FormErrors<T>);
        }
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleRemoveImage = () => {
        setImagenFile(null);
        setErrors({ [fieldName]: undefined } as FormErrors<T>); // Conversión explícita
    };

    return (
        <div className="flex flex-col items-center">
            {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
            <div
                className={`relative w-full p-4 border-2 border-dashed rounded-lg transition-colors ${dragActive ? 'border-blue-500' : 'border-gray-300'
                    } ${error ? 'border-red-500' : ''} text-center cursor-pointer`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleChange}
                />
                {imagenUrl ? (
                    <div className="relative">
                        <img src={imagenUrl} alt="Preview" className="max-h-64 mx-auto" />
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
                        >
                            <FaTrashAlt className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div className="text-gray-500">
                        <p>Haz clic o arrastra una imagen</p>
                    </div>
                )}
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </div>
    );
};

export default FotoUpload;
