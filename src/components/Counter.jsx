import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if(isRunning){
            timer = setInterval(() => {
                setCount((pre) => pre + 1)
            }, 1000)
        }
        return () => clearInterval(timer);
    },[isRunning]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    };

  return (
    <div className='flex items-center justify-center mt-10'>
        <div className='mx-auto bg-cyan-200 p-5 rounded'>
            <h1 className='font-bold text-center text-2xl'>Timer</h1>
            <p className='font-bold text-center text-2xl m-3'>Timer {count}s</p>
            <div className='flex justify-between items-center space-x-4'>
                <button onClick={handleStart} className='px-4 py-2 bg-green-500 rounded text-white cursor-pointer'>Start</button>
                <button onClick={handleStop} className='px-4 py-2 bg-red-500 rounded text-white cursor-pointer'>Stop</button>
                <button onClick={handleReset} className='px-4 py-2 bg-gray-500 rounded text-white cursor-pointer'>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;