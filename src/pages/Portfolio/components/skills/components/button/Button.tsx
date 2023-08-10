import { ButtonContainer } from ".";





function Button() {
    return (
        <ButtonContainer>
            <a href="/CeciliaBoscarino.pdf" download="CeciliaBoscarino.pdf" className="button">
                <p className="button-title">Resume  {'>'}  </p>
                <div className="button-img-body"></div>

            </a>
            <a href="https://puntodamia.com.ar/" target="_blank" className="buttonorange">
                <p className="button-title">My first project  {'>'}  </p>
                <div className="button-img-body"></div>


            </a>
            <a href="/PortfolioDesign.pdf" download="PortfolioDesign.pdf" className="button">
                <p className="button-title">Design Portfolio {'>'}  </p>
                <div className="button-img-body"></div>


            </a>
        </ButtonContainer>
    )
}



export default Button