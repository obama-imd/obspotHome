import "./footer.css"
import { navigationItems } from "../header/basicHeader"

const footerContact = [
    "Entre em contato:",
    "Email: obspot@gmail.com",
    "Telefone: 555-567-8901",
    "Endereço: IMD, GiiFE"
]

export default function Footer() {
    return (
        <div className="footer">
            <div className="flex footer-top">
                <img src="/images/logo-branca.png" />
                <div className="flex footer-header items-center">
                    {navigationItems.map((item: any, index: any) => {
                        return <a key={index} className="link" href={item.href}>{item.label}</a>
                    })}
                </div>
            </div>
            <div className="flex footer-contact">
                {footerContact.map((item: string, index: any) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
            <div className="flex footer-bottom">
                <p>© 2025 Observatório Rede STEAM Potiguar. Todos os direitos reservados.</p>
                <a href="" className="link">Política de privacidade</a>
            </div>
        </div>
    )
}