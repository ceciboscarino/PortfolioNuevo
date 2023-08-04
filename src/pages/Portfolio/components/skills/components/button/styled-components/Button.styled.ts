import styled from 'styled-components';


export const ButtonContainer = styled.div`

a{
    text-decoration: none;
}
.button{
    position: relative;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

}
.button::before {
content:"";
position: absolute;
top: 50%;
transform: translate(100%, -50%);
width: 65px;
height: 65px;
background-color: var(--main-color);
border-radius: 50px; 
 transition: transform .25s .25s cubic-bezier (0,0,0.5,2), width .25s cubic-bezier (0,0,0.5,2),;
}
.button:hover::before{

    transform: translate(-5%, -50%);
    width: 30%;
    transition: transform .25s cubic-bezier (0,0,0.5,2), width .25s .25s cubic-bezier (0,0,0.5,2),;
}

.button:hover .button-img-body{
    transform: translateX(5px);
}



.button-title{
z-index: 2; 
color: #666666;
letter-spacing: 4px;

}
.button-img{
    display: block;
    width: 20px;
    height: 20px;
}
button-img-body{
    z-index: 2;
    transition: transform .25s .4s cubic-bezier(0,0,0.5,2);   
}

`