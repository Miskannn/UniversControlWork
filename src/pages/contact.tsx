import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
        {/*    Write a contact form with description on ukrainian*/}
            <h1 className="text-4xl font-bold text-center">Контакти</h1>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="border-2 border-gray-500 rounded-lg p-4 my-4">
                        <h2 className="text-2xl font-bold">Контактна форма</h2>
                        <p>Якщо у вас є питання, які ви хочете задати, ви можете використовувати цю форму, щоб зв'язатися зі мною.</p>
                    </div>
                    <form className="border-2 border-gray-500 rounded-lg p-4 my-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Ім'я
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Ім'я"
                            />
                            <input
                                className="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                            <textarea
                                className="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Повідомлення"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Відправити
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <div className="border-2 border-gray-500 rounded-lg p-4 my-4">
                        <h2 className="text-2xl font-bold">Контактна інформація</h2>
                        <p>Ви можете зв'затися зі мною по телефону <a href="tel:+380634668347">+380634668347</a></p>
                        <p>Чи ви можете зв'затися зі мною по електронній пошті <a className="ml-2" href="mailto:maksim.kovtun2103@gmail.com">тут</a></p>
                    </div>
                    <div className="border-2 border-gray-500 rounded-lg p-4 my-4">
                        <p>Якщо ви хочете зв'язатися зі мною, будь ласка, перевірте мій календар, щоб побачити, чи я зайнятий в цей час.</p>
                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FKiev&src=bWFrc2ltLmtvdnR1bjIxMDNAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udWtyYWluaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb205ZTAxYmE2YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20wNzFiMzVjYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21kZmM2NGZmMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20yMmE4YWEyYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21mNjk3OGJkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=a251LmVkdS51YV9jbGFzc3Jvb20zMjMwY2FhZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=a251LmVkdS51YV9jbGFzc3Jvb202OWUzMzUzNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb205OTc3ZDFmNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb202YmU4MGM1MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb204NjY0MTgwOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21jMGY2NDA2N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20zOWJmYjhmNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20wN2Y5NzE2N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20wNjk3MDdkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20xMzdiZTg3MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20yZmY2MzdiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=a251LmVkdS51YV9jbGFzc3Jvb203MmQ3NTcxOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20yZTg0OTllYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21hNTcyMzU1MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb200MTYyN2ZjNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043&color=%23c26401&color=%230047a8&color=%23174ea6&color=%230047a8&color=%23202124&color=%23202124&color=%23137333&color=%23137333&color=%23202124&color=%23007b83&color=%23007b83&color=%23202124&color=%230047a8&color=%23c26401&color=%23137333&color=%230047a8&color=%23202124&color=%23c26401&color=%23202124&color=%23202124"
                            style={{border: "solid 1px #777"}} width="200" height="200" frameBorder="0"
                            scrolling="no"></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
