import React, { useState } from "react";
export const ModeProvider = React.createContext();
const DefMode = {background:"white",color:"black",border:"2px solid black",isMode:false}
export const ContextProvider = ({children})=>{
let[mode,setMode]=useState(DefMode)
return(
    <ModeProvider.Provider value={{mode,setMode}}>
        {children}
    </ModeProvider.Provider>
)
}