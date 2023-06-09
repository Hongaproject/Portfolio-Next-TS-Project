import Head from "next/head";
import { SECRETS, DATABASE_ID } from "@/config/setup";
import ProjectItem from "./components/projectItem/projectItem";

// export default function Project({projectNames}: Projectnames) {

//     console.log(projectNames);

type Projectnames = {
    projects: any;
    results: any;

//   stargazers_count: number;
};

export default function Project({projects}: Projectnames) {

    console.log(projects);

    return(
        <div>
            <Head>
                <title>홍성원 | 프로젝트 </title>
            </Head>
            {/* <h1>총 프로젝트 : {projectNames} </h1> */}

            <h1>총 프로젝트 : {projects.results.length} </h1>

            {projects.results.map((project: {id: { properties: { Name: { title: { plain_text: any; }[]; }; }; }; }) => (
                <ProjectItem data={project} key={project.id}/>
            ))}
            
        </div>
    );
}

// import type { InferGetStaticPropsType, GetStaticProps } from 'next';
 
// type Repo = {
//   name: string;
//   stargazers_count: number;
// };
 
// export const getStaticProps: GetStaticProps<{
//   repo: Repo;
// }> = async () => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// };

import type { GetStaticProps } from 'next';
 
// type Projectnames = {
//     projectNames: React.ReactNode;
//     length: number;
// //   stargazers_count: number;
// };

 
export const getStaticProps: GetStaticProps<{
    projects: Projectnames;
    // projectNames: Projectnames;
}> = async () => {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${SECRETS}` 
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    // const projectNames =  projects.results.map((project: { properties: { Name: { title: { plain_text: any; }[]; }; }; }) => (
    //     project.properties.Name.title[0].plain_text
    // ))
        
    // console.log(`projects : ${projects}`);

    // console.log(`projectNames : ${projectNames}`);
    // return { props: { projectNames } };

    return { props: { projects } };
};
 