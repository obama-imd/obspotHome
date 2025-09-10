"use client"
import { useState } from "react"
import "../auth.css"
import api from '../../../../utils/axios';
import Header from "@/components/common/header/basicHeader";
import Footer from "@/components/common/footer/footer";


export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function signUp() {
        api.post('/auth/register', {
            nome: name,
            sobrenome: lastName,
            email,
            password,
            confirmPassword
        })
            .then(function (response) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <Header />
            <div className="auth">
                <div className="card flex">
                    <label>Nome</label>
                    <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <label>Sobrenome</label>
                    <input className="inputBox" type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                    <label>E-mail</label>
                    <input className="inputBox" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label>Senha</label>
                    <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <label>Confirmar Senha</label>
                    <input className="inputBox" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    <button className="btn" onClick={signUp}>Cadastrar</button>
                </div>
            </div>
            <Footer />
        </>
    )
}