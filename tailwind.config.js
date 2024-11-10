/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //sidebar
        panel: {
          background: "#0E1621", //fondo de sidebar
          btn_active: "#25303E",//fondo sidebar items y activacion
          txt: "#768C9E", //texto sidebar
          txt_active: "#199687", //texto sidebar activo
        },
        surface: {
          50: '#ffffff',  // Blanco
          100: '#EFF4F9', // Gris muy claro
          200: '#e5e7eb', // Gris claro
          300: '#d1d5db', // Gris medio claro
          400: '#9ca3af', // Gris medio
          500: '#6b7280', // Gris
          600: '#4b5563', // Gris oscuro
          700: '#374151', // Gris muy oscuro
          800: '#1f2937', // Gris casi negro
          900: '#111827', // Gris muy oscuro (especificado)
        },
        //https://www.colorhexa.com/0d6efd
        primary: {
          100: "#e3e5f9",
          300: "#9a9fdc",
          500: "#545cd8",
          700: "#4246b1",
          900: "#2b307a"
        },
        success: {
          100: "#e0f3e6",
          300: "#9edbb0",
          500: "#48be56",
          700: "#2e8f3d",
          900: "#1c5e27"
        },
        danger: {
          100: "#fbe2e5",
          300: "#f8a0a9",
          500: "#f5365c",
          700: "#d12648",
          900: "#911829"
        },
        warning: {
          100: "#fef4e0",
          300: "#fbd48a",
          500: "#F7B924",
          700: "#d4911c",
          900: "#8f6113"
        },
        info: {
          100: "#e0f7fc",
          300: "#8eeaf8",
          500: "#11cdef",
          700: "#0a9dc2",
          900: "#066b86"
        },
        light: {
          100: "#ffffff",
          300: "#f2f2f2",
          500: "#f5f5f5",
          700: "#dbdbdb",
          900: "#b2b2b2"
        },
        dark: {
          100: "#37474f",
          300: "#263238",
          500: "#212b30",
          700: "#1b2428",
          900: "#12191c"
        },
      },
    },
  },
  plugins: [],
}

