import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout>
         <h1 className="text-4xl font-bold text-center text-gray-800 mb-5">Data mining</h1>
            <p className="text-xl text-center text-gray-800">
                Data mining (укр. видобуток даних, інтелектуальний аналіз даних, глибинний аналіз даних) — збірна назва, що використовується для позначення сукупності методів виявлення даних раніше невідомих, нетривіальних, практично корисних і доступних інтерпретації знань, необхідних для прийняття рішень у різних сферах людської діяльності. Термін запроваджено Григорієм П'ятецьким-Шапіроruen у 1989 році.
                Англійське словосполучення «data mining» поки що не має усталеного перекладу українською мовою.
            </p>
            <p className="text-xl text-center text-gray-800">
                При передачі українською використовуються такі словосполучення: просів інформації, видобуток даних, вилучення даних, і навіть інтелектуальний аналіз даних. Більш повним і точним є словосполучення «виявлення знань у базах даних» (англ. knowledge discovery in databases, KDD).
            </p>
            <p className="text-xl text-center text-gray-800">
                Основні завдання data mining полягають у виявленні залежностей між даними, що зберігаються в базах даних, та використанні цих залежностей для прогнозування подальшого розвитку системи, що зберігає дані.
            </p>
            <p className="text-xl text-center text-gray-800">
                Data mining — це процес виявлення та вилучення знань з великих масивів даних.
            </p>
            <p className="text-xl text-center text-gray-800">
                Одне з найважливіших призначень методів data mining полягає у наочному поданні результатів обчислень (візуалізація), що дозволяє використовувати інструментарій data mining людьми, які мають спеціальної математичної підготовки.
            </p>
            <p className={"text-xl text-center text-gray-800"}>
                Застосування статистичних методів аналізу даних вимагає хорошого володіння теорією ймовірностей та математичною статистикою.
            </p>
            <h1 className="text-4xl text-center text-gray-800 my-5">
                Історія data mining
            </h1>
            <p className="text-xl text-center text-gray-800">
                Початок розвитку методів data mining можна вважати 1960-х років, коли відомий американський математик і статистик Джордж Атанасіан (George Atanasian) вперше використав термін «data mining». Він вважав, що відомі методи статистичного аналізу даних не відповідають потребам сучасного бізнесу, оскільки вони не дають можливості виявлення залежностей між даними, що зберігаються в базах даних.
            </p>
            <h1 className="text-4xl text-center text-gray-800 my-5">
                Методи data mining
            </h1>
        <table className="table-auto mx-auto my-5">
            <thead>
            <tr>
                <th className="px-4 py-2">Метод</th>
                <th className="px-4 py-2">Опис</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border px-4 py-2">Асоціативний аналіз</td>
                <td className="border px-4 py-2">Виявлення залежностей між атрибутами</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="border px-4 py-2">Кластерний аналіз</td>
                <td className="border px-4 py-2">Виявлення груп даних, що мають спільні характеристики</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Класифікація</td>
                <td className="border px-4 py-2">Визначення класу, до якого належить об'єкт</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="border px-4 py-2">Предсказування</td>
                <td className="border px-4 py-2">Визначення значення атрибута для нового об'єкта</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Пошук аномалій</td>
                <td className="border px-4 py-2">Виявлення об'єктів, що не відповідають звичайним властивостям</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="border px-4 py-2">Пошук асоціацій</td>
                <td className="border px-4 py-2">Виявлення залежностей між атрибутами</td>
            </tr>
            </tbody>
        </table>
        </Layout>
    );
};

export default Index;
