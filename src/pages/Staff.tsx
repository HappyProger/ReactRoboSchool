import React, { useState } from 'react';
import { Pagination } from '@mui/material';
// Импорт изображений
import teacher1 from '../assets/teachers/teacher1.jpg';
import teacher2 from '../assets/teachers/teacher2.jpg';
import teacher3 from '../assets/teachers/teacher3.jpg';
import teacher4 from '../assets/teachers/teacher4.jpg';
import teacher5 from '../assets/teachers/teacher5.jpg';
import teacher6 from '../assets/teachers/teacher5.jpg';

interface Teacher {
    name: string;
    image: string;
}

const teachers: Teacher[] = [
    { name: 'Ирина Лайм', image: teacher1 },
    { name: 'Марина Орлова', image: teacher2 },
    { name: 'Максим Петров', image: teacher3 },
    { name: 'Константин Назаров', image: teacher4 },
    { name: 'Лиза Весенняя', image: teacher5 },
    { name: 'Лиза Весенняя', image: teacher5 },
    { name: 'Лиза Весенняя', image: teacher5 },
    { name: 'Лиза Весенняя', image: teacher5 },
    { name: 'Максат Р.', image: teacher6 },
    { name: 'Максат Р.', image: teacher6 },
    { name: 'Максат Р.', image: teacher6 },
];

const ITEMS_PER_PAGE = 6;

const Staff: React.FC = () => {
    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const paginatedTeachers = teachers.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <section id='staff' className="py-12 px-4 py-24 text-center bg-[#f8f8f8]">
            <h2 className="text-4xl font-bold mb-12 text-[#141024] text-center">Профессиональные тренеры</h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                {paginatedTeachers.map((teacher, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:shadow-xl"
                    >
                        <img
                            src={teacher.image}
                            className="w-40 h-40 object-cover rounded-sm mb-4"
                        />
                        <h3 className="text-left text-xl font-semibold mb-2">{teacher.name}</h3>
                        <button className="mt-auto text-orange-600 px-2 py-1 ">
                            Подробнее
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Pagination
                    count={Math.ceil(teachers.length / ITEMS_PER_PAGE)}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                />
            </div>
        </section>
    );
};

export default Staff;
