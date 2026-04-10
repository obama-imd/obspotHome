"use client"
import { useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../auth.css"
import api from '../../../../utils/axios';
import Header from "@/components/common/header/basicHeader";
import Footer from "@/components/common/footer/footer";
import { setAccessToken } from "@/lib/auth/session";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    async function signUp() {
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await api.post('/auth/register', {
                nome: name,
                sobrenome: lastName,
                email,
                password,
                confirmPassword
            });

            const accessToken = response.data?.accessToken;

            if (accessToken) {
                setAccessToken(accessToken);
                router.push('/');
                return;
            }

            setErrorMessage("Cadastro concluido, mas a API nao retornou accessToken.");
            console.log(response);
        } catch (error) {
            if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
                setErrorMessage("A API nao respondeu a tempo. Verifique se o backend esta ativo e acessivel.");
            } else {
                setErrorMessage("Nao foi possivel concluir o cadastro.");
            }

            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
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
                    {errorMessage ? <p className="authError">{errorMessage}</p> : null}
                    <Button className="btn authButton" onClick={signUp} disabled={isSubmitting}>
                        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                    </Button>
                    <Link className="link" href="./login">Voltar para login</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
