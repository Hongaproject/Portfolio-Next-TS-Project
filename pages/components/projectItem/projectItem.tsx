/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";
import SkillImg from "../Skill/skillsImg/skillImg";

type Data = {
    data : any;
    
}

export default function ProjectItem({data}: Data) {

    const title = data.properties.Name.title[0].plain_text
    const description = data.properties.Description.rich_text[0]?.plain_text
    const github = data.properties.Github.url
    const img = data.cover?.file?.url || data.cover?.external.url
    // const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date?.start
    const end = data.properties.WorkPeriod.date?.end
    const notion = data.properties.Notion.url
    const skillimg = data.properties.Skills.files

    
    return(
        <div className="project-card">
            <Image 
                className="rounded-t-xl" 
                src={img} 
                alt={"picture"} 
                width="100" 
                height="100" 
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex items-start mt-2">
                    {skillimg && skillimg.map((tagSkill: {file: any; url: any;})=>(
                        <Image 
                            className="flex-wrap"
                            src={tagSkill.file.url} 
                            alt={"picture"} 
                            width="24" 
                            height="24"                
                        />
                    ))}
                </div>
                <a href={notion} target="_blank" className="font-bold underline mt-2">자세히 보기</a>
                <p className="my-1 mt-2 ">작업기간 : {start} ~ {end} </p>
                <h3 className="">{description}</h3>
                <a href={github} target="_blank" className="mt-2"><img className="float-right" width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/></a>
                    {/* <div className="flex flex-wrap items-start mt-2">
                        {tags.map((aTag: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                            <p className="px-2 py-1 mr-1 mt-2 rounded-md bg-sky-200 dark:bg-sky-700 " key={aTag.id}>{aTag.name}</p> 
                        ))}
                    </div> */}
            </div>
        </div>
        
    );
}