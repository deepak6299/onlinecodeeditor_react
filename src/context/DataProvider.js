import { createContext, useState } from "react";


export const DataContext=createContext()

const DattaProvider=({children})=>{
const [html,setHtml]=useState('')
const [css,setCss]=useState('')
const [js,setJs]=useState('')


    return(

        <DataContext.Provider value={{
          html,setHtml,css,setCss,js,setJs
        }}>
         {children}
        </DataContext.Provider>
    )
}

export default DattaProvider;