import React from "react";
import "./Members.css";

function Members (props) {

    const url = 'https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/7/1/1527878686617.jpg';

    return (
        <section className="contMembers">
            <div className="ContMembersSeg">
                <img src={url} alt="Negralha rei de todos" id="imgMembers"/>
                <p className="bodyMembers">Nome: <span className="span_nome">{props.name}</span></p>
                <p className="bodyMembers">E-mail: <span className="span_email">{props.email}</span></p>
                <p className="bodyMembers">Aniversário: <span className="span_niver">{props.aniversario}</span></p>
                <p className="bodyMembers">Departamentos:  <span className="span_dep">{props.departamentos.map((dep) => <p className="dep_cardmember">{dep}</p>)}</span></p>
            </div>
        </section>
    )
}

export default Members;