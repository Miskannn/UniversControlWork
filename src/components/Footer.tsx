import React from 'react';

const Footer = () => {
    return (
        // write footer with tailwind styling
        <footer className="bg-gray-800 mt-10">
            <div className="container mx-auto px-6 py-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-center md:text-left ">
                        <h5 className="uppercase mb-6 font-bold text-white">Links</h5>
                        <ul className="mb-4">
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Додому</a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Про мене</a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Контакти</a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Хоббі</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left ">
                        <h5 className="uppercase mb-6 font-bold text-white">Social</h5>
                        <ul className="mb-4">
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Facebook</a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Linkedin</a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-200 hover:underline">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
