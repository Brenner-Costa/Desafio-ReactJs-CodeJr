import React from "react";
import  "./HomePage.css"
import image1 from "../img/Metrics-cuate.svg"
import Informations from "./Info";
import ContactPage from "./Contact";

function HomePage () {

    return ( 
        <> 
            <section className="homePage">
                <img src={image1} alt="" id="imageHome"/>
                <div className="container_home">
                    <h1>Em busca de resoluções para as suas ideias ?</h1>
                    <h2>A Lion Jr é a solução dos seus problemas !</h2>
                    <p>Com soluções inovadoras para qualquer setor, a Lion Jr oferece produtos e serviços digitais. Melhorando o alcance e a qualidade dos serviços dos nossos clientes.</p>
                    <button id="botConteiner">Agende sua reunião</button>         
                </div>
            </section>

            <Informations/>
            <ContactPage/>

        </>

        
    )
}

export default HomePage;