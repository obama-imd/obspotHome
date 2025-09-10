"use client"
import { useState } from "react"
import "../auth.css"
import api from '../../../../utils/axios';
import Header from "@/components/common/header/basicHeader";
import Footer from "@/components/common/footer/footer";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function signIn() {
        api.post('/auth/login', {
            email,
            password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <Header />
            <div className="auth">
                <div className="card flex column">
                    <label>E-mail</label>
                    <input className="inputBox" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label>Senha</label>
                    <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button className="btn" onClick={signIn}>Entrar</button>
                    <a className="link" href="./register">Cadastrar</a>
                </div>
            </div>
            <Footer />

        </>

    )
}