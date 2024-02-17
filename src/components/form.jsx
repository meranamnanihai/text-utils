import React, { useState } from "react";
import "./form.css";
function FunnyForm({text,setText}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="text-wrapper">

    
      <form id="paper" onSubmit={handleSubmit} className="w-full flex justify-center" > 
        
        <textarea
        className="w-[90%] xl:w-[45%]"
          placeholder="Enter something funny."
          id="text"
          name="text"
          
          style={{
            overflow: "hidden",
            wordWrap: "break-word",
            resize: "none",
            height: "360px",
            
            
          }}
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          
        />
        <br />
        
        
      </form>
      </div>
    
  );
}

export default FunnyForm;
