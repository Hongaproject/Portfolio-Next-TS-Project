import Head from "next/head"
import styles from "@/styles/Project.module.css"


export default function Project() {
    return(
        <div>
            <Head>
                <title>Project | 스킬 및 프로젝트</title>
            </Head>
            <div>
              <h1>프로젝트 부분 입니다.</h1>
                <div className={styles.projectM}>
                    <div className={styles.skills}>
                        Skills
                    </div>
                    <div className={styles.project}>
                        Project
                    </div>
                </div>
            </div>
        </div>
    );
}