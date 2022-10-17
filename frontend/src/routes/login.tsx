import {Link, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {useIsLoggedIn, useLogin} from "../hooks/auth";

function Login() {
    const isLoggedIn = useIsLoggedIn()
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = useLogin(username, password)

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }

        if (login.sent) {
            navigate("/")
        }

    },[isLoggedIn, login.sent])


    const loginClick = useCallback(() => {
        login.send()
    }, [login])


    return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <h3 className="text-2xl font-bold text-center">Login</h3>
            <div className="mt-4">
                <div>
                    <label className="block">Username</label>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username}
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="flex">
                    <button onClick={loginClick}
                            className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login
                    </button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Don't have an account?
                    <Link className="text-blue-600 hover:underline" to="/register">
                        Join us here
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default Login