import styled from 'styled-components'

export const IconContainer = styled.div`

display: grid;
height: 100%;
margin-top: 0;
place-items: center;
text-align: center;
margin-bottom: 50px;


ul{
    display :inline-flex ;
    list-style: none;
 
}

li{
    height: 100px;
    width:100px ;
    border: 2px solid #eeb53a;
    margin: 0 35px;
    border-radius: 50%;
    cursor: pointer;
    
}
li:hover{
    background:var(--main-color);
}
a{
    line-height: 100px;
    font-size: 50px;
    color: #eeb53a;
}
li:hover a{

    color: #666666;
}




`