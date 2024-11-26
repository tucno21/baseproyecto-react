interface Toast {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    timer?: 1000 | 2000 | 3000 | 4000 | 5000 | 6000 | 7000 | 8000 | 9000 | 10000;
    position?: 'top-right' | 'bottom-right';
    theme?: 'light' | 'dark' | 'colored';
}


const alertIcon = (icon: string, width: number, height: number): SVGSVGElement => {

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 16 16");

    const iconStyle: Record<string, string> = {
        success: "bi bi-check-circle-fill",
        error: "bi bi-x-circle-fill",
        warning: "bi bi-exclamation-triangle-fill",
        info: "bi bi-exclamation-circle-fill",
        delet: "bi bi-x-lg",
    };
    svg.setAttribute("class", iconStyle[icon]);

    // Crear el elemento <path> dentro del elemento <svg>
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const iconMappings: Record<string, string> = {
        success: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z",
        error: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
        warning: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
        info: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2",
        delet: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
    };
    path2.setAttribute("d", iconMappings[icon]);

    svg.appendChild(path2);

    return svg;
}

const textColor: Record<string, string[]> = {
    success: ["text-success-500"],
    error: ["text-danger-500"],
    warning: ["text-warning-500"],
    info: ["text-info-500"],
}

const bgColor: Record<string, string[]> = {
    success: ["before:bg-success-500"],
    error: ["before:bg-danger-500"],
    warning: ["before:bg-warning-500"],
    info: ["before:bg-info-500"],
}

const bgColorColored: Record<string, string[]> = {
    success: ["before:bg-success-300"],
    error: ["before:bg-danger-300"],
    warning: ["before:bg-warning-300"],
    info: ["before:bg-info-300"],
}

const animateTimer: Record<number, string[]> = {
    1000: ["before:animate-[progress_1000ms_linear_forwards]"],
    2000: ["before:animate-[progress_2000ms_linear_forwards]"],
    3000: ["before:animate-[progress_3000ms_linear_forwards]"],
    4000: ["before:animate-[progress_4000ms_linear_forwards]"],
    5000: ["before:animate-[progress_5000ms_linear_forwards]"],
    6000: ["before:animate-[progress_6000ms_linear_forwards]"],
    7000: ["before:animate-[progress_7000ms_linear_forwards]"],
    8000: ["before:animate-[progress_8000ms_linear_forwards]"],
    9000: ["before:animate-[progress_9000ms_linear_forwards]"],
    10000: ["before:animate-[progress_10000ms_linear_forwards]"],
}

const toastBgTheme: Record<string, string[]> = {
    light: ["bg-white", "border-slate-300"],
    dark: ["bg-black", "border-0"],
}

const toastBgThemeColored: Record<string, string[]> = {
    success: ["bg-success-500", "border-0"],
    error: ["bg-danger-500", "border-0"],
    warning: ["bg-warning-500", "border-0"],
    info: ["bg-info-500", "border-0"],
}

const toastTextTheme: Record<string, string[]> = {
    light: ["text-slate-700"],
    dark: ["text-white"],
}

const toastTextThemeColored: Record<string, string[]> = {
    success: ["text-white"],
    error: ["text-white"],
    warning: ["text-white"],
    info: ["text-white"],
}

const colorClose: Record<string, string[]> = {
    success: ["text-slate-100", "hover:text-slate-400"],
    error: ["text-slate-100", "hover:text-slate-400"],
    warning: ["text-slate-100", "hover:text-slate-400"],
    info: ["text-slate-100", "hover:text-slate-400"],
}

const colorCloseColored: Record<string, string[]> = {
    success: ["text-slate-100", "hover:text-slate-400"],
    error: ["text-slate-100", "hover:text-slate-400"],
    warning: ["text-slate-100", "hover:text-slate-400"],
    info: ["text-slate-100", "hover:text-slate-400"],
}

const createToast = (type: Toast["type"], message: string, timer: number, theme: string) => {
    // Crear el elemento LI
    const toast = document.createElement("LI");
    toast.classList.add(
        "max-w-sm",
        "shadow-lg",
        "border",
        "border-slate-300",
        "flex",
        "items-center",
        "justify-between",
        "gap-4",
        "relative",
        "overflow-hidden",
        "list-none",
        "rounded",
        "pt-2",
        "pb-3",
        "px-4",
        "mb-2",
        "animate-show_toast",
        "before:absolute",
        "before:content-['']",
        "before:h-1",
        "before:w-full",
        "before:bottom-0",
        "before:left-0",
        ...animateTimer[timer]
    );
    // console.log(type);
    if (theme === 'colored') {
        toast.classList.add(...toastBgThemeColored[type], ...bgColorColored[type]);
    } else {
        toast.classList.add(...toastBgTheme[theme], ...bgColor[type]);
    }

    // Crear el elemento DIV para el contenido
    const BodyToast = document.createElement("DIV");
    BodyToast.classList.add("colum", "flex", "items-center", "gap-2")

    //crear el span para el icono
    const spanIcon = document.createElement("SPAN");
    spanIcon.classList.add("text-xl");
    if (theme === 'colored') {
        spanIcon.classList.add(...toastTextThemeColored[type]);
    } else {
        spanIcon.classList.add(...textColor[type]);
    }

    // Crear el elemento SVG para el icono
    const svg = alertIcon(type, 25, 25);

    //agregar el icono al span
    spanIcon.appendChild(svg);

    //crear el span para el texto
    const TextToast = document.createElement("SPAN");
    TextToast.classList.add("text-xs");
    if (theme === 'colored') {
        TextToast.classList.add(...toastTextThemeColored[type]);
    } else {
        TextToast.classList.add(...toastTextTheme[theme]);
    }

    TextToast.innerText = message;

    // agregar el icon span al div
    BodyToast.appendChild(spanIcon);
    //agregar el span TEXT al div
    BodyToast.appendChild(TextToast);

    //crear span para icono de cerrar
    const IconClose = document.createElement("SPAN");
    IconClose.classList.add("cursor-pointer");
    if (theme === 'colored') {
        IconClose.classList.add(...colorCloseColored[type]);
    } else {
        IconClose.classList.add(...colorClose[type]);
    }
    //crear el icon para cerrar el toast
    const deletex = alertIcon("delet", 14, 14);
    //agregar el icono al span
    IconClose.appendChild(deletex);
    // Add a click event listener to the close icon

    //agregar el span cerrar a LI
    toast.appendChild(BodyToast);
    toast.appendChild(IconClose);

    return toast
}

const toastPosition: Record<string, string[]> = {
    "top-right": ["top-5"],
    "bottom-right": ["bottom-5"],
}

const ToastEfect = ({ type, message, timer = 4000, position = 'top-right', theme = 'light' }: Toast) => {
    const body = document.querySelector("body");
    let ContentToast = document.getElementById("toastTailwind");

    if (!ContentToast) {
        ContentToast = document.createElement("UL");
        ContentToast.setAttribute("id", "toastTailwind");
        ContentToast.classList.add("fixed", "right-2", "z-50");
        ContentToast.classList.add(...toastPosition[position]);
        body?.appendChild(ContentToast);
    }

    const toastElement = createToast(type, message, timer, theme);

    // Eliminar el elemento LI después del tiempo especificado
    const timeoutId = setTimeout(() => {
        toastElement.classList.remove("animate-show_toast");
        toastElement.classList.add("animate-hide_toast");
        setTimeout(() => {
            ContentToast.removeChild(toastElement);
            // Verificar si el elemento UL está vacío después de eliminar el toast
            if (ContentToast.children.length === 0) {
                body?.removeChild(ContentToast);
            }
        }, 500); // Duración de la animación hide_toast
    }, timer);

    // Add event listener to close icon to clear timeout
    const closeIcon = toastElement.querySelector(".cursor-pointer");
    closeIcon?.addEventListener("click", () => {
        clearTimeout(timeoutId);
        toastElement.classList.remove("animate-show_toast");
        toastElement.classList.add("animate-hide_toast");
        setTimeout(() => {
            ContentToast.removeChild(toastElement);
            // Verificar si el elemento UL está vacío después de eliminar el toast
            if (ContentToast.children.length === 0) {
                body?.removeChild(ContentToast);
            }
        }, 500);
    });

    ContentToast.appendChild(toastElement);

    return ContentToast;
}

export default ToastEfect