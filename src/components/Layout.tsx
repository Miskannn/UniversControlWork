import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="bg-gray-500 min-h-full">
            <div className="mx-6">
                <Navbar />
                 <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
