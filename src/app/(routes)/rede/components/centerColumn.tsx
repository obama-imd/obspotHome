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
                        return <div className="flex postButtons" key={index}>
                            <a href=""><PlusIcon /></a>
                            <p>{text}</p>
                        </div>
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
                        <div>{post.text}</div>
                        <div className="flex actions">
                            <a className="flex btn">
                                <HeartIcon />
                                <p>Curtir</p>
                            </a>
                            <a className="flex btn">
                                <ShareIcon />
                                <p>Compartilhar</p>
                            </a>
                            <div className="postButtons">
                                <div className="flex" key={index}>
                                    <a><PlusIcon /></a>
                                    <p>{feedPostCardButtonText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}