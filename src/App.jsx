// import { useState } from 'react'

import { useState } from 'react'
import './App.css'

function App() {
 const[height,setHeight] = useState("");
 const[weight,setWeight] = useState("");
 const[bmi,setBMI] = useState(null);
 const[status,setStatus] = useState("");
const [errorMessage,setErrorMessage] = useState("")
const calculateBMI = ()=>{
  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);
  if(isValidHeight && isValidWeight ){const heightInMeter = height / 100;
  const bmiValue = weight/(heightInMeter * heightInMeter);
  setBMI(bmiValue.toFixed(2));
  if(bmiValue <18.5){
    setStatus("UnderWeight")
  }else if(bmiValue >=18.5 &&bmiValue <24.9){
    setStatus("Normal")
  }else if(bmiValue >=25.0 &&bmiValue <29.0){
    setStatus("OverWeight")
  }else{
    setStatus("Obese")
  }
  setErrorMessage("")
}
  else{
setBMI(null)
setStatus(null)
setErrorMessage("Please enter valid numeric values for height and weight")
  }
}
const clearAll = () => {
  setHeight("");
  setWeight("");
  setErrorMessage("");
  setBMI(null)
}
  return (
    <>
  <div className="bmi-container">
    <div className="box"></div>
    <div className="data">
      <h1>BMI Calculator</h1>
      <div>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <label htmlFor='height'>Height(cm) : </label>
        <input type="text" id = "height" value={height} onChange={(e)=> setHeight(e.target.value)} />
      </div>
      <div>
        <label htmlFor='weight'>Weight(kg) : </label>
        <input type="text" id = "Weight" value={weight} onChange={(e)=> setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button onClick={clearAll}>Clear</button>
     {bmi!==null && ( <div className="result">
        <p>Your BMI is : {bmi}</p>
        <p>Status : {status}</p>
      </div>)}
    </div>
  </div>
    </>
  )
}

export default App
