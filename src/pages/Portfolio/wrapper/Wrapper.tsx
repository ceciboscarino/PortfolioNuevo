import {  WrapperNavBar } from "./styled-components";
import { useEffect, useState } from "react";
import { ColorSchemeActive } from "../../../utilities/color-scheme-active";



interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function Wrapper({ children }: Props) {


  const [colorScheme, setColorScheme] = useState<string>(ColorSchemeActive())


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {

    
    console.log(colorScheme);    
    document.querySelector('html')?.setAttribute('data-theme', 'light')
    setColorScheme('light')
    localStorage.setItem('color-scheme', 'light')


  }, []
  )




  return (
    <>
      <WrapperNavBar>
        <div className={`links`}>
          <a onClick={scrollToTop}>About me</a>
          <a href="#skills" >Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </WrapperNavBar>

     
      <div>{children}</div>
    </>
  );
}