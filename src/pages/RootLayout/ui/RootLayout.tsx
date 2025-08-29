import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../../../widgets/footer';
import { Header } from '../../../widgets/header';

export const RootLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />

            <main className="flex-1">
                <Suspense
                    fallback={
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Loading...
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
};
