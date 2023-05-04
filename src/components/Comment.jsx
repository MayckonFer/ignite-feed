import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/MayckonFer.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorEndTime}>
              <strong>Mayckon Fernandes</strong>

              <time
                title="29 de Abril às 18:26h"
                dateTime="2023-05-29 18:26:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar Cometário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
