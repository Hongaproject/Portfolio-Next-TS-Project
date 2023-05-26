// import Title from './Title'
import styles from '@/styles/Home.module.css'


import Head from "next/head"


export default function Home() {

  return (
    <div>
      {/* <Title profile="profile"/> */}
      <Head>
        <title>Profile | 소개 글</title>
      </Head>
      <div >
        <h1>메인 입니다.</h1>
        <div className={styles.profileM}>
          <div className={styles.img}>
            이미지 부분
            <div className={styles.content}>
              <div className={styles.title}>
                <b>이름 <span>영문</span></b>
              </div>
              <div className={styles.intro}>
                <span>내용</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
