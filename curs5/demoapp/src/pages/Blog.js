import React, {useState, useEffect }  from 'react'

export default function Blog() {
  const [count, setCount] = useState(0);
  const myStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  
  useEffect(() => {
    document.title = `Pagina de blog`; 
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);
  
  return (
    <div style={myStyle}>Blog  {count}</div>
  )
}