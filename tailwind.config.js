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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #0c3483 0%, #3d5af1 100%, #6b8cce 0%, #3d5af1 0%)',
      },
      boxShadow: {
        'border': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        'button': 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        'card': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      },
      dropShadow: {
        'image': '13px 6px 9px #000',
        'title': '4px 4px 4px #000000',
        'border': '4px 4px 3px #000',
      },
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        show_toast: {
          '0%': { transform: 'translateX(100%)' },
          '40%': { transform: 'translateX(-5%)' },
          '80%': { transform: 'translateX(3%)' },
          '100%': { transform: 'translateX(0)' },
        },
        hide_toast: {
          '0%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(3%)' },
          '80%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(calc(100% + 20px))' },
        },
        progress: {
          '100%': { width: '0%' },
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        rotateY: 'rotateY 1s ease-in-out forwards',
        show_toast: 'show_toast 0.3s ease forwards',
        hide_toast: 'hide_toast 0.3s ease forwards',
        progress: 'progress 5s linear forwards',
      }
    },
  },
  plugins: [],
}

