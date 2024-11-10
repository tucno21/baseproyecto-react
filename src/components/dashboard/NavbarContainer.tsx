import React, { useEffect, useRef, useState } from 'react';
import { BsGrid1X2, BsPersonCircle, BsPerson, BsBoxArrowRight } from 'react-icons/bs';
import { useDashboardStore } from '../../context/useDashboardStore';


interface NavbarContainerProps {
    username: string;
    rol: string;
    signout: () => void;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ username, rol, signout }) => {

    const [hidden, setHidden] = useState(true);
    const sidebarIcon = useDashboardStore((state) => state.sidebarIcon);
    const toggleSidebar = useDashboardStore((state) => state.toggleSidebar);
    const toggleSidebarOpen = useDashboardStore((state) => state.toggleSidebarOpen);

    const menuUserRef = useRef<HTMLDivElement>(null);

    const handleHidden = () => {
        setHidden(!hidden);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuUserRef.current && !menuUserRef.current.contains(event.target as Node)) {
                setHidden(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`navbar-container ${sidebarIcon ? 'nc-3' : 'nc-15'}`}>
            <div className="menuBar" >
                <BsGrid1X2 className="menu-phone w-10 h-10" onClick={toggleSidebarOpen} />
                <BsGrid1X2 className="menu-tablet w-10 h-10" onClick={toggleSidebar} />
            </div>
            <div className="menu-user" ref={menuUserRef}>
                <div className="info-user" onClick={handleHidden}>
                    <span>{username}</span>
                    <BsPersonCircle className="text-xl" />
                </div>
                <div className={`option-user ${hidden ? 'scale-y-0' : 'scale-y-100 '} z-50 `}>
                    <p className="option-item">
                        <BsPerson />
                        <span>{rol}</span>
                    </p>
                    <button type='button' className="option-item" onClick={signout}>
                        <BsBoxArrowRight />
                        <span>Cerrar</span>
                    </button>
                    {/* <Link to={'/administracion/password'} className="option-item" onClick={handleHidden}>
                        <BsKey />
                        <span>Cambiar Password</span>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default NavbarContainer;
