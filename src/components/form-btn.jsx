import React from 'react'

function formbtn({text, value ,setvalue,change,setAlert}) {
  
  return (
    
    <div onClick={()=>{
      
      if (change == 'UP') {
        setvalue(value.toUpperCase());
        setAlert("Text Changed to Uppercase");
      }
      else if (change == 'low') {
        setvalue(value.toLowerCase());
        setAlert("Text Changed to Lowercase");
      }
      else if (change == 'RS'){
        setvalue(value.replaceAll(" ",""));
        setAlert("Extra spaces removed");
      }
      else if (change == "COPY"){
        navigator.clipboard.writeText(value);
        setAlert("Text copied");
      }
      
    }} className="btn bg-blue-400 w-30 xl:p-5 p-3 xl:text-2xl text-lg h-5 flex justify-center items-center text-white hover:bg-blue-700 cursor-pointer duration-500">
        {text}
    </div>
    
  )
}

export default formbtn