import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-4xl">This Is Home</h2>
            <h3 className="text-2xl">{authInfo.name}</h3>
        </div>
    );
};

export default Home;