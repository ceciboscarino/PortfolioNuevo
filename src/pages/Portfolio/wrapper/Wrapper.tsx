import { WrapperNavBar } from "./styled-components";
import { MoonFill } from "react-bootstrap-icons";
import { SunFill } from "react-bootstrap-icons";
import { useState } from "react";
import { ColorSchemeActive } from "../../../utilities/color-scheme-active";


interface Props {
    children: JSX.Element | JSX.Element[];
}
export default function Wrapper({children}: Props) {
    const allElements = document.querySelectorAll("*");
    
    const [colorScheme, setColorScheme] = useState<string>(ColorSchemeActive())
    const handleClickTheme = () => {

        allElements.forEach((element) => {
          element.classList.add("transition");
          setTimeout(() => {
            element.classList.remove("transition");
          }
          , 1000);
          
        });
    
        if (colorScheme === 'dark') {
          
    
          document.querySelector('html')?.setAttribute('data-theme', 'light' )
          setColorScheme('light')
          localStorage.setItem('color-scheme', 'light')
          
        } else {
          
          document.querySelector('html')?.setAttribute('data-theme', 'dark')
          setColorScheme('dark')
          localStorage.setItem('color-scheme', 'dark')
          
        }
      }

    return (
        <>
        <WrapperNavBar>
            
                <h2>
                    Cachorra
                </h2>
                <div className="links">
                    <a href="#aboutme">About me</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
                <button id="switch" className="switch" onClick={handleClickTheme}>
                    {colorScheme === 'dark' ?  <SunFill size={25}/>:<MoonFill size={25}/> }
                </button>
                
            
        </WrapperNavBar> 
        <div>{children}</div>
        </>
        )
}