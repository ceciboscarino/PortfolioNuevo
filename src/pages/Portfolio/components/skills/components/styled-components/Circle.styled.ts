import styled from 'styled-components';

export const FatherCircleContainer = styled.div`

display:flex ;
flex-direction: column;
`

export const CircleContainer = styled.div`



.skill{
    width: 160px;
    height: 160px;
    position: relative;
    
}
.outer{
    
    height: 120px;
    width: 120px;
    border-radius: 50%;
    padding: 20px;
box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
-6px -6px 10px -1px rgba(255,255, 255,0.7)
}
.inner{
    height: 120px;
    width: 120px;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0, 0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0px rgba(255, 255, 255,1), 
                0.5px 0.5px 0px rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0, 0,0,0.05) ;
}


circle{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 472;
    stroke-dashoffset: 472;
    animation: anim 2s linear forwards;
}
svg{
    position: absolute;
    top: 0;
    left: 0;
}

@keyframes anim{
    100%{
        stroke-dashoffset: var(--i);
    }
}
`
export const NameSkillContainer = styled.div`
p{
color: #555;
    text-align: center;
    font-family:"Red Hat Mono Bold" ;
    font-size: larger;
}
`

;
