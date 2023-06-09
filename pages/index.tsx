/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import { useRouter } from "next/router";
import Skills from "./components/Skill/Skills";
import Links from "./components/LinkImg/Links";
import TypeIt from "typeit-react";

export default function Home() {
  
  const router = useRouter();

  const clickProject = () => {
    router.push('./project');
  }

  return (
      
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Head>
          <link rel="icon" href="./favicon.ico"/>
          <meta property="og:image" content="/pf.jpg" />
          <meta property="og:description" content="프론트엔드 개발자 홍성원의 포토폴리오 입니다." /> 
          <title>홍성원 | 프론트엔드 개발자 </title>
        </Head>
        <TypeIt className="text-3xl font-bold mt-8"
        options={{
          strings: ["안녕하세요 프론트엔드 개발자 홍성원의 포트폴리오 입니다."],
          speed: 70,
          waitUntilVisible: true,
        }}
      />
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center justify-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-7">
            <img className="object-cover object-center rounded rounded-3xl " src="/photo.jpg" />
          </div>
          <div className="flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900 ">홍성원</h1>
              <p className="mb-8 leading-relaxed text-xl ml-0.5 ">
                
                <strong>실패를 두려워하지 않고 항상 도전하고 배우는 개발자 홍성원입니다.</strong><br /> <br /> 
                꾸준한 개발 성장을 위해 <strong>JavaScript, React, TypeScript, Next.js</strong>에 관하여 <br />
                <strong>올해 1월부터 개인 공부 및 3개의 스터디를 참여</strong>하여 학습했던 내용들 위주로 <br /> 
                프로젝트를 진행했습니다. <br /> <br />
                그리고 진행했던 내용을 <strong>깃허브에 1일 1커밋하고 있으며, <br />
                블로그에도 한 달에 평균적으로 2개씩 포스팅하고 있습니다.</strong>  
              </p>
            <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900 w-full" title="아이콘 클릭 시 모달창이 나옵니다.">Skills</h1>
            <p className="underline">아이콘 클릭 시 모달창이 나옵니다.</p>
            <Skills />
            <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900">Links</h1>
            <Links />
            <div className="flex justify-center">
              <button className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={clickProject}> 프로젝트 보러가기</button>
            </div>
          </div>
        </div>
      </section>
  )
}
