import React, {useContext} from 'react'
import { AutorContext } from './Autor';
export default function Articole() {
  return (
    <>
    <div>Articole</div>
    <Articol1 />
    </>
  )
}
function Articol1() {
    return (
      <>
        <h1>Articol1</h1>
        <Partea1 />
      </>
    );
  }
  
  function Partea1() {
    return (
      <>
        <h1>Partea 1</h1>
        <ZonaA />
      </>
    );
  }
  
  function ZonaA() {
    const autor = useContext(AutorContext);
    return (
      <>
        <h1>Suntem in zona A</h1>
        <p>autorul este{autor}</p>
      </>
    );
  }
  
 