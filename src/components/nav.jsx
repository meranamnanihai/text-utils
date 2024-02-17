import React, { useState } from "react";
import { Link } from "react-router-dom";
function Nav(props) {
  function handleChangeMode(e){
    console.log(e.target.innerText)
    if (e.target.innerText == "Dark-Mode") {
      e.target.innerText = "Light-Mode";
      setstyle(darkstyle)
      
      {document.title = "TextUtils Dark-Mode"}
      
    }
    else{
      e.target.innerText = "Dark-Mode";
      setstyle(lightstyle)
      {document.title = "TextUtils Light-Mode"}

    }
  }
  const darkstyle = {
    header: {
      color: '#F3F4F6',
      backgroundColor: '#374151',
    },
    svg: {
      fill: 'none',
      stroke: '#F3F4F6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      width: '24px',
      height: '24px',
      marginRight: '10px',
      filter: "invert(1)",
    },
    navButton: {
      backgroundColor: '#6B7280',
      color: '#F3F4F6',
    },
    navButtonHover: {
      backgroundColor: '#4B5563',
    },
    link: {
      color: '#F3F4F6',
    },
    linkHover: {
      color: '#D1D5DB',
    },
    btn :{
      color: "black",
    }
  };
  const lightstyle = {
    header: {
      color: "#374151",
      backgroundColor: "#F3F4F6",
    },
    svg: {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      width: "24px",
      height: "24px",
      marginRight: "10px",
    },
    navButton: {
      backgroundColor: "#E5E7EB",
      color: "#374151",
    },
    navButtonHover: {
      backgroundColor: "#D1D5DB",
    },
    link: {
      color: "#374151",
    },
    linkHover: {
      color: "#4B5563",
    },
    btn :{
      color: "grey",
    }
  }
  
  const [style,setstyle] = useState(lightstyle)
  return (
    <header className="text-gray-900 bg-gray-100 body-font cursor-pointer" style={style.header} >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" style={style.svg} >
          <path d="M14.9805 7.01562C14.9805 7.01562 15.4805 7.51562 15.9805 8.51562C15.9805 8.51562 17.5687 6.01562 18.9805 5.51562" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9.99485 2.02141C7.49638 1.91562 5.56612 2.20344 5.56612 2.20344C4.34727 2.29059 2.01146 2.97391 2.01148 6.9646C2.0115 10.9214 1.98564 15.7993 2.01148 17.744C2.01148 18.932 2.7471 21.7034 5.29326 21.8519C8.3881 22.0324 13.9627 22.0708 16.5205 21.8519C17.2051 21.8133 19.4846 21.2758 19.7731 18.7957C20.072 16.2264 20.0125 14.4407 20.0125 14.0157" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M21.9999 7.01562C21.9999 9.77705 19.7591 12.0156 16.995 12.0156C14.231 12.0156 11.9902 9.77705 11.9902 7.01562C11.9902 4.2542 14.231 2.01562 16.995 2.01562C19.7591 2.01562 21.9999 4.2542 21.9999 7.01562Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6.98047 13.0156H10.9805" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6.98047 17.0156H14.9805" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" style={style.link}>
          <span className="ml-3 text-xl">{props.title}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center w-full xl:w-max gap-3 xl:mr-5">
          <Link to="/" className=" hover:text-gray-700" style={style.link}>Home</Link>
          <Link to="/contact" className=" hover:text-gray-700" style={style.link}>Contact us</Link>
          
        </nav>
        <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" style = {style.btn}onClick ={handleChangeMode}>Dark-Mode
          
        </button>
      </div>
    </header>
  );
}

export default Nav;
