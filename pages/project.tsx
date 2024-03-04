import Head from "next/head";
import { SECRETS, DATABASE_ID} from "@/config/setup";
import ProjectItemF from "./components/projectItem/projectItemF";
import type { GetStaticProps } from 'next';
import { Key, useEffect, useState } from "react";
import ProjectItemT from "./components/projectItem/projectItemT";
import ProjectItemTr from "./components/projectItem/projectItemTr";

type Projectnames = {
    projects: any;
    results: any;
    subProjects: any;
};

export default function Project({projects}: Projectnames) {

    // const [loading, setLoading] = useState(false);

    // const load = () => {
    //     setLoading(true);
    // }
    
    // useEffect(()=>{
    //     setLoading(false);
    // },[]);

    // if(loading) return <div>...로딩중</div>

    console.log(projects.results);

    return(
        <div className=" flex flex-col min-h-screen mb-10 m-6">
            <Head>
                <title>홍성원 | 프로젝트 </title>
            </Head>
            {/* {loading ? <Loading /> : "" } */}
            
            <div className="w-11/12 m-auto">
                <h3 className="text-2xl mt-8 ml-4 mb-1 font-bold">메인 프로젝트</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    <ProjectItemF data={projects?.results[0]} key={projects?.results[0].id}/>
                    <ProjectItemT data={projects?.results[1]} key={projects?.results[1].id}/>
                    <ProjectItemTr data={projects?.results[2]} key={projects?.results[2].id}/>
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
 