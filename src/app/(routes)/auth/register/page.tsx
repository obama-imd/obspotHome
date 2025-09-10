"use client"
import { useState } from "react"
import "../auth.css"

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    return (
        <div className="auth">
            <div className="card flex">
                <label>Nome</label>
                <input className="inputBox" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <label>Sobrenome</label>
                <input className="inputBox" type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                <label>E-mail</label>
                <input className="inputBox" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Senha</label>
                <input className="inputBox" type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <label>Confirmar Senha</label>
                <input className="inputBox" type="text" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                <button className="btn">Cadastrar</button>
            </div>
        </div>
    )
}