import styled from 'styled-components';

export const AboutMeContainer = styled.div`


 padding-top: 30px;
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
    
    @media (min-width: 800px) {
    justify-content: flex-end;
    width: 99%;
    
}
    
}

h1{
    font-family: "Red Hat Mono Bold";
    color: var(--main-color);
    font-size: 10vw;
    margin-top: 10px;
    opacity: 60%;
    margin-bottom: 0px;
    @media (min-width: 1000px){
        
        margin-top: -20px;
    }
}

p{
    text-align: justify;
    width: 90%;
    @media (min-width: 800px) {
    
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
    padding: 0px;
    @media (min-width: 800px) {
    flex-direction: row;   
    justify-content: space-around;
    width: 100%;
    padding: 5px;
}
    
}


`;
export const  AboutMeImg = styled.img`

margin-top: 20px;

width: 70%;
height: auto;
@media (min-width: 800px) {
    width: 37%;  
    margin-top: 0px;
}



`;


