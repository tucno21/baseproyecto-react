import { useState, useEffect, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsChevronDown, BsArrowBarLeft } from 'react-icons/bs';
import { useDashboardStore } from '../../context/useDashboardStore';
import { MenuItem } from '../../types/DashboardInterface';


// Definición de las propiedades del componente Sidebar
interface SidebarProps {
    menuItems: MenuItem[];
    namePanel: string;
    iconPanel: React.ReactNode;
}

export const Sidebar = ({ menuItems, namePanel, iconPanel }: SidebarProps) => {

    // Uso del contexto para acceder a datos y funciones del dashboard
    const sidebarOpen = useDashboardStore((state) => state.sidebarOpen);
    const sidebarIcon = useDashboardStore((state) => state.sidebarIcon);
    const toggleSidebarOpen = useDashboardStore((state) => state.toggleSidebarOpen);
    const setSidebarIcon = useDashboardStore((state) => state.setSidebarIcon);

    // Estado para controlar la visibilidad de los submenús
    const [showSubmenus, setShowSubmenus] = useState<boolean[]>(menuItems.map(() => false));

    // Estado para controlar el tamaño de la barra lateral
    const [sidebarFull, setSidebarFull] = useState(false);

    // Obtiene la ubicación actual de la ruta
    const location = useLocation();
    // console.log(location.pathname);



    // Efecto para verificar si un submenú debe estar abierto
    useEffect(() => {
        // Si sidebarIcon es verdadero, cierra todos los submenús
        if (sidebarIcon) {
            setShowSubmenus(menuItems.map(() => false));
        } else {
            // Encuentra el índice del submenú activo en base a la ubicación actual de la ruta
            const activeSubmenuIndex = menuItems.findIndex(
                (menuItem) => menuItem.subMenuItems?.some(subMenuItem => subMenuItem.path === location.pathname)
            );

            // Verifica si se encontró un submenú activo
            if (activeSubmenuIndex !== -1) {
                // Actualiza el estado para mostrar los submenús
                setShowSubmenus((prev) => {
                    // Crea una nueva copia del estado anterior
                    const newSubmenus = [...prev];
                    // Marca como activo el submenú correspondiente al índice encontrado
                    newSubmenus[activeSubmenuIndex] = true;
                    // Retorna la nueva copia del estado actualizado
                    return newSubmenus;
                });
            }
        }
    }, [location.pathname, menuItems, sidebarIcon]);


    // Función para manejar el clic en los elementos de clase "dropdown"
    const handleDropdownClick = (index: number, hasSubmenu: boolean | undefined) => {
        if (!hasSubmenu) {
            // Si el elemento del menú no tiene submenú, cierra todos los submenús abiertos
            setShowSubmenus(menuItems.map(() => false));
        } else {
            setShowSubmenus((prev) => {
                const newSubmenus = [...prev];
                // Si sidebarIcon es verdadero, siempre cierra el submenú
                if (sidebarIcon) {
                    newSubmenus[index] = false;
                } else {
                    // Invierte el estado del submenú en el índice dado (si ya está abierto, se cierra, y viceversa)
                    newSubmenus[index] = !newSubmenus[index];

                    // Si se está abriendo un nuevo submenú, cierra los otros submenús
                    if (newSubmenus[index]) {
                        for (let i = 0; i < newSubmenus.length; i++) {
                            if (i !== index) {
                                newSubmenus[i] = false;
                            }
                        }
                    }
                }
                return newSubmenus;
            });
        }
    };

    // Función para manejar el evento de pasar el ratón sobre la barra lateral
    const mouseOver = () => {
        const navList = document.querySelector('.nav-list');
        const sidebar = navList?.parentElement?.parentElement;
        if (sidebar?.classList.contains("sidebar-3")) {
            setSidebarIcon(false);
            setSidebarFull(true);
        }
    }
    // Función para manejar el evento de quitar el ratón de la barra lateral
    const mouseLeave = () => {
        const navList = document.querySelector('.nav-list');
        const sidebar = navList?.parentElement?.parentElement;
        if (sidebar?.classList.contains("sidebar-15") && sidebarFull) {
            setSidebarIcon(true);
            setSidebarFull(false);
        }
    }

    return (
        <div className={`sidebar ${sidebarOpen ? '' : 'sidebar-phone'} ${sidebarIcon ? 'sidebar-3' : 'sidebar-15'}`}>
            <div className="sidebar-content">
                {/* LOGO */}
                <div className="sidebar-logo">
                    {iconPanel}
                    <span className={`sidebar-logo-name ${sidebarIcon ? 'hidden' : ''}`}>{namePanel}</span>
                </div>


                {/* NAVIGATOR */}
                <ul className="nav-list" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                    {menuItems.map((menuItem, index) => (
                        <Fragment key={index}>
                            {menuItem.subMenuItems ? (
                                <li key={index} className={`nav-item-dropdown ${showSubmenus[index] ? 'active' : ''}`}>
                                    <div className="link-item-dropdown" onClick={() => handleDropdownClick(index, true)}>
                                        {menuItem.icon}
                                        <span className={`link-name ${sidebarIcon ? 'hidden' : ''}`}>{menuItem.name}</span>
                                        <BsChevronDown className={`arrow ${sidebarIcon ? 'hidden' : ''} ${showSubmenus[index] ? 'rotate-0' : '-rotate-90'}`} />
                                    </div>
                                    <ul className={`sub-menu ${showSubmenus[index] ? '' : 'sm-hidden'}`}>
                                        {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                            <li key={subIndex} className={`sub-menu-item ${location.pathname === subMenuItem.path ? 'active' : ''}`}>
                                                <Link to={subMenuItem.path} onClick={toggleSidebarOpen}>{subMenuItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={index} className={`nav-item ${location.pathname === menuItem.path ? 'active' : ''}`}>
                                    <Link to={menuItem.path!} className={`link-item`} onClick={() => { handleDropdownClick(index, false); toggleSidebarOpen(); }}>
                                        {menuItem.icon}
                                        <span className={`link-name ${sidebarIcon ? 'hidden' : ''}`}>{menuItem.name}</span>
                                    </Link>
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ul>
            </div>
            {/* CLOSE SMARTPHONE */}
            <div className="sidebar-close" onClick={toggleSidebarOpen}>
                {/* sidebar-close */}
                {/* <i className="bi bi-box-arrow-in-left"></i> */}
                <BsArrowBarLeft />
            </div>
        </div>
    )
}
