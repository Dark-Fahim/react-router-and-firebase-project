import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div>
                    <h2 className="text-5xl font-bold">Register Now!!!</h2>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Your Email"  name="email" required/>
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" required/>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p>Already Have an account? please <Link className="font-bold text-blue-500" to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;