import { ReactNode } from 'react';


interface ModalProps {
    children: ReactNode;
    show: boolean;
    title?: string;
    showHeader?: boolean;
    showbuttonClose?: boolean;
    closeModal?: () => void;
    size?: 'small' | 'normal' | 'large' | 'full'; // Agrega los valores de tamaño que necesites
    blurEffect?: boolean;
}


const Modal = ({ children, show, title = 'Modal', showHeader = true, showbuttonClose = true, closeModal, size = 'normal', blurEffect = false }: ModalProps) => {


    return (
        <>
            {/* {show && ( */}
            <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 transition-colors ${blurEffect && 'backdrop-blur'} ${show ? 'visible bg-black/30' : 'invisible'}`}>
                {/* // onClick={closeModal} */}
                {/* <div className={`absolute inset-0 bg-slate-900/60 ${blurEffect && 'backdrop-blur'} transition-opacity duration-300`} style={{ opacity: show ? 1 : 0, transition: 'opacity 300ms' }} /> */}
                <div className={`w-full  ${size === 'small' && 'max-w-sm'} ${size === 'normal' && 'max-w-xl'} ${size === 'large' && 'max-w-3xl'} ${size === 'full' && 'max-w-full'}  rounded-lg bg-white px-4 py-2 transition-all sm:px-5 overflow-y-auto ${show ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} >
                    <div className={`flex justify-between items-center gap-3 ${showHeader && 'pb-1 mb-2 border-b border-[#bebcbc]'} `}>
                        {
                            showHeader && (
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold">{title}</h3>
                                </div>
                            )
                        }
                        {
                            showbuttonClose && (
                                <button className=" rounded text-slate-500 hover:text-slate-800 " onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" strokeWidth="0.5" stroke="currentColor" />
                                    </svg>
                                </button>
                            )
                        }
                    </div>
                    {children}
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default Modal;