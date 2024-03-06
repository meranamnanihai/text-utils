import React from 'react'
function upsideDownText(text) {
  const upsideDownChars = {
      a: '\u0250',
      b: 'q',
      c: '\u0254',
      d: 'p',
      e: '\u01DD',
      f: '\u025F',
      g: '\u0183',
      h: '\u0265',
      i: '\u0131',
      j: '\u027E',
      k: '\u029E',
      l: '\u05DF',
      m: '\u026F',
      n: 'u',
      r: '\u0279',
      t: '\u0287',
      v: '\u028C',
      w: '\u028D',
      y: '\u028E',
      '.': '\u02D9',
      '[': ']',
      '(': ')',
      '{': '}',
      '?': '\u00BF',
      '!': '\u00A1',
      '\'': ',',
      '<': '>',
      '_': '\u203E',
      ';': '\u061B',
      '(': ')',
      ')': '(',
      '\u203F': '\u2040',
      '\u2045': '\u2046',
      '\u2234': '\u2235',
      '\r': '\n'
  };

  return text.split('').reverse().map(char => upsideDownChars[char] || char).join('');
}
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
      else if (change == "UPSIDE"){
        setvalue(upsideDownText(value));
        
      }
      
    }} className="btn bg-blue-400 w-30 xl:p-5 p-3 xl:text-2xl text-lg h-5 flex justify-center items-center text-white hover:bg-blue-700 cursor-pointer duration-500">
        {text}
    </div>
    
  )
}

export default formbtn