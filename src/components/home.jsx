import { useState, useEffect } from "react";

import Nav from "./nav";
import Form from "./form";
import FormBtn from "./form-btn";
import Footer from "./footer";
import Alert from "./alert";

function convertMinutesToMinutesAndSeconds(minutes) {
  // Convert minutes to seconds
  var totalSeconds = Math.round(minutes * 60);

  // Extract minutes and seconds
  var calculatedMinutes = Math.floor(totalSeconds / 60);
  var calculatedSeconds = totalSeconds % 60;


  // Round off seconds
  calculatedSeconds = Math.round(calculatedSeconds);

  return calculatedMinutes + " minutes and " + calculatedSeconds + " seconds";
}

function App() {
  const [FormValue, setFormValue] = useState("");


  const [alert,setAlert] = useState(null);
  useEffect(() => {
    setFormValue(FormValue)
    console.log(FormValue)

  }, [FormValue])
function dismissalert(){
  setTimeout(() => {
    setAlert(null)
  }, 2000)
  
}

  return (
    <>
      
       
      
      <Nav title="TextUtils" />
      {
          alert != null ? (
            <>
            <Alert msg = {alert}/>
             {dismissalert()}
            </>
            
          ) : null
           
          
        }
        <br />


      <div className="formwrapper flex justify-center flex-col items-center  ">
        <h1 className="xl:text-3xl text-xl text-white mb-5">Enter the text to analyse</h1>
        <Form text={FormValue} setText={setFormValue} />
      </div>

      <div className="btn-wraper flex justify-center w-[100%] mt-5 mb-5">
        <div className="btns flex  flex-wrap gap-5 justify-center px-[11px]">
          <FormBtn text="UpperCase" value={FormValue} setvalue={setFormValue} change="UP" setAlert={setAlert}/>
          <FormBtn text="LowerCase" value={FormValue} setvalue={setFormValue} change="low"  setAlert={setAlert} />
          <FormBtn text="Remove Extra Spaces" value={FormValue} setvalue={setFormValue} change="RS"  setAlert={setAlert} />
          <FormBtn text="Copy text" value={FormValue} setvalue={setFormValue} change="COPY"  setAlert={setAlert} />
          <FormBtn text="Upside down" value={FormValue} setvalue={setFormValue} change="UPSIDE"  setAlert={setAlert} />
        </div>
      </div>

      <hr />
      <div className="text-summary flex justify-center flex-col items-center mb-5 mt-5">
        <h1 className="text-3xl text-white mb-2">Text summary</h1>
        <h1 className="text-xl text-white mb-2">Your text has {FormValue.length} characters</h1>
        {
          FormValue.length == 0 ? (
            <h1 className="xl:text-xl text-lg text-center text-white mb-2">Your text has 0 words</h1>
          ) : (
            <h1 className="xl:text-xl text-lg text-center text-white mb-2" >Your text has {FormValue.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words</h1>
          )
        }
        <h1 className="xl:text-xl text-lg text-center text-white mb-2">Time spend for reading = {convertMinutesToMinutesAndSeconds(((FormValue.replace(/\n/g, " ").split(' ').filter(value => value != "").length) * 0.50) / 60)}</h1>
      </div>

      <hr />
      <div className="preview flex flex-col items-center mb-5 mt-5">
        <h1 className="text-3xl text-white mb-2">Text - Preview</h1>
        <p className="text-white w-[60%] "> {FormValue} </p>
      </div>
      <hr className="mb-5" />
      <Footer></Footer>
    </>
  );
}

export default App;
