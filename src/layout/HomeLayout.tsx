import { Outlet } from "react-router-dom"


const HomeLayout = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>HomeLayout</h1>
            <Outlet />
        </div>
    )
}

export default HomeLayout