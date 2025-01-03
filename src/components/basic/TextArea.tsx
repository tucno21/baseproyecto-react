import { InputHTMLAttributes } from 'react';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    containerStyle?: string;
    labelStyle?: string;
    inputStyle?: string;
    errorStyle?: string;
    rounded?: 'none' | 'sm' | 'lg' | 'full';
    borderColor?: 'base' | 'primary';
}


const TextArea = ({
    label, error, icon, containerStyle = '', inputStyle = '', labelStyle = '', errorStyle = '', rounded = 'sm', borderColor = 'base', ...props
}: TextAreaProps) => {

    const roundedStyles = {
        none: '',
        sm: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full'
    };

    const borderStyles = {
        base: 'border-slate-300',
        primary: 'border-primary-300',
    };

    const focusBorder = {
        base: 'focus-within:border-slate-500',
        primary: 'focus-within:border-primary-500',
    }

    const iconColor = {
        base: 'text-slate-500',
        primary: 'text-primary-500',
    }


    return (
        <div className={`w-full flex flex-col gap-y-1`}>
            {label && <label className={`text-sm font-semibold text-slate-500 ${labelStyle}`} htmlFor={label}>{label}</label>}
            <div className='w-full'>
                <div className={`w-full flex items-center border ${error ? 'border-danger-500' : borderStyles[borderColor]} gap-x-2 px-3 py-2 ${containerStyle} ${roundedStyles[rounded]} ${focusBorder[borderColor]}`}>
                    {icon && <div className={`${iconColor[borderColor]}`}>{icon}</div>}
                    <textarea
                        className={`${inputStyle} w-full outline-none text-slate-600 text-sm`}
                        id={label}
                        {...props}
                    ></textarea>
                </div>
                {error && <p className={`text-danger-500 text-xs pl-4 ${errorStyle}`}>{error}</p>}
            </div>
        </div>
    )
}

export default TextArea