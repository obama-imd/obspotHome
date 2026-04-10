"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import "../auth.css"
import api from '../../../../utils/axios';
import Header from "@/components/common/header/basicHeader";
import Footer from "@/components/common/footer/footer";
import { clearSession, setAccessToken } from "@/lib/auth/session";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    async function signIn() {
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await api.post('/auth/login', {
                email,
                password
            });

            const accessToken = response.data?.accessToken;

            if (!accessToken) {
                clearSession();
                setErrorMessage("A API respondeu sem accessToken.");
                return;
            }

            setAccessToken(accessToken);
            router.push('/');
        } catch (error) {
            clearSession();
            if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
                setErrorMessage("A API nao respondeu a tempo. Verifique se o backend esta ativo e acessivel.");
            } else {
                setErrorMessage("Nao foi possivel entrar com as credenciais informadas.");
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
                <div className="card flex column">
                    <label>E-mail</label>
                    <input className="inputBox" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label>Senha</label>
                    <input className="inputBox" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    {errorMessage ? <p className="authError">{errorMessage}</p> : null}
                    <Button className="btn authButton" onClick={signIn} disabled={isSubmitting}>
                        {isSubmitting ? "Entrando..." : "Entrar"}
                    </Button>
                    <Link className="link" href="./register">Cadastrar</Link>
                </div>
            </div>
            <Footer />

        </>

    )
}
