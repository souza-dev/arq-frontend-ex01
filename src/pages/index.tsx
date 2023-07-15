import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const posts = [
    {
      title: "5 dicas para sua carreira profissional",
      content:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
    },
    {
      title: "5 dicas para sua carreira profissional",
      content:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
    },
    {
      title: "5 dicas para sua carreira profissional",
      content:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end"
    }
  ];
  return (
    <>
      <Head>
        <title>Arquitetura de frontend - Ex1-5</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"container bg-white"}>
        <Header />
        <Content posts={posts} />
      </main>
    </>
  );
}

const Avatar = ({ url }: { url: string }) => {
  return (
    <Image
      src={url}
      alt="avatar"
      width={150}
      height={150}
      className="rounded-circle"
    />
  );
};

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center navbar navbar-expand-lg navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Descrição
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="container" style={{ backgroundColor: "#003f80" }}>
      <Navbar />
      <div className="d-flex flex-row justify-content-center align-items-center p-3 px-5">
        <Avatar url={require("/src/assets/images/doge.webp")} />
        <div className="text-white p-3 mx-5">
          <h1>Seu nome</h1>
          <p>
            Coloque aqui sua biografia de forma resumida Coloque aqui sua
            biografia de forma resumida Coloque aqui sua biografia de forma
            resumida Coloque aqui sua biografia de forma resumida Coloque aqui
            sua biografia de forma resumida
          </p>
        </div>
      </div>
    </div>
  );
};

const Content = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-50">
        <h2 className="p-3">Últimas do blog</h2>
        <ul className="list-group">
          {posts.map((item: Post, key: number) => (
            <li
              key={key.toString()}
              className="list-group-item list-group-item-action border-0"
            >
              <Link href="#" className="text-decoration-none">
                <h5 className="mb-1">{item.title}</h5>
              </Link>
              <p className="mb-1">
                <em>{item.content}</em>
              </p>
            </li>
          ))}
        </ul>
        <Link href="#" className="text-decoration-none">
          <h6 className="mb-1 p-3">{"Ver tudo"}</h6>
        </Link>
      </div>
    </div>
  );
};
