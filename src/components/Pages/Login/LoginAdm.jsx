import React, { useState } from "react";
import './Login.css'

function LoginAdm () {

    function loginDoUser (event) {
        event.preventDefault();
        console.log("O usuário utilizou os seguintes dados para entrar: " ,{emailLogin} , {passwordLogin})

    }

    const [emailLogin, setEmailLogin] = useState ()
    const [passwordLogin, setPasswordLogin] = useState ()
    const url = 'https://static.vecteezy.com/system/resources/previews/006/735/456/original/roaring-lion-logo-template-design-illustration-vector.jpg';

    return (
        <section className="containerLogin">
            <form onSubmit={loginDoUser} className="formLoginMain">
                <img src={url} alt="Lion Jr" id="imgLogin"/>
                <h1 className="titleLogin">Lion Jr - Empresa Júnior de computação</h1>
                <label className="formLoginSub">E-Mail</label>
                    <input 
                        type="text" 
                        name="emailLogin"
                        className="formLoginChilldren" 
                        placeholder="vascomaiordorj@gmail.com"
                        onChange={(event) => setEmailLogin(event.target.value)}
                    />
                <label className="formLoginSub">Senha</label>
                    <input 
                        type="password" 
                        name="passwordLogin"
                        className="formLoginChilldren"
                        placeholder="Digite a sua senha"
                        onChange={(event) => setPasswordLogin(event.target.value)}
                    />
                <button id="btnLogin">Entrar</button>
            </form>

            <img src="" alt="" id=""/>

        </section>

    )
}
export default LoginAdm;