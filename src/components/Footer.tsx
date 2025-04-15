import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer
            className="text-white px-6 py-12 flex flex-col text-left"
            style={{
                background: `#141024`,
            }}
        >
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10 text-sm">
                {/* Column 1 */}
                <div>
                    <h3 className="text-white font-medium mb-3">Контакты</h3>
                    <ul className="space-y-2 mb-4">
                        <li>г. Астана, Казахстан</li>
                        <li>+7 (707) 123-45-67</li>
                        <li>info@roboschool.kz</li>
                    </ul>
                    <div className="flex gap-3 text-xl text-gray-600">
                        <a href="#" className="hover:text-orange-500 transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-orange-500 transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-orange-500 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-orange-500 transition"><FaPinterestP /></a>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-white font-medium font-semibold mb-3">Обучение</h3>
                    <ul className="space-y-2">
                        <li>Наши курсы</li>
                        <li>Преподаватели</li>
                        <li>Расписание</li>
                        <li>Отзывы</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-white font-medium font-semibold mb-3">Компания</h3>
                    <ul className="space-y-2">
                        <li>О нас</li>
                        <li>Новости</li>
                        <li>Партнёры</li>
                        <li>Вакансии</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-white font-medium font-semibold mb-3">Поддержка</h3>
                    <ul className="space-y-2">
                        <li>Центр помощи</li>
                        <li>Обратная связь</li>
                        <li>Контакты</li>
                        <li>Политика конфиденциальности</li>
                    </ul>
                </div>

                {/* Column 5 */}
                <div>
                    <h3 className="text-white font-medium font-semibold mb-3">Ресурсы</h3>
                    <ul className="space-y-2">
                        <li>Блог</li>
                        <li>Частые вопросы</li>
                        <li>Галерея</li>
                        <li>Карта сайта</li>
                    </ul>
                </div>
            </div>

            {/* Bottom row */}
            <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p className="mb-2 md:mb-0">© 2025 Robo School — Все права защищены.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-orange-500">Конфиденциальность</a>
                    <a href="#" className="hover:text-orange-500">Безопасность</a>
                    <a href="#" className="hover:text-orange-500">Условия</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
