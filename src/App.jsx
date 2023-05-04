import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/MayckonFer.png",
        name: "Mayckon Fernandes",
        role: "Web Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
        },
        {
          type: "link",
          content: `👉 jane.design/doctorcare`,
        },
      ],
      plublishedAt: new Date("2023-05-04 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/welligtonporto.png",
        name: "Welligton Porto",
        role: "FullStack Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋",
        },
        {
          type: "paragraph",
          content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
        },
        {
          type: "link",
          content: `👉 jane.design/doctorcare`,
        },
      ],
      plublishedAt: new Date("2023-05-10 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                plublishedAt={post.plublishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
