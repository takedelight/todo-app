import { ListTodo } from 'lucide-react';
import { Link } from 'react-router';

export const Header = () => {
    return (
        <header className="py-2">
            <nav className="container flex items-center justify-between mx-auto px-1">
                <Link
                    className="flex  font-medium group items-center gap-2"
                    to="/"
                >
                    <ListTodo size={40} />
                    <p className=" hidden font-tasa sm:flex flex-col">
                        <span>Amazing Workspace</span>
                        <span className="group-hover:text-primary-400 transition-all ease-in-out duration-150">
                            Todo board
                        </span>
                    </p>
                </Link>

                <ul className="flex items-center gap-3">
                    <li>
                        <Link
                            className="bg-succes-400 rounded-md hover:bg-succes-500 ease-in-out duration-150 transition-all text-white px-3 py-2"
                            to="/signin"
                        >
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="bg-succes-300 rounded-md hover:bg-succes-500 ease-in-out duration-150 transition-all text-white px-3 py-2"
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </li>
                    <li className="hidden">menu</li>
                </ul>
            </nav>
        </header>
    );
};
