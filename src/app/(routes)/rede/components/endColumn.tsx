import { PlusIcon } from "lucide-react"

export function EndColumn() {

    const suggestedUsers = [
        {
            name: "Beltrano Onófrio",
            type: "Professor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/500px-Red_Color.jpg?20170319170936",
        },
        {
            name: "Fulano Onófrio",
            type: "Químico",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/500px-Red_Color.jpg?20170319170936",
        }
    ]

    const sectionTitle = "Crie novas conexões";
    const buttonText = "Conectar";

    return (
        <div className="end-col">
            <div className="newConnectionsCard card">
                <p className="sectionTitle">{sectionTitle}</p>
                {suggestedUsers.map((user, index) => {
                    return <div className="flex cardBody" key={index}>
                        <img className="avatar" src={user.image} alt="" />
                        <div className="col">
                            <p className="userName">{user.name}</p>
                            <p className="userType">{user.type}</p>
                            <a href="" className="flex connectBtn">
                                <PlusIcon />
                                <p>{buttonText}</p>
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}