import React, {useState} from 'react';

const Sitemap = () => {
    const [hideFirstSection, setHideFirstSection] = useState(false);
    const [hideSecondSection, setHideSecondSection] = useState(false);

    // get list of all pages dynamically
    const pages = [
        {
            name: 'Про мене',
            path: '/about',
        },
        {
            name: 'Контакти',
            path: '/contact',
        },
        {
            name: 'Хоббі',
            path: '/hobby',
        }
    ];

    return (
        <div className="flex flex-col mt-3">
            <h1 className="text-4xl font-bold text-center">Карта сайту (оберіть секцію яка вас цікавить)</h1>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <h1 onClick={() => setHideFirstSection(!hideFirstSection)} className="text-xl my-4 cursor-pointer">
                        Про інтелектуальний аналіз даних
                    </h1>
                    {hideFirstSection && <ul>
                        <li>
                            <a className="text-gray-700" href="/">Сторінка про інтелектуальний аналіз данних</a>
                        </li>
                    </ul>}
                    <h1 onClick={() => setHideSecondSection(!hideSecondSection)} className="text-xl my-4 cursor-pointer">
                        Більше про мене
                    </h1>
                    {hideSecondSection && <ul>
                        {pages.map((page, index) => (
                            <li key={index}>
                                <a className="text-gray-700" href={page.path}>{page.name}</a>
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
