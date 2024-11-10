import { BiBarChartAlt2 } from "react-icons/bi";
import IndexPage from "../../pages/dashboard/IndexPage";
import { MenuItem } from "../../types/DashboardInterface";




export const routesDashboard: MenuItem[] = [
    {
        path: "/dashboard",
        name: 'Dashboard',
        element: <IndexPage />,
        icon: <BiBarChartAlt2 className="item-icon" />,
    },
    // {
    //     name: 'Forms',
    //     icon: <BiEqualizer className="item-icon" />,
    //     subMenuItems: [
    //         { name: 'Input', path: '/dashboard/input', element: <InputPage /> },
    //         { name: 'InputValidate', path: '/dashboard/input-validate', element: <InputValidate /> },
    //         { name: 'InputCustom', path: '/dashboard/input-custom', element: <InputCustom /> },
    //         { name: 'InputFile', path: '/dashboard/input-file', element: <InputFile /> },
    //         { name: 'Checkbox', path: '/dashboard/checkbox', element: <CheckboxPage /> },
    //         { name: 'Radio', path: '/dashboard/radio', element: <RadioPage /> },
    //         { name: 'Toggle', path: '/dashboard/toggle', element: <TogglePage /> },
    //     ],
    // },
    // {
    //     path: "/dashboard/datatable",
    //     name: 'Datatable',
    //     element: <DatatablePage />,
    //     icon: <BiTable className="item-icon" />,
    // },
];