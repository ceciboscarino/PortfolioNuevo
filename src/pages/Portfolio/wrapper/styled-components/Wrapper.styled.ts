import styled from "styled-components";


export const WrapperNavBar = styled.nav`

display: flex;
flex-direction: row;

align-items: center;
padding: 6px;
justify-content: space-between;
box-shadow: var(--navbarShadow);
width: 100%;
height: auto;
position: fixed;
top: 0;
left: 0;
max-height: 70px;
min-height: 35px;
z-index: 100;   
/* background-color: var(--bg); */
 background-color: white ;
 justify-content: center;
 



a{
    text-decoration: none;
    
    color: black;
    

}
.links {
        
        display: flex;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        
        
        
        cursor: pointer;
        
        
        
       
        a {
            display: block;
            font-size: 15px;
            //border-bottom: solid 2px transparent;
            margin: 8px;
            font-weight: 500;
            
        
            &:hover {
                //border-bottom: solid 2px #222;
                color: var(--main-color);
                background-color: grey;

                padding: 5px;
                margin: 3px;

                flex-direction:row ;
                

            }
        }
       
        @media(min-width: 768px) {
            position: initial;
            flex-direction:row ;
           
            margin: 0;
            a {
                font-size: 20px;
                display: inline;
                padding-left: 5px;
                padding-right: 5px;
            }

        }
        

    }
   

   
  
`;

