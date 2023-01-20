import react,{createContext,useState} from "react";

export const ThemeContext = createContext();

//above will be creating a context for us

//i/s of the comp we'll have a state and this state will utlimately the data we want to 
//share b/w diff components.

function ThemeContextProvider() {

    //this is the data that we want to provide to different comp ans share b/w em.
    const [islisththeme,setislighttheme] = useState(true);
    const [light,setlight] = useState({
        syntax:'#555',
        ui:'#ddd',
        bg:'#eee'
    });
    const [dark,setdark] = useState({
        syntax:'#ddd',
        ui:'#333',
        bg:'#555'
    });

    //We also have to provide the data to diff comp
    //This is gonna wrap our diff comp So that the data can be used inside those comp
    //the val prop is going to take in whatever data you want to provide to the comp that this wraps

  return (
    <ThemeContext.Provider
    //  value={

    // }
    >
    
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;