import { Navigate, useLocation } from "react-router-dom";


interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRouteDasboard = ({ children }: PrivateRouteProps) => {
    const user = true
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRouteDasboard