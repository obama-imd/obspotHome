'use client'
import { HeartIcon, PlusIcon, ShareIcon } from "@/components/common/icons/mainIcons"
import { Post, UserProps } from "../page"
import "../rede.css"
import { useState } from "react"

const newPostCardButtons = [
    "Ação em projeto",
    "Convite de colaboração"
]

const feedPostCardButtonText = "Colaborar no projeto"
const searchBarText = "Escreva sobre a sua ação ou convite de colaboração"

export function CenterColumn({ userInfo }: UserProps) {
    const [searchText, setSearchText] = useState<string>(searchBarText);

    return (
        <div className="center-col">
            <div className="newPostCard card">
                <div className="cardHeader flex">
                    <img className="avatar" src={userInfo.image} alt="" />
                    <input type="text"
                        onChange={(e) => { setSearchText(e.target.value) }}
                        value={searchText}
                        className="searchBar" />
                </div>
                <div className="flex actions">
                    {newPostCardButtons.map((text, index) => {
                        return <a href="" className="flex postButtons" key={index}>
                            <PlusIcon />
                            <p>{text}</p>
                        </a>
                    })}
                </div>
            </div>
            <div className="postsFeed">
                {userInfo.posts.map((post: Post, index: any) => {
                    return <div className="feedPostCard card" key={index}>
                        <div className="flex">
                            <img className="avatar" src={userInfo.image} alt="" />
                            <div>
                                <p className="userName">{userInfo.name}</p>
                                <p className="userType">{userInfo.type}</p>
                            </div>
                        </div>
                        <p className="mainText">{post.text}</p>
                        <div className="flex actions">
                            <a href="" className="flex btn">
                                <HeartIcon />
                                <p>Curtir</p>
                            </a>
                            <a href="" className="flex btn">
                                <ShareIcon />
                                <p>Compartilhar</p>
                            </a>
                            <div className="postButtons">
                                <a href="" className="flex" key={index}>
                                    <PlusIcon />
                                    <p>{feedPostCardButtonText}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}