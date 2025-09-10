"use client"
import { useState } from "react"
import "../auth.css"

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const apiURL = "/auth";


    return (
        <div className="auth">
            <div className="card flex column">
                <label>E-mail</label>
                <input className="" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Senha</label>
                <input className="" type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button>Entrar</button>
                <a href="./register">Cadastrar</a>
            </div>
        </div>
    )
}