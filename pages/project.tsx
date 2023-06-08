import Head from "next/head";

export default function Project() {
    
    return(
        <div>
            <Head>
                <title>홍성원 | 프로젝트 </title>
            </Head>
            <h1 className="text-3xl font-bold">
                프로젝트
            </h1>
        </div>
    );
}

import type { InferGetStaticPropsType, GetStaticProps } from 'next';
 
type Repo = {
  name: string;
  stargazers_count: number;
};
 
export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};
 
export async function Page({repo,}: InferGetStaticPropsType<typeof getStaticProps>) {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json'
        },
        body: JSON.stringify({page_size: 100})
      };
      
      fetch('https://api.notion.com/v1/databases/database_id/query', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (repo.stargazers_count);
}