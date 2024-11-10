import { useDashboardStore } from '../../context/useDashboardStore';


export const PageContainer = ({ children }: any) => {

    const sidebarIcon = useDashboardStore((state) => state.sidebarIcon);

    return (
        <div className={`container-page  ${sidebarIcon ? 'page-icon' : 'page-not-icon'}`}>
            {children}
        </div>
    )
}
