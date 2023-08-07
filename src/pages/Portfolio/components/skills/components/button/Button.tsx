import { ButtonContainer } from ".";





function Button () {
    return(
        <ButtonContainer>
            <a href="https://puntodamia.com.ar/"  target="_blank" className="button"> 
            <p className="button-title">My first project</p>
            <div className="button-img-body"></div>
            <img src="Img\arrow-right.svg" alt="" className="button-img"></img>
            
            </a>
        </ButtonContainer>
    )
}



export default Button