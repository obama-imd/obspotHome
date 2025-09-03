import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/basicHeader";

import "./rede.css"
import { StartColumn } from "./components/startColumn";
import { CenterColumn } from "./components/centerColumn";
import { EndColumn } from "./components/endColumn";

export interface Post {
  text: string;
  likes: string;
  shares: string;
}

export interface UserInfo {
  name: string;
  type: string;
  image: string;
  connections: number;
  publishedActions: number;
  projects: number;
  institutions: number;
  posts: Post[];
}

export interface UserProps {
  userInfo: UserInfo;
}

export default function Rede() {

  const userInfo: UserInfo = {
    name: "Roberto Onófrio",
    type: "Professor",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/500px-Red_Color.jpg?20170319170936",
    connections: 42,
    publishedActions: 8,
    projects: 2,
    institutions: 4,
    posts: [
      {
        text: "Fico feliz de compartilhar mais um encontro da Rede STEAM Potiguar. Por uma educação potiguar de qualidade!",
        likes: "",
        shares: ""
      },
      {
        text: "Fico feliz de compartilhar mais um encontro da Rede STEAM Potiguar. Por uma educação potiguar de qualidade!",
        likes: "",
        shares: ""
      },
    ]
  }

  return (
    <div>
      <Header />
      <main className="
        min-h-screen 
        flex
      ">
        <div className="flex rede">
          <StartColumn userInfo={userInfo} />
          <CenterColumn userInfo={userInfo} />
          <EndColumn />
        </div>
      </main>
      <Footer />
    </div>
  );
}
