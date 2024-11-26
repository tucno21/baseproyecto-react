import { useState, ChangeEvent, DragEvent } from 'react';
import { AiOutlineCloudUpload, AiOutlineDelete } from 'react-icons/ai';
import { FormErrors } from '../../hooks/useFormErrors';

interface ImgUploaderProps<T> {
    title?: string;
    setImagenFile: React.Dispatch<React.SetStateAction<File | null>>;
    imagenUrl: string | null;
    setErrors: (errors: FormErrors<T>) => void;
    error: string | undefined;
    fieldName: keyof T; // Nombre del campo en el estado `Errors`
}

const ImgUploader = <T extends Record<string, any>>({
    title,
    setImagenFile,
    imagenUrl,
    setErrors,
    error,
    fieldName
}: ImgUploaderProps<T>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                // setErrors(prevErrors => ({ ...prevErrors, [fieldName]: 'Cargue un archivo de imagen válido.' }));
                const newErrors = { [fieldName]: 'Cargue un archivo de imagen válido.' } as FormErrors<T>;
                setErrors(newErrors);
                setImagenFile(null);
                return;
            }
            if (file.size > 2000000) { // 2MB en bytes
                // setErrors(prevErrors => ({ ...prevErrors, [fieldName]: 'La imagen debe pesar máximo 2MB.' }));
                const newErrors = { [fieldName]: 'La imagen debe pesar máximo 2MB.' } as FormErrors<T>;
                setErrors(newErrors);
                setImagenFile(null);
                return;
            }
            // setErrors(prevErrors => ({ ...prevErrors, [fieldName]: undefined }));
            setErrors({ [fieldName]: undefined } as FormErrors<T>);
            setLoading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagenFile(file);
                setLoading(false);
            };
            reader.readAsDataURL(file);
        } else {
            setImagenFile(null);
        }
    };

    const handleRemoveImage = () => {
        setImagenFile(null);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                // setErrors(prevErrors => ({ ...prevErrors, [fieldName]: 'Cargue un archivo de imagen válido.' }));
                const newErrors = { [fieldName]: 'Cargue un archivo de imagen válido.' } as FormErrors<T>;
                setErrors(newErrors);
                setImagenFile(null);
                return;
            }
            if (file.size > 2000000) { // 2MB en bytes
                // setErrors(prevErrors => ({ ...prevErrors, [fieldName]: 'La imagen debe pesar máximo 2MB.' }));
                const newErrors = { [fieldName]: 'La imagen debe pesar máximo 2MB.' } as FormErrors<T>;
                setErrors(newErrors);
                setImagenFile(null);
                return;
            }
            // setErrors(prevErrors => ({ ...prevErrors, [fieldName]: undefined }));
            setErrors({ [fieldName]: undefined } as FormErrors<T>);
            setLoading(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagenFile(file);
                setLoading(false);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-sm mx-auto p-4 border border-gray-300 rounded shadow-md bg-white">
            <div
                className={`flex flex-col items-center p-4 border-2 border-dashed rounded ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                    id={`image-upload-${String(fieldName)}`}
                />
                <label htmlFor={`image-upload-${String(fieldName)}`} className="cursor-pointer flex flex-col items-center text-blue-500 hover:text-blue-700 mb-4">
                    <AiOutlineCloudUpload size={48} />
                    <span className="mt-2 text-sm">{title || 'Haz clic o arrastra y suelta para una imagen'}</span>
                </label>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                {loading && <p className="text-blue-500 text-sm mb-4">Cargando...</p>}
                {imagenUrl && (
                    <div className="relative">
                        <img
                            src={imagenUrl || ''}
                            alt="Uploaded"
                            // className="max-w-full h-auto rounded shadow-md mb-4"
                            className="w-32 rounded shadow-md mb-4"
                        />
                        <button
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 focus:outline-none"
                        >
                            <AiOutlineDelete size={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImgUploader;
