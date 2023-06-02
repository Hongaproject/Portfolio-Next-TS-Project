// import Title from './Title'
import Head from "next/head"
import styles from "../styles/Home.module.css";

export default function Home() {
  

  return (
    <div>
      {/* <Title profile="profile"/> */}
      <Head>
        <title>Profile | 소개 글</title>
      </Head>
      <h1 className="text-3xl font-bold">
        안녕하세요 홍성원 입니다.
      </h1>
      <h1 className="text-3xl font-bold">
        소개글 
      </h1>
      <div className={styles.content}>
        <div>
          <img src="/photo.jpg" alt="이력서 사진" width="200px"/>
        </div>
        <div>
          <h1 className="text-3xl font-bold">이름</h1>
          <span>자기소개</span>
          <div>
            <h2 className="text-2xl font-bold">Skiils</h2>
            <span>HTML, CSS, JavaScript, React, TypeScript, Next</span>
          </div>
        </div>
      </div>
      <div className={styles.projectB}>
        <button className="inline-flex items-center bg-purple-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button</button>
      </div>
    </div>
  )
}
