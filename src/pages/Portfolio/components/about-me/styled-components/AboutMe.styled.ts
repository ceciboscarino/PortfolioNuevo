import styled from 'styled-components';

export const AboutMeContainer = styled.div`



height: auto;
width: 100%;
transition: all 1s ease-in;
background:  #E6E6E6;
@media (min-width: 800px) {
    background :var(--main-color);
transition: all 0.5s ease;

&&:hover {
  background:  #E6E6E6;}
}


.title{
    width: 98%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    @media (min-width: 800px) {
    justify-content: flex-end;
    width: 97%;
}
    
}

h1{
    font-family: "Red Hat Mono Bold";
    color: var(--main-color);
    position: absolute;
    top: 0;
    font-size: 150px;
    margin-top: -20px;
    opacity: 60%;
    
    
}

p{
    text-align: justify;
    width: 90%;
    @media (min-width: 800px) {
    flex-direction: row;  
    width: 40%; 
    color: #666666;
}
}

div{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    display : flex;
    flex-direction: column;
    z-index: 1;
    padding: 5px;
    @media (min-width: 800px) {
    flex-direction: row;   
    justify-content: space-around;
    padding: 25px;
}
    
}


`;
export const  AboutMeImg = styled.img`

margin-top: 20px;

width: 70%;
height: auto;
@media (min-width: 800px) {
    width: 37%;  
    margin-top: 50px;
}



`;


