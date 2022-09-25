import React from 'react';
import Stopwatch from "./components/Stopwatch"
import './App.css';
import useAPI from './hook/useAPI';
import{ getPosts, sendPosts} from "./action"

function App() {

  const { loading , error, data}=useAPI(getPosts);
  // const { loading , error, data,execute}=useAPI(sendPosts);jh
 

  return (
    <div className="App">
        {loading && <div>Loading</div>}
        {error && <div>error</div>}
        {data && <div>data</div>}
        
{/* <button onClick=>Send new post</button> */}
      {/* <Stopwatch/>   */}
    </div>
  );
}

export default App;
