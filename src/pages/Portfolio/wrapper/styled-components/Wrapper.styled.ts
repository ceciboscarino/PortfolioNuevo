import styled from "styled-components";


export const WrapperNavBar = styled.nav`

display: flex;


align-items: center;
padding: 6px;
justify-content: space-between;
box-shadow: var(--navbarShadow);
width: 100%;
position: fixed;
top: 0;
left: 0;
max-height: 70px;
z-index: 100;   
/* background-color: var(--bg); */
 background-color: white ;
 justify-content: center;


h2{
    font-weight: 700;
  
    margin-left: 1%;
  
}

a{
    text-decoration: none;
    
    color: black;
    

}
.links {
        
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        cursor: pointer;
        
        
       
        a {
            display: block;
            font-size: 3rem;
            //border-bottom: solid 2px transparent;
            margin: 8px;
            font-weight: 500;
            
        
            &:hover {
                //border-bottom: solid 2px #222;
                color: var(--main-color);
                background-color: grey;

                padding: 5px;
                margin: 3px;

                
                

            }
        }
       
        @media (min-width: 768px) {
            position: initial;
            flex-direction: column;
           
            margin: 0;
            a {
                font-size: 1rem;
                display: inline;
            }

        }
        

    }
    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 100px;
        left: 0;
        right: 0;
        text-align: center;
        
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }

    .switch {
        background-color: var(--main-color);
        border: none;
        cursor: pointer;
              
    }
    /* .burguer {
        @media (min-width: 768px) {
            display: none;
         }
    } */
`;

export const BgDiv = styled.div `
position: absolute;
background-color: var(--main-color);
top: -100px;
left: 100%;
right: -3000;
width: 0;
height: 100%;
z-index: 4;
transition: all .6s ease;

&.active {
    border-radius: 0 0 0 0;
    top: 0;
    right: 0;
    width: 250px;
    height: 175vh;
    max-width: 250px;
    transform: translateX(-250px);
    
}
`
