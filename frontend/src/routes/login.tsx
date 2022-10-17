import {Link} from "react-router-dom";

function Login() {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <h3 className="text-2xl font-bold text-center">Login</h3>
            <form action="">
                <div className="mt-4">
                    <div>
                        <label className="block" htmlFor="Name">Name</label>
                            <input type="text" placeholder="Name"
                                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Password</label>
                            <input type="text" placeholder="password"
                                   className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>

                    <div className="mt-6 text-grey-dark">
                        Don't have an account?
                        <Link className="text-blue-600 hover:underline" to="/register">
                            Join us here
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default Login