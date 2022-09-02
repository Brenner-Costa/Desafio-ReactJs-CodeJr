import React from "react";
import './MembersAdmin.css';

function MembersAdmin () {
    <>
        <section className="container">
            <h1>Nome do membro</h1>
            
            <ul className="listCrud">
                <li className="listItens">
                    <button className="btnAdmin">Criar</button>    
                </li>
                <li className="listItens">
                    <button className="btnAdmin">Visualizar</button> 
                </li>
                <li className="listItens">
                    <button className="btnAdmin">Deletar</button> 
                </li>
            </ul>

        </section>
    </>
}

export default MembersAdmin;
