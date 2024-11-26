const alertIcon = (icon: string, width: number, height: number): SVGSVGElement => {

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 16 16");

    const iconStyle: Record<string, string> = {
        success: "bi bi-check-circle",
        error: "bi bi-x-circle",
        warning: "bi bi-exclamation-circle",
        info: "bi bi-info-circle",
        question: "bi bi-question-circle",
    };
    svg.setAttribute("class", iconStyle[icon]);

    // Crear el elemento <path> dentro del elemento <svg>
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");

    // Crear el elemento <path> dentro del elemento <svg>
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const iconMappings: Record<string, string> = {
        success: "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z",
        error: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",
        warning: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z",
        info: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
        question: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
    };
    path2.setAttribute("d", iconMappings[icon]);

    // Añadir los elementos <path> al elemento <svg>
    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
}


interface AlertProps {
    icon?: "success" | "error" | "warning" | "info" | "question" | "none";
    title: string;
    text?: string;
    buttonConfirm?: string;
    buttonCancel?: string;
}

class Alerta {

    colorIcon: Record<string, string> = {
        success: "text-[#A5DC86]",
        error: "text-[#F27474]",
        warning: "text-[#F8BB86]",
        info: "text-[#3fc3ee]",
        question: "text-[#87ADBD]"
    };

    fire({ icon = "none", title, text = '', buttonConfirm = "Aceptar", buttonCancel = "Cancelar", }: AlertProps): Promise<boolean> {
        // Crea los elementos HTML para la alerta
        const content = document.createElement("div");
        content.classList.add("fixed", "top-0", "h-screen", "w-screen", "z-30", "flex", "justify-center", "items-center");

        const fondo = document.createElement("div");
        fondo.classList.add("absolute", "top-0", "w-full", "h-full", "bg-gray-900", "opacity-50");

        const alerta = document.createElement("div");
        alerta.classList.add("bg-white", "p-6", "rounded-lg", "shadow-md", "z-40", "w-11/12", "md:w-[31rem]");

        const botonCancelarElemento = document.createElement("button");
        const botonConfirmarElemento = document.createElement("button");

        if (icon !== "none") {
            alerta.appendChild(this.contentIcono(icon));
        }

        alerta.appendChild(this.contentInfo(title, text));
        alerta.appendChild(this.contentButtons(buttonConfirm, buttonCancel, botonConfirmarElemento, botonCancelarElemento));

        // Agrega el fondo y la alerta al contenedor
        content.appendChild(fondo);
        content.appendChild(alerta);

        // Agrega la alerta al DOM
        document.body.appendChild(content);

        // Crea una promesa para esperar la respuesta del usuario
        return new Promise((resolve) => {
            botonCancelarElemento.addEventListener("click", () => {
                document.body.removeChild(content);
                resolve(false);
            });

            botonConfirmarElemento.addEventListener("click", () => {
                document.body.removeChild(content);
                resolve(true);
            });
        });
    }

    private contentIcono(icon: string): HTMLElement {
        const contentIcon = document.createElement("div");
        contentIcon.classList.add("flex", "justify-center", "items-center", "animate-rotateY", "py-4", this.colorIcon[icon]);
        const svg = alertIcon(icon, 70, 70);
        contentIcon.appendChild(svg);
        return contentIcon;
    }

    private contentInfo(title: string, text?: string): HTMLElement {
        const contentInfo = document.createElement("div");
        contentInfo.classList.add("mb-4", "mt-5", "text-center");

        const text_title = document.createElement("p");
        text_title.classList.add("text-2xl", "font-bold", "text-gray-600", "mt-2");
        text_title.textContent = title;
        contentInfo.appendChild(text_title);

        if (text !== '') {
            const text_text = document.createElement("p");
            text_text.classList.add("text-gray-600", "mt-2");
            text_text.textContent = text!;
            contentInfo.appendChild(text_text);
        }

        return contentInfo;
    }

    private contentButtons(buttonConfirm: string, buttonCancel: string, btnConfirm: HTMLButtonElement, btnCancel: HTMLButtonElement): HTMLElement {
        const contentButtons = document.createElement("div");
        contentButtons.classList.add("flex", "justify-center", "items-center", "gap-4");

        const styleButton = ["text-white", "font-semibold", "py-2", "p-6", "border", "border-none", "rounded", "shadow"];
        btnConfirm.classList.add("bg-success-500", "hover:bg-success-700", ...styleButton);
        btnCancel.classList.add("bg-danger-500", "hover:bg-danger-700", ...styleButton);

        btnConfirm.textContent = buttonConfirm;
        btnCancel.textContent = buttonCancel;

        contentButtons.appendChild(btnConfirm);
        contentButtons.appendChild(btnCancel);

        return contentButtons;
    }
}

const Swal = new Alerta();

export default Swal;