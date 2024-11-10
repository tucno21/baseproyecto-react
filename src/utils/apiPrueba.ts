import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getValue } from './loscalStorage';


const apiUrl = import.meta.env.VITE_API_URL;
const TOKEN_KEY = 'tokenaplicacion';

const apiPrueba: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para las solicitudes
apiPrueba.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getValue(TOKEN_KEY); // Obtener el token en cada solicitud

        if (token) {
            config.headers['x-token'] = `${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);


// Interceptor para las respuestas
apiPrueba.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            switch (error.response.status) {
                case 401:
                    // Manejar error de autenticación
                    // Por ejemplo: redirigir al login
                    console.error('Error de autenticación');
                    break;
                case 403:
                    // Manejar error de autorización
                    console.error('No tiene permisos para realizar esta acción');
                    break;
                case 404:
                    console.error('Recurso no encontrado');
                    break;
                case 500:
                    console.error('Error interno del servidor');
                    break;
                default:
                    console.error('Error en la solicitud:', error.message);
            }
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor');
        } else {
            // Algo sucedió en la configuración de la solicitud
            console.error('Error al configurar la solicitud:', error.message);
        }

        return Promise.reject(error);
    }
);

export default apiPrueba;


