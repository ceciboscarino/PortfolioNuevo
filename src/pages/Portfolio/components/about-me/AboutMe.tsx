
import { AboutMeContainer, AboutMeImg } from "."





function AboutMe() {
    return (
        <AboutMeContainer id="aboutme">
           <div className="title">
        
            <h1>About Me</h1>
            </div> 
            <div>
                <p>I come from a background in graphic design, where I've spent several years honing my creative skills and delivering designs.
However, as technology continues to evolve, I've realized the potential and impact of front-end development. I have decided to transition my career to become a Front-End Developer, specializing in React.js, JavaScript, TypeScript and Redux, for developing highly responsive and intuitive user interfaces for web applications.
During my journey, I have invested time and effort in upskilling myself through online courses, workshops, and personal projects. This has allowed me to gain practical experience in developing responsive and interactive web applications using modern web technologies.
I am seeking a role that challenges me to push my boundaries and learn from experienced developers. I believe that being part of a dynamic team, working on innovative and agile projects, will provide the ideal environment for my growth as a Front-End Developer.</p>
                
                <AboutMeImg  alt= "picture" src= "Img\ceci.png" />
            </div>
  
        </AboutMeContainer>
    )
}
export default AboutMe