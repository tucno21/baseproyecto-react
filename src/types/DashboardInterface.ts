export interface MenuItem {
    path?: string;
    name: string;
    element?: React.ReactNode;
    icon: React.ReactNode;
    subMenuItems?: SubMenuItem[];
}

export interface SubMenuItem {
    name: string;
    path: string;
    element: React.ReactNode;
}