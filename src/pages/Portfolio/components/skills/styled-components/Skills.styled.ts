import styled from 'styled-components';


export const SkillsContainer = styled.div`

height: auto;

background-color:#B3B3B3 ;


display: flex;
flex-direction: column;


.margintop{
   display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
   
    background:  #E6E6E6;
    padding-top:20px ;
    padding-bottom:25px ;
@media (min-width: 800px) {
    background :var(--main-color);
transition: all 0.5s ease;

&:hover {
  background:  #B3B3B3;}
}
}

.allskills{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    padding-top: 5px;
    margin-bottom: 50px;
    @media (min-width: 900px) {
    flex-direction: row;   
    padding-top: 30px;
}
}

.title{
    width: 97%;
    height: auto;
    display: flex;
    justify-content: center;
    bottom: 0;
    margin-bottom: 0px;
    @media(min-width:800px) {
        justify-content: flex-start;  
        margin-bottom: -80px;
}
    
}

h1{
    font-family: "Red Hat Mono Bold";
    color: var(--main-color);
    top: 0;
    font-size: 10vw;
    margin-top: -7px;
    opacity: 70%;
    @media (min-width: 1000px){
        margin-top: -35px; 
    }
}

p{
    color:var(--main-color);

}
.nice-button{
    padding-bottom: 50px;
    width: 100%;
    height: auto;
  
    /* @media(min-width:850px){ */
     width: 94%;
    height: auto;
    padding-bottom: 50px;
    /* margin-left: 400px;
     */
    
   
}


`;