import {Link, useNavigate} from "react-router-dom";
import {useIsLoggedIn, useLogin, useRegister} from "../hooks/auth";
import {useCallback, useEffect, useState} from "react";

function Register() {
    const isLoggedIn = useIsLoggedIn()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = useRegister(username, password, {
        first_name: firstName,
        last_name: lastName,
        bio: ''
    })

    const login = useLogin(username, password)


    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }

        if (register.sent && !login.sent) {
            login.send()
        }

        if (login.sent) {
            navigate("/")
        }

    },[isLoggedIn, register.sent, login.sent])


    const registerClick = useCallback(() => {
        register.send()
    }, [register])

    return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <h3 className="text-2xl font-bold text-center">Register</h3>
                <div className="mt-4">
                    <div className="flex w-full">
                        <div className="w-full pr-2">
                            <label className="block">First name</label>
                            <input type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)} value={firstName}
                                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="w-full">
                            <label className="block">Last name</label>
                            <input type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)} value={lastName}
                                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                    </div>
                    <div className="mt-4">
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
                        <button onClick={registerClick}
                            className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                            Account
                        </button>
                    </div>
                    <div className="mt-6 text-grey-dark">
                        Already have an account?
                        <Link className="text-blue-600 hover:underline" to="/login">
                            Log in
                        </Link>
                    </div>
                </div>
        </div>
    </div>

}

export default Register;