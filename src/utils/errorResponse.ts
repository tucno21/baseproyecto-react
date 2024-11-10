interface ErrorResponse {
    status: string;
    message: string;
    errors?: { [key: string]: string }; // Errores específicos por campo

}

function errorResponse(data: ErrorResponse, fieldname: string, setErrors: (errors: { [key: string]: string }) => void): void {
    if (data) {
        const { status, message, errors } = data;

        if (status === 'error') {
            if (errors) {
                // Establecer errores específicos de campo
                setErrors(errors);
            } else {
                // Establecer mensaje de error en el campo específico
                setErrors({
                    [fieldname]: message
                });
            }
        }
    } else {
        // Error de conexión, establecer un mensaje por defecto
        setErrors({
            [fieldname]: 'Error de conexión. Por favor, intente nuevamente'
        });
    }
}

export default errorResponse