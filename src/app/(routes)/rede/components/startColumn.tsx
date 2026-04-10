import { UserProps } from "../page"
import "../rede.css"

const userContent = [
    "Conexões",
    "Ações publicadas",
    "Projetos",
    "Instituições"
]

export function StartColumn({ userInfo }: UserProps) {
    return (
        <div className="start-col">
            <div className="userAvatarCard card">
                <div className="cardHeader">
                    <img className="avatar" src={userInfo.image} alt="" />
                </div>
                <div className="cardbody">
                    <div className="userName">
                        {userInfo.name}
                    </div>
                    <div className="cardSubText userType">
                        {userInfo.type}
                    </div>
                </div>
            </div>
            <div className="userActionsCard card">
                <div className="flex">{userContent[0]} <span>{userInfo.connections}</span></div>
                <div className="flex">{userContent[1]} <span>{userInfo.publishedActions}</span></div>
                <div className="flex">{userContent[2]} <span>{userInfo.projects}</span></div>
                <div className="flex">{userContent[3]} <span>{userInfo.institutions}</span></div>
            </div>
        </div>
    )
}