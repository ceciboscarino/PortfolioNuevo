import { Contact } from "./components/contact"
import { AboutMe } from "./components/about-me"
import { Skills } from "./components/skills"
import { Wrapper } from "./wrapper/"

function Portfolio() {
  return (
    <Wrapper>
       <AboutMe/>
       <Skills/>
       <Contact/>
    </Wrapper>
  )
}
export default Portfolio