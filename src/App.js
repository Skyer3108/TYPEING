
import React from "react";

import "./style.css"



const App=()=>{
  

  // const text = "The quick brown fox jumps over the lazy dog.";
  //   const [input, setInput] = useState("");
  //   const [typingSpeed, setTypingSpeed] = useState(0);
  //   const [startTime, setStartTime] = useState(0);
  //   const inputRef = useRef(null);
  
  //   useEffect(() => {
  //     if (input === text) {
  //       const endTime = Date.now();
  //       const elapsedTime = (endTime - startTime) / 1000; // in seconds
  //       const wordsTyped = text.split(" ").length;
  //       const speed = Math.round((wordsTyped / elapsedTime) * 60); // words per minute
  //       setTypingSpeed(speed);
  //     }
  //   }, [input, text, startTime]);
  



  return (
   <div className="App">
    {/* <div className="container">
        <h1>Typing Speed Test</h1>
        <p id="quote">Type the following text:</p>
        <p id="text">{text}</p>
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing here..."
          rows="4"
        ></textarea>
        <button onClick={startGame}>Start</button>
        <p id="result">
          Typing speed: {typingSpeed} WPM
        </p>

      </div> */}
      
        <div className="nav">
          <div>
          <p className="type">TypeCat</p>
          <p className="down">15</p>
          </div>
          <div>
          <p>img</p>
          <p className="down">15s 30s 60s</p>
          </div>


         
          
        
         


        </div>


        <p  className="text-area" ></p>

        {/* <textarea></textarea> */}
      

        <div className="btn-1">
         <button className="btn-color">esc</button>
         <span>- reset</span>
         </div>

         <div className="btn-2">
         <button className="btn-color">10</button> <button className="btn-color">50</button> <button className="btn-color">80</button> <button className="btn-color">100</button>
          
         <span>  - no.of words</span>
         </div>


         <div className="foot">
          <div>
          <span>git</span>
          <span>fb</span>
          <span>email </span>
          <span>insta</span>

          </div>
          

          <div >

          <input placeholder="Coloured-Blue"/>
            <button >
              droupdown
            </button>
          </div>

         </div>

       
      
   </div>
  )
}

export default App;
