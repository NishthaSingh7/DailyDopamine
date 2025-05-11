import React, { useEffect, useState,useRef } from "react";
function PTimer(){
    const [timeLeft,setTimeLeft] = useState(5*60); // 5 mins in seconds
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null); // stores interval ID to stop later

    //Format seconds to mm:ss
    const formatTime = (seconds) =>{
        const min = Math.floor(seconds/60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    //Start Timer

    const startTimer = () =>{
        if(isRunning) return;
        setIsRunning(true);

        intervalRef.current = setInterval(()=>{
            setTimeLeft((prev) =>{
                if(prev<=1){
                    clearInterval(intervalRef.current);
                    setIsRunning(false);
                    alert("Time's up !");
                    return 0;
                }
                return prev -1;
            });
        },1000);
    }
    // Reset Timer
    const resetTimer = ()=>{
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTimeLeft(5*60);

    }
    //Stop Timer
    const stopTimer = ()=>{
        if(isRunning == false){
            disabled
        }
        clearInterval(intervalRef.current);
        setIsRunning(false);

    };
    //Cleanup on unmount
    useEffect(()=>{
        document.body.style.backgroundColor= "#D50B8B";
        
       return () => {
        clearInterval(intervalRef.current);
        document.body.style.backgroundColor = "#242424";
       };
    },[]);

    return(
        <div className="timerPage">
        <h1>Pomodoro Timer</h1>
        <h2 style={{position:"absolute",top:"52%",left:"50%",transform:"translate(-50%)",fontSize:"36px" }}>{formatTime(timeLeft)}</h2>
        <div style={{position:"absolute", top:"70%",left: "50%", transform: "translate(-50%, -50%)"}}>
            <button onClick={resetTimer} disabled={!isRunning}>Reset</button>
            <button onClick={startTimer} style = {{marginLeft:"10px"}}disabled = {isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}style = {{marginLeft:"10px"}}>Stop</button>

        </div>
      </div>
    )
}
export default PTimer;