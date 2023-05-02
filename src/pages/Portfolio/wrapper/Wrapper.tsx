import { WrapperNavBar } from "./styled-components";
import { MoonFill } from "react-bootstrap-icons";
import { SunFill } from "react-bootstrap-icons";
import { useState } from "react";

interface Props {
    children: JSX.Element | JSX.Element[];
}
export default function Wrapper({children}: Props) {
    const handleClickTheme = () => {
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
     }
    const [colorScheme, setColorScheme] = useState<string>('')
    return (
        <>
        <WrapperNavBar>
            
                <h2>
                    Cachorra
                </h2>
                <div className="links">
                    <a>About me</a>
                    <a>Skills</a>
                    <a>Contact</a>
                </div>
                <button id="switch" className="switch" onClick={handleClickTheme}>
                    {colorScheme === 'dark' ?  <SunFill size={25}/>:<MoonFill size={25}/> }
                </button>
                
            
        </WrapperNavBar> 
        <div>{children}</div>
        </>
        )
}