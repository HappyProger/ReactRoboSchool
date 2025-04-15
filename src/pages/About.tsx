import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Описание RoboSchool */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-center text-[#141024] mb-4">
                        RoboSchool
                    </h1>
                    <p className="text-xl text-center text-gray-700">
                        Учреждение для формирования кадрового педагогического резерва в сфере робототехники и
                        программирования
                    </p>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#141024]">10</p>
                        <p className="text-gray-600 text-sm">
                            УМК по различным направлениям по&nbsp;робототехнике
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#141024]">20</p>
                        <p className="text-gray-600 text-sm">
                            Школ, в которых запущена робототехника
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#141024]">100</p>
                        <p className="text-gray-600 text-sm">
                            Педагогов, прошедших курсы повышения квалификации
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-[#141024]">10 000</p>
                        <p className="text-gray-600 text-sm">
                            Обученных детей на базе собственных центров
                        </p>
                    </div>
                </div>

                {/* Блок "Что вы получите после курса" */}
                <div className='py-24'>
                    <h2 className="text-3xl font-bold text-[#141024] mb-8 text-center ">
                        Что вы получите после курса
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        <div className="p-6  flex flex-col  text-left">
                            <h3 className="text-2xl font-semibold text-[#141024] mb-2 text-left">
                                Удостоверение
                            </h3>
                            <p className="text-gray-600 text-left">
                                Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях
                            </p>
                        </div>
                        <div className="p-6 rounded-lg  flex-col  text-left">
                            <h3 className="text-2xl font-semibold text-[#141024] mb-2">
                                Знания
                            </h3>
                            <p className="text-gray-600">
                                По основам разработки учебно-методических комплексов по&nbsp;робототехнике и
                                программированию
                            </p>
                        </div>
                        <div className="p-6  rounded-lg  flex-col  text-left">
                            <h3 className="text-2xl font-semibold text-[#141024] mb-2">
                                Практика
                            </h3>
                            <p className="text-gray-600">
                                Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн
                                или онлайн формате)
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
