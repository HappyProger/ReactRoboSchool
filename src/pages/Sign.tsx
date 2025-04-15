import React from "react";

const Sign: React.FC = () => {
    return (
        <div id='sign' className="bg-[#D52027] text-white font-medium py-24 px-4">
            <div className="max-w-6xl mx-auto grid sm:grid-cols-1  md:grid-cols-2 items-center">
                {/* Левая часть */}
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                        Запишитесь на курс <br /> со скидкой 10%
                    </h2>
                    <h5 className="text-base font-normal py-6">
                        Акция действительна до 3 октября 2025 года
                    </h5>
                </div>

                {/* Правая часть — форма */}
                <form className="space-y-4 w-full">
                    <input
                        type="text"
                        placeholder="Имя"
                        className="bg-white w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="bg-white w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="bg-white w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 rounded-sm bg-[#141024] hover:bg-[#2c2c38] transition"
                    >
                        Оставить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sign;
