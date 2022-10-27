import React from 'react';
import Layout from "../components/Layout";

const Hobby = () => {
    const hobbies = [
        {
            id: 1,
            name: 'Шахи',
            description: 'Граю в шахи десь на ріень 1600-1700 elo, дуже подобається ця гра',
        },
        {
            id: 2,
            name: 'Powerlifting',
            description: 'Практикую силові види спорту, займаюся підготовкою до змагань, відвідую тренування і впевненно займаюся цим',
        },
        {
            id: 3,
            name: 'Музика',
            description: 'Дуже люблю співати, відвідував музичні заняття, виступав на концертах, дуже подобається ця справа',
        },
        {
            id: 4,
            name: 'Настільний теніс',
            description: 'Граю напівпрофесійно в настільний теніс, дуже подобається',
        }
    ];
    return (
        <Layout>
                <h1 className="text-4xl font-bold text-center">Мої хоббі</h1>
                <div className="flex justify-center">
                    <div className="w-1/2">
                        {hobbies.map((hobby) => (
                            <div key={hobby.id} className="border-2 border-gray-500 rounded-lg p-4 my-4">
                                <h2 className="text-2xl font-bold">{hobby.name}</h2>
                                <p>{hobby.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </Layout>
    )
};

export default Hobby;
