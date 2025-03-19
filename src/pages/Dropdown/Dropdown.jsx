import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("По последним отзывам");

    const options = [
        "По релевантности",
        "По количеству отзывов",
        "По последним отзывам",
    ];

    return (
        <div className="relative w-64 z-10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full p-3 border rounded-lg bg-white shadow-md"
            >
                {selected}
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {isOpen && (
                <ul className=" absolute w-full mt-1 bg-white border rounded-lg shadow-md">
                    {options.map((option) => (
                        <li
                            key={option}
                            className={`p-3 cursor-pointer ${
                                selected === option ? "bg-red-100 text-red-500" : "hover:bg-gray-100"
                            }`}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


