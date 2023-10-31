import Head from "next/head";
import { SECRETS, DATABASE_ID} from "@/config/setup";
import ProjectItem from "./components/projectItem/projectItem";
import type { GetStaticProps } from 'next';
import { Key, useEffect, useState } from "react";
import Loading from "./loading";

type Projectnames = {
    projects: any;
    results: any;
    subProjects: any;
};

export default function Project({projects}: Projectnames) {

   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },3000);
   },[]);

        
    return(
        <div className=" flex flex-col min-h-screen mb-10 m-6">
            <Head>
                <title>홍성원 | 프로젝트 </title>
            </Head>
            {loading ? <Loading /> : "" }
            <h1 className="text-4xl font-bold sm:text-6xl text-center mt-6 ">
                총 프로젝트 : 
                <span className="pl-4 text-blue-500">{projects.results.length} </span>
            </h1>
            <div className="w-11/12 m-auto">
                <h3 className="text-2xl mt-8 ml-4 mb-1 font-bold">메인 프로젝트</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {projects.results.slice(0,4).map((project: { id: React.Key | null | undefined; }) => (
                        <ProjectItem data={project} key={project.id}/>
                    ))}
                </div>
            </div>
            
        </div>
    );
}


export const getStaticProps: GetStaticProps<{
    projects: Projectnames;
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
            "sorts": [
                {
                    "property": "Name",
                    "direction": "descending"
                }
            ],
            page_size: 100
        })
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()


    return { props: { projects } };
};
 