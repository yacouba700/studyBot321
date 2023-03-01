import { View, Text } from 'react-native';
import React, {useContext, createContext, useState, useEffect} from "react";


const GlobalContext = createContext();

export const GlobalContextProvider = ({children})=>{
    const [activeSpeech, setActiveSpeech] = useState(true);
   
        
    return( 
            <GlobalContext.Provider value={{
                activeSpeech, setActiveSpeech
            }}> 
                {children}
           </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);


