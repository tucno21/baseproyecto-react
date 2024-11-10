import { Outlet } from "react-router-dom"
import { BsQrCode } from "react-icons/bs";
import { MenuItem } from "../types/DashboardInterface";
import { routesDashboard } from "../routes/dashboard/Routes";
import { Sidebar } from "../components/dashboard/Sidebar";
import { PageContainer } from "../components/dashboard/PageContainer";
import NavbarContainer from "../components/dashboard/NavbarContainer";


const DashboardLayout = () => {

    const menuItems: MenuItem[] = routesDashboard


    const signout = () => {
        alert('Signout')
    }

    return (
        <div className="h-screen flex">
            <Sidebar menuItems={menuItems} namePanel={"Dashboard"} iconPanel={<BsQrCode />} />
            <PageContainer>
                <NavbarContainer username={'carlos'} rol={'admin'} signout={signout} />
                <div className="mt-14 bg-panel-page">
                    <Outlet />
                </div>
            </PageContainer>
        </div>
    )
}

export default DashboardLayout