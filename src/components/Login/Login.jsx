import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const navigate = useNavigate()

    const {signInUser, signInWithGoogle} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset()
            navigate('/')
        })
        .catch(err => {
            console.error(err);
        })
    }


    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div>
                    <h2 className="text-5xl font-bold">Login Now!!!</h2>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Your Email" name="email" required />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <button onClick={handleGoogleLogin} className="btn btn-ghost mt-4">Sign in with Google</button>
                        <p>New To this site? please <Link className="font-bold text-blue-500" to={'/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;