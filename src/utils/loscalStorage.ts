

//almacena nomre y valor en el local storage
export const storeValue = (name: string, value: string) => {
    try {
        localStorage.setItem(name, value);
    } catch (e) {
        console.log(e);
    }
};

//obtiene el valor del local storage
export const getValue = (name: string) => {
    try {
        const value = localStorage.getItem(name);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.log(e);
    }
}

//elimina el valor del local storage
export const removeValue = (name: string) => {
    try {
        localStorage.removeItem(name);
    } catch (e) {
        console.log(e);
    }
}