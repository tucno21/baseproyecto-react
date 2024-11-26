
interface DownloadFile {
    data: BlobPart;
    fileName: string;
    fileExtension: 'excel' | 'pdf' | 'word' | 'image';
}

const downloadFile = ({ data, fileName, fileExtension }: DownloadFile) => {
    let fileType: string;
    // Determinar el tipo MIME según la extensión
    switch (fileExtension.toLowerCase()) {
        case 'excel':
            fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            break;
        case 'pdf':
            fileType = 'application/pdf';
            break;
        case 'word':
            fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;
        case 'image':
            fileType = 'image/png'; // Puedes cambiar a otro formato de imagen como JPEG si lo prefieres
            break;
        default:
            throw new Error('Tipo de archivo no soportado');
    }

    // Crear el Blob con el tipo MIME determinado
    const blob = new Blob([data], { type: fileType });
    const url = window.URL.createObjectURL(blob);

    // Crear el enlace de descarga
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);

    // Añadir al DOM, ejecutar clic y eliminar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Limpiar el URL
    window.URL.revokeObjectURL(url);
};

export default downloadFile