import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button"
const Sign: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const isFormValid = name.trim() !== "" && phone.trim() !== "" && email.trim() !== "";

    const handleClick = () => {
        if (!isFormValid) return;

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
    };

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-white w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <Button variant="outline"
                            type="button"
                            onClick={handleClick}
                            disabled={!isFormValid}
                            className="w-full px-4 py-5 rounded-sm bg-[#141024] hover:bg-[#2c2c38] transition disabled:opacity-50 disabled:cursor-not-allowed">Оставить заявку</Button>

                    {showAlert && (
                        <Alert className="bg-green-100 border border-green-400 text-green-800">
                            <CheckCircle className="h-5 w-5" />
                            <AlertTitle>Заявка отправлена!</AlertTitle>
                            <AlertDescription>
                                Мы свяжемся с вами в ближайшее время.
                            </AlertDescription>
                        </Alert>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Sign;
