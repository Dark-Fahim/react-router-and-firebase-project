import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-dots loading-xl"></span>
                <span className="loading loading-dots loading-xl"></span>
                <span className="loading loading-dots loading-xl"></span>
            </div>
        </>
    }
    if (user) {
        return children;
    }


    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouts;