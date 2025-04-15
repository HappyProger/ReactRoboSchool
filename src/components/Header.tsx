import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 items-center bg-[#141024] text-white ">
            <nav className="flex justify-between items-center mx-auto px-6 py-4">
                <a href="/" className="text-xl font-bold">
                    ROBO.SCHOOL
                </a>

                <div className="flex gap-8 text-md font-medium">
                    <a href="#about" className="hover:text-blue-400 transition">О школе</a>
                    <a href="#staff" className="hover:text-blue-400 transition">Тренеры </a>
                    <a href="#price" className="hover:text-blue-400 transition">Стоимость</a>
                </div>

                <div className="text-sm font-semibold">
                    <a href="tel:+7 700 777 77 77" className="hover:text-blue-400 transition">
                        +7 800 000 11 22
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
