import React from 'react';

interface PricePacket {
    name: string;
    price: string;
    description: string;
}

const pricePackets: PricePacket[] = [
    { name: '– PRO –', price: '20.000 ₽', description: 'УМК по робототетхнике  и программированию' },
    { name: '– ROBO –', price: '15.000 ₽', description: 'УМК по робототетхнике ' },
    { name: '– PROG –', price: '10.000 ₽', description: 'УМК по программированию' },
];

const PricePacket: React.FC = () => {
    return (
        <section className="py-14 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-10 text-[#141024]">Пакеты</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {pricePackets.map((packet, index) => (
                    <div
                        key={index}
                        className="bg-[#141024] shadow-lg rounded-lg p-8 flex flex-col items-center text-center"
                    >
                        {/* Название пакета */}
                        <h3 className="text-2xl font-bold mb-4 text-white">{packet.name}</h3>
                        {/* Цена */}
                        <p className="text-xl font-semibold mb-4 text-white">{packet.price}</p>
                        {/* Мини описание */}
                        <p className="text-gray-600 mb-6 text-white">{packet.description}</p>
                        {/* Красная кнопка */}
                        <button className="bg-red-600 hover:bg-red-600 text-white px-6 py-3 rounded">
                            Оставить заявку
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricePacket;