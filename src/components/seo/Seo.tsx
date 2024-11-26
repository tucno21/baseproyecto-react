import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom";


interface SeoProps {
    title: string;
    description: string;
    keywords: string;
    ogTitle?: string;  // Opcional porque tiene valor por defecto
    ogDescription?: string;  // Opcional porque tiene valor por defecto
    ogImage?: string | null;  // Opcional
    canonical?: string | null;  // Opcional
}

// Ajusta según tu configuración
export const getBaseUrl = () => {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    // Elimina '/api' del final de la URL si existe
    return apiUrl.replace(/\/api$/, '');
};

const Seo = ({ title,
    description,
    keywords,
    ogTitle = title,
    ogDescription = description,
    ogImage = null,
    canonical = null
}: SeoProps) => {

    const location = useLocation();

    // Construir la URL canónica
    const canonicalUrl = canonical || `${getBaseUrl()}${location.pathname}`;

    return (
        <Helmet prioritizeSeoTags>
            {/* Títulos y Meta descripción básicos */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* URL Canónica */}
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    )
}

export default Seo