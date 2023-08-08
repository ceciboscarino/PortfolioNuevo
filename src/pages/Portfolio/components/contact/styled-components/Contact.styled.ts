import styled from 'styled-components';


export const ContactContainer = styled.div`

height: auto;
background-color: #666666;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;

h1{
    font-family: "Red Hat Mono Bold";
    color: var(--main-color);
    top: 0;
    font-size: 10vw;
margin-top:-10px;
    opacity: 70%;
    @media (min-width: 1000px){
        margin-top: -45px; 
    }
}



`;
