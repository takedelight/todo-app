import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router';
import { RootLayout } from '../pages/RootLayout';
import './index.css';

const HomePage = lazy(() =>
    import('../pages/Home').then((module) => ({
        default: module.Home,
    })),
);

const SignInPage = lazy(() =>
    import('../pages/SignIn').then((module) => ({
        default: module.SignIn,
    })),
);

const SignUpPage = lazy(() =>
    import('../pages/SignUp').then((module) => ({
        default: module.SignUp,
    })),
);

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: '/signin',
                element: <SignInPage />,
            },
            {
                path: '/signup',
                element: <SignUpPage />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);

