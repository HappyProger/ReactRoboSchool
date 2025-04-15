import React from 'react';
import Girl from '../assets/homegirl.png';
const Home: React.FC = () => {
    return (
        <section className="bg-[#141024] text-white py-12 min-h-screen flex items-center justify-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">ROBO SCHOOL</h1>
                    <p className="text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
                        Курсы повышения квалификации по робототехнике для педагогов начальной школы
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 transition px-4 py-3 rounded text-white font-medium">
                      <a href="#sign"> Записаться на курс </a>
                    </button>
                </div>
                <div className="flex justify-center">
                    <img alt="Girl holding books and smiling" src={Girl} className="w-full max-w-xs md:max-w-md" />
                </div>
            </div>
        </section>
    );
};

export default Home;