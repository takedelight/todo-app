import { ListTodo } from 'lucide-react';

export const Header = () => {
    return (
        <header className="py-2">
            <nav className="container flex items-center justify-between mx-auto px-1">
                <a
                    className="flex  font-medium group items-center gap-2"
                    href="/"
                >
                    <ListTodo size={40} />
                    <p className=" hidden font-tasa sm:flex flex-col">
                        <span>Amazing Workspace</span>
                        <span className="group-hover:text-primary-400 transition-all ease-in-out duration-150">
                            Todo board
                        </span>
                    </p>
                </a>

                <ul className="flex items-center gap-3">
                    <li className="bg-succes-400 rounded-md hover:bg-succes-500 ease-in-out duration-150 transition-all text-white px-3 py-2">
                        Sign In
                    </li>
                    <li className="bg-succes-300 rounded-md hover:bg-succes-500 ease-in-out duration-150 transition-all text-white px-3 py-2">
                        Sign Up
                    </li>
                    <li className="hidden">menu</li>
                </ul>
            </nav>
        </header>
    );
};
