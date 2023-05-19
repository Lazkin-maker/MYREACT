import React, { useState } from 'react';

type props = {
    icon: React.ReactNode;
}

export function ButtonWithSubElements({ icon }: props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div>
            <div>
                <button
                    className="flex items-center justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    onClick={handleClick}
                >
                    <div className="flex items-center">
                    <div className="w-6 h-6 mr-2">{icon}</div>  
                    <span>Toggle Sub Elements</span> 
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'transform rotate-180' : ''
                            }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="mt-4">
                        <p>This is a sub element 1.</p>
                        <p>This is a sub element 2.</p>
                        <p>This is a sub element 3.</p>
                    </div>
                )}
            </div>
        </div>
    )
}