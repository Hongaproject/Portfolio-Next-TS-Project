// import Title from './Title'
import Head from "next/head"
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  
  const router = useRouter();

  const clickProject = () => {
    router.push('./project');
  }

  return (
    <div>
      {/* <Title profile="profile"/> */}
      <Head>
        <title>홍성원 | 프론트엔드 개발자 </title>
      </Head>
      <div className={styles.introduction}>
        <h1 className="text-3xl font-bold">
          안녕하세요 
        </h1>
        <h1 className="text-3xl font-bold">
          프론트엔드 개발자 홍성원의 포트폴리오 입니다.
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="/photo.jpg" alt="이력서 사진" width="200px"/>
        </div>
        <div className={styles.titleContent}>
          <div className={styles.title}>
            <h1 className="text-3xl font-bold">이름</h1>
            <span>자기소개</span>
          </div>
          <div className={styles.subTitle}>
            <h2 className="text-2xl font-bold">Skiils</h2>
            <span>HTML, CSS, JavaScript, React, TypeScript, Next</span>
          </div>
          <div className={styles.link}>
            <h2 className="text-2xl font-bold">Links</h2>
            <span>블로그, 깃허브</span>
          </div>
        </div>
      </div>
      <div className={styles.projectB}>
        <button className="inline-flex items-center bg-purple-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={clickProject}>프로젝트 보러가기</button>
      </div>
    </div>
  )
}
