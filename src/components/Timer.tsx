
import React, { useEffect, useState } from "react";

interface TimerProps {
    initialTime: number;
}

const Timer = ({ initialTime }: TimerProps) => {
    const [time, setTime] = useState<number>(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                const newTime = prevTime - 1;
                if (newTime === 0) {
                    clearInterval(timer);
                }
                return newTime;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [initialTime]);

    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-black w-40 h-40 rounded-md flex items-center justify-center">
                <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 border-red-500">
                    <h4 className="text-xl font-bold text-white">{formatTime(time)}</h4>
                    <h4 className="text-l font-bold text-white">hh:mm:ss</h4>
                </div>
            </div>
        </div>
    );
};

export default Timer;