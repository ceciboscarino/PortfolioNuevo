

import { Wrapper } from "./wrapper/"
import { lazy } from 'react'

const AboutMe = lazy(() => import('./components/about-me/AboutMe'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));






function Portfolio() {
  return (
    

    <Wrapper >
       <AboutMe/>
       <Skills/>
       <Contact/>
       <Footer/> 
    </Wrapper>
    )

}
export default Portfolio