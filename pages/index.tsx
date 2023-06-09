// import Title from './Title'
import Head from "next/head"
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Skills from "./components/SkillsImg/Skills";
import Links from "./components/LinkImg/Links";
import TypeIt from "typeit-react";

export default function Home() {
  
  const router = useRouter();

  const clickProject = () => {
    router.push('./project');
  }

  return (
    // <div className={styles.section}>
    //   {/* <Title profile="profile"/> */}
    //   <Head>
    //     <title>홍성원 | 프론트엔드 개발자 </title>
    //   </Head>
    //   <div className={styles.introduction}>
    //     <h1 className="text-3xl font-bold">
    //       안녕하세요 
    //     </h1>
    //     <h1 className="text-3xl font-bold">
    //       프론트엔드 개발자 홍성원의 포트폴리오 입니다.
    //     </h1>
    //   </div>
    //   <div className={styles.content}>
    //     <div className={styles.subContent}>
    //       <div className={styles.img}>
    //         <img src="/photo.jpg" alt="이력서 사진" />
    //       </div>
    //       <div className={styles.titleContent}>
    //         <div className={styles.title}>
    //           <h1 className="text-3xl font-bold">홍성원</h1>
    //           <span className="mb-8 leading-relaxed">자기소개</span>
    //         </div>
    //         <div className={styles.subTitle}>
    //           <h2 className="text-2xl font-bold">Skills</h2>
    //           <Skills />
    //         </div>
    //         <div className={styles.link}>
    //           <h2 className="text-2xl font-bold">Links</h2>
    //           <Links />
    //         </div>
    //         <div className={styles.projectB}>
    //           <button className="inline-flex items-center bg-purple-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={clickProject}>프로젝트 보러가기</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Head>
          <title>홍성원 | 프론트엔드 개발자 </title>
        </Head>
        {/* <h1 className="text-3xl font-bold mt-5">
          안녕하세요 프론트엔드 개발자 홍성원의 포트폴리오 입니다.
        </h1> */}
        <TypeIt className="text-3xl font-bold mt-5"
        options={{
          strings: ["안녕하세요 프론트엔드 개발자 홍성원의 포트폴리오 입니다."],
          speed: 70,
          waitUntilVisible: true,
        }}
      />
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center justify-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded " src="/photo.jpg" />
          </div>
          <div className="flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">홍성원</h1>
            <p className="mb-8 leading-relaxed">자기소개</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Skills</h1>
            <Skills />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Links</h1>
            <Links />
            <div className="flex justify-center">
              <button className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={clickProject}> 프로젝트 보러가기</button>
            </div>
          </div>
        </div>
      </section>
  )
}
