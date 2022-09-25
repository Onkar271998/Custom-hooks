
// import useCountdoen from "../hooks/useCountdoen";
import useCountdown from "../hook/useCountdown";


const Stopwatch=()=>{
  
    const{time,starts,pause,reset}=useCountdown()


return(
    <div>

        <h1>StopWatch{time}</h1>
        <button onClick={starts}> start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>



    </div>
)
}

export default Stopwatch;