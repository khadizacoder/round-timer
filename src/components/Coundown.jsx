import { useRef, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Coundown = () => {

    const [timer, setTimer] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null); // অডিও রেফারেন্স

    const handleStart = () => {
        setIsPlaying(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    const handleStop = () => {
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }

    const handleReset = () => {
        setIsPlaying(false);
        setTimer(prev => prev + 1);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="flex flex-col items-center space-y-5 py-10">
            {/* অডিও এলিমেন্ট */}
            <audio ref={audioRef} src="/timer.mp3" />

            <CountdownCircleTimer
                key={timer}
                isPlaying={isPlaying}
                duration={10}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => {
                    setIsPlaying(false)
                    setTimer(prev => prev + 1);
                    return { shouldRepeat: false }
                }}
            >
                {({ remainingTime }) => <div className="text-xl font-bold">{remainingTime} sec</div>}
            </CountdownCircleTimer>

            <div className="flex gap-4">
                <button onClick={handleStart} className="bg-green-600 text-white px-4 py-2 rounded">Start</button>
                <button onClick={handleStop} className="bg-yellow-500 text-white px-4 py-2 rounded">Stop</button>
                <button onClick={handleReset} className="bg-red-600 text-white px-4 py-2 rounded">Reset</button>
            </div>
        </div>
    )
}

export default Coundown