import React,{ useState, createContext} from 'react'
import Articole from './Articole'
export const AutorContext = createContext();
export default function Autor() {
    const [autor] = useState("Link Academy");
  return (
    <AutorContext.Provider value={autor}>
      <h1>{`Hello ${autor}!`}</h1>
      <Articole />
    </AutorContext.Provider>
  )
}