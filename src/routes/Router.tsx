import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "../pages/error/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import IndexPage from "../pages/home/IndexPage";
import PrivateRouteDasboard from "./dashboard/PrivateRouteDasboard";
import DashboardLayout from "../layout/DashboardLayout";
import { routesDashboard } from "./dashboard/Routes";
import { HelmetProvider } from "react-helmet-async";


const helmetContext = {};

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            },
            // {
            //     path: '/login',
            //     element: <LoginPage />,
            // },
            // {
            //     path: '/register',
            //     element: <RegisterPage />,
            // },
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRouteDasboard>
                <DashboardLayout />
            </PrivateRouteDasboard>
        ),
        children: [
            ...routesDashboard.map(route => ({
                path: route.path,
                element: route.element
            })),
            ...routesDashboard.flatMap(route =>
                route.subMenuItems
                    ? route.subMenuItems.map(subRoute => ({
                        path: subRoute.path,
                        element: subRoute.element
                    }))
                    : []
            )
        ],
    },
    { path: "*", element: <ErrorPage /> }
]);

const Router = () => {
    return (
        <HelmetProvider context={helmetContext}>
            <RouterProvider router={router} />
        </HelmetProvider>
    )
}

export default Router