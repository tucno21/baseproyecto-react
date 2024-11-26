
interface LoaderProps {
    text: string
}

const Loader = ({ text }: LoaderProps) => {
    return (
        <div className="fixed top-0 left-0 z-50 flex flex-col justify-center items-center h-full w-full">
            <div className="flex flex-col justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-xl font-semibold text-blue-600 animate-pulse">{text}</p>
            </div>
            <div className="h-full w-full absolute -z-10 top-0 left-0 bg-slate-100 bg-opacity-75 backdrop-blur-sm"></div>
        </div>
    )
}

export default Loader