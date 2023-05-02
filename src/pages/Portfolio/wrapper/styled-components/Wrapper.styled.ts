import styled from "styled-components";


export const WrapperNavBar = styled.nav`

display: flex;


align-items: center;
padding: .4rem;
justify-content: space-between;
box-shadow: var(--navbarShadow);
width: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 100;   
background-color: var(--bg);

h2{
    font-weight: 700;
    font-size: 10 rem;
  
}

a{
    text-decoration: none;
    
    color: black;
    ;

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
            margin: 5px;
            font-weight: 500;
        
            &:hover {
                //border-bottom: solid 2px #222;
                
                
            }
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                display: inline;
            }

        }
        
    }
`;

