import { Circle } from "./components";
import { SkillsContainer } from ".";
import { Button } from "./components/button";



function Skills() {

  const customStyle11 = {
    "--i": "260",
  } as React.CSSProperties;

  const customStyle12 = {
    "--i": "230",
  } as React.CSSProperties;

  const customStyle13 = {
    "--i": "280",
  } as React.CSSProperties;
  const customStyle14 = {
    "--i": "250",
  } as React.CSSProperties;



  return (
    <SkillsContainer id="skills">
      <div className="margintop">
        <p>“If you want something you never had, you have to do something you’ve never done.” Thomas Jefferson</p>
      </div>
      <div className="title">
        <h1>
          Skills
        </h1>
        </div>
        <div className="nice-button">
      <Button/>
        </div>
      <div className="allskills">

        <Circle percentage={700} style={customStyle11} skill={"Html"} />
        <Circle percentage={900} style={customStyle12} skill={"CSS"} />
        <Circle percentage={200} style={customStyle13} skill={"JavaScript"} />
        <Circle percentage={200} style={customStyle14} skill={"React"} />
      </div>




    </SkillsContainer>
  )
}
export default Skills