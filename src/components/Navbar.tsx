import React from 'react';

const Navbar = () => {
    return (
            <header>
                <div>
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <div className="text-gray-700 text-xl font-bold"><a href="/">Intelligent</a></div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-700 font-bold mr-4"><a href="/">Додому</a></div>
                            <div className="text-gray-700 font-bold mr-4"><a href="/about">Про мене</a></div>
                            <div className="text-gray-700 font-bold mr-4"><a href="/contact">Контакти</a></div>
                            <div className="text-gray-700 font-bold mr-4"><a href="/hobby">Хоббі</a></div>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Navbar;
