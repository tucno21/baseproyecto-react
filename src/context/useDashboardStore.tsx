import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DashboardState {
    sidebarIcon: boolean;
    sidebarOpen: boolean;
    subMenuOpen: boolean;
    toggleSidebar: () => void;
    setSidebarIcon: (value: boolean) => void;
    toggleSidebarOpen: () => void;
    toggleSubMenu: () => void;
}

export const useDashboardStore = create<DashboardState>()(
    persist(
        (set) => ({
            sidebarIcon: false,
            sidebarOpen: false,
            subMenuOpen: false,
            toggleSidebar: () => set((state) => ({ sidebarIcon: !state.sidebarIcon })),
            setSidebarIcon: (value: boolean) => set({ sidebarIcon: value }),
            toggleSidebarOpen: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
            toggleSubMenu: () => set((state) => ({ subMenuOpen: !state.subMenuOpen })),
        }),
        {
            name: 'dashboard-storage',
        }
    )
);

// export default DashboardState;