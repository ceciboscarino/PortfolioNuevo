import { CircleContainer, FatherCircleContainer, NameSkillContainer } from "./styled-components";
import { useEffect, useState } from "react";

interface circletype {
    percentage: number;
    style: React.CSSProperties;
    skill: string;
}


export default function Circle({ percentage, style, skill }: circletype) {


    const [perc, setPerc] = useState(0)
    setPerc(percentage)


    useEffect(() => {
        let number: HTMLElement | null = document.getElementById("number");
        let counter = 0;
        setInterval(() => {
            if (counter == perc) {
                clearInterval(0);
            } else {
                counter += 1;
                if (number) {

                }
            }
        }, 30);
    }, []);


    return (
        <FatherCircleContainer>
            <CircleContainer>
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            {/* <div className="text">{skill}</div> */}
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#FAFAAD" />
                                <stop offset="100%" stop-color="#eeb53a" />
                            </linearGradient>
                        </defs>
                        <circle style={style} cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </CircleContainer>
            <NameSkillContainer>
                <p className="text">{skill}</p>
            </NameSkillContainer>
        </FatherCircleContainer>
    )
}