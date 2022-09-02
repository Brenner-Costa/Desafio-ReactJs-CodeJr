import React from "react";
import './Contact.css';
import image3 from "../img/Online-world-rafiki.svg"

function ContactPage () {

    function envioDoForm (event) {
        event.preventDefault()
        console.log('Uma mensagem foi enviada com sucesso !!');
    }

    return (
        <section className="containerForm">
            <h1>Entre em contato</h1>
            <section className="ContactOne">
                <img src= {image3} alt="" id="imageForm"/>
                <form className="formContact" onSubmit={envioDoForm}>
                    <label className="formInformation" htmlFor="name">Nome completo</label>
                    <input 
                        className="formChilldren" 
                        name="name" 
                        id="nameId" 
                        placeholder="vascomaiordorj@gmail.com"
                    />

                    <label className="formInformation" htmlFor="email">E-mail</label>
                    <input 
                        className="formChilldren" 
                        name="email" 
                        id="emailId" 
                        placeholder="vascomaiordorj@gmail.com"
                    />

                    <label className="formInformation" htmlFor="telefone">Telefone</label>
                    <input 
                        className="formChilldren" 
                        name="telefone" 
                        id="telefone" 
                        placeholder="vascomaiordorj@gmail.com"
                    />

                    <label className="formInformation">Assunto</label>
                    <textarea 
                        className="textForm" 
                        placeholder="O Vasco é o maior clube do Rio ...">
                    </textarea>

                    <button className="botForm">Enviar Mensagem</button>
                </form>
            </section>
        </section>
    )
}

export default ContactPage;