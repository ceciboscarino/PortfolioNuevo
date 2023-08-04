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
    padding-top: 20px;
    margin-bottom: 50px;
    @media (min-width: 900px) {
    flex-direction: row;   
}
}

.title{
    width: 97%;
    height: auto;
    display: flex;
    justify-content: center;
    bottom: 0;
    margin-bottom: -80px;
    media (min-width: 800px) {
        justify-content: flex-start;  
}
    
}

h1{
    font-family: "Red Hat Mono Bold";
    color: var(--main-color);
    top: 0;
    font-size: 150px;
    margin-top: -45px;
    opacity: 70%;
    

}

p{
    color:var(--main-color);

}
.nice-button{
    padding-bottom: 50px;
    width: 100%;
    height: auto;
    media (min-width: 800px){

    width: 94%;
    height: auto;
    padding-bottom: 50px;
    margin-left: 400px;
    }
    
   
}


`;