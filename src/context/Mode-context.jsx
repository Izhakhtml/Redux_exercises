import React, { useState } from "react";
export const ModeProvider = React.createContext();
const Modes ={background:"white",color:"black",border:"2px solid black",isMode:false}
export const ContextProvider = ({children})=>{
let[mode,setMode]=useState(Modes)
return(
    <ModeProvider.Provider value={{mode,setMode}}>
        {children}
    </ModeProvider.Provider>
)
}