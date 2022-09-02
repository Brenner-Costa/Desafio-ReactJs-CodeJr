import React from "react";
import './Info.css';
import image2  from "../img/Design-team-amico.svg"

function Informations () {

    return (
        <section className="infoLionMain">
            <h1 className="title_info">Sobre a Lion Jr</h1>
            <div className="cardsInfo">
                <div className="infomationMain">
                    <h2 className="titleMain">Missão</h2>
                        <p className="subtitleMain">Transformar o Brasil e o mundo através da tecnologia. Visando sempre o conhecimento e o respeito.</p>
                </div>
                <div className="infomationMain">
                    <h2 className="title_main">Visão</h2>
                        <p className="subtitleMain">Ser referência entre as empresas juniores e gerar impacto na sociedade através de projetos bem executados.</p>
                </div>
                <div className="infomationMain">
                    <h2 className="title_main">Valores</h2>
                        <p className="subtitleMain">Diversidade, igualdade, respeito e força de vontade. Marcar a vida dos nossos clientes e membros é a nossa meta.</p>
                </div>
            </div>

            <section className="infoLionSec">
              
                <div className="subInfoSec">
                    <h3>Mais um pouco sobre nós ...</h3>
                    <p className="text_info">Criada no ano de 2000, por alunos da UFJF, a Lion Jr atua no mercado de tecnologia e inovação. 
                    Com um reconhecimento mundial por seus projetos e invenções, a empresa já ganhou diversos prêmios e histórias ao longo dos seus 22 anos de vida.</p>
                    <p className="text_info">Atualmente trabalhamos com o desenvolvimento de sites, aplicativos, sistemas de gerenciamento e blockchain</p> 
                    <p className="text_info">Com uma cultura voltada para o cliente, estamos sempre em busca de capacitação e experiência para nossos membros, para que nossos projetos sejam feitos com maestria e qualidade.</p>
                </div>
               
                <div className="subInfoImage">
                    <img src={image2} alt="" id="imageInfo"/>
                </div>
            </section>     
                
                
        </section>
    )
}

export default Informations;