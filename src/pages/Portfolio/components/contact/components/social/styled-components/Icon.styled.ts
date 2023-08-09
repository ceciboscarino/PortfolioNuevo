import styled from 'styled-components'

export const IconContainer = styled.div`

display: flex;
height: 100%;
margin-top: 0;
place-items: center;
text-align: center;
margin-bottom: 50px;
margin-left: -40px;
@media(min-width:1000px) {
    margin-left: 0px;}


ul{
    display :inline-flex ;
    list-style: none;
 
}

li{
    height: 60px;
    width:60px ;
    border: 2px solid #eeb53a;
    margin: 0 15px;
    border-radius: 50%;
    cursor: pointer;
    @media(min-width:1000px) {
        height: 100px;
    width:100px ; 
    margin: 0 35px;
    
}}
li:hover{
    background:var(--main-color);
}
a{
    line-height: 60px;
    font-size: 30px;
    color: #eeb53a;
    @media(min-width:1000px) {
        line-height: 100px;
    font-size: 50px; 
}
li:hover a{

    color: #666666;
}

}


`