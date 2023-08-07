import { BgDiv, WrapperNavBar } from "./styled-components";
import { useEffect, useState } from "react";
import { ColorSchemeActive } from "../../../utilities/color-scheme-active";
// import BurguerButton from './../../../components/BurgerButton/BurgerButton';


interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function Wrapper({ children }: Props) {


  const [colorScheme, setColorScheme] = useState<string>(ColorSchemeActive())

  const [clicked, setClicked] = useState<boolean>(false)



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {

    setClicked(false);
    console.log(colorScheme);    
    document.querySelector('html')?.setAttribute('data-theme', 'light')
    setColorScheme('light')
    localStorage.setItem('color-scheme', 'light')


  }, []
  )




  return (
    <>
      <WrapperNavBar>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={scrollToTop}>About me</a>
          <a href="#skills" >Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </WrapperNavBar>

      <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      <div>{children}</div>
    </>
  );
}