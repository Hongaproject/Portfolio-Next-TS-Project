import Head from "next/head";
import { SECRETS, DATABASE_ID, SECRETS_SUB, DATABASE_SUB_ID } from "@/config/setup";
import ProjectItem from "./components/projectItem/projectItem";
import SubProjectItem from "./components/projectItem/SubProjectItem";
import type { GetStaticProps } from 'next';
import { useEffect, useState } from "react";
import Loading from "./loading";

type Projectnames = {
    projects: any;
    results: any;
    subProjects: any;
};

export default function Project({projects, subProjects}: Projectnames) {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    },[]);
    
    return(
        <div className=" flex flex-col min-h-screen  mb-10 ">
            { loading ? <Loading /> : null }
            <Head>
                <title>홍성원 | 프로젝트 </title>
            </Head>

            <h1 className="text-4xl font-bold sm:text-6xl text-center mt-6">
                총 프로젝트 : 
                <span className="pl-4 text-blue-500">{projects.results.length} </span>
            </h1>
            <h3 className="text-2xl mt-12 ml-4 mb-1 font-bold">메인 프로젝트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.results.slice(0,4).map((project: {id: { properties: { Name: { title: { plain_text: any; }[]; }; }; }; }) => (
                    <ProjectItem data={project} key={project.id}/>
                ))}
            </div>
            <h3 className="text-2xl mt-6 ml-4 mb-1 font-bold">서브 프로젝트</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 ">
                {subProjects.results.map((subproject: {id: { properties: { Name: { title: { plain_text: any; }[]; }; }; }; }) => (
                    <SubProjectItem datas={subproject} key={subproject.id}/>
                ))}
            </div>
        </div>
    );
}


export const getStaticProps: GetStaticProps<{
    projects: Projectnames;
    // projectNames: Projectnames;
}> = async () => {

    //Main
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

    //Sub
    const subOptions = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${SECRETS_SUB}` 
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
      
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_SUB_ID}/query`, subOptions)
    const subProjects = await response.json()

    return { props: { projects, subProjects } };
};
 