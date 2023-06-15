/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";

type Data = {
    datas : any;
    properties : any;
    Name : any;
    title : any;
    plain_text : any;
    cover: any;
}

export default function SubProjectItem({datas}: Data) {

    const title = datas.properties.Name.title[0].plain_text
    const description = datas.properties.Description?.rich_text[0]?.plain_text
    const github = datas.properties.Github.url
    const img = datas.cover?.file?.url || datas.cover?.external.url
    const start = datas.properties.WorkPeriod.date?.start
    const end = datas.properties.WorkPeriod.date?.end
    const notion = datas.properties.Notion.url
    const skillimg = datas.properties.Skills.files
    


    

    return(
        <div className="project-card">
            <a href=""><Image 
                className="rounded-t-xl" 
                src={img} 
                alt={"picture"} 
                width="100" 
                height="100" 
                layout="responsive"
                objectFit="cover"
                quality={100}
            /></a>
            <div className="p-4 flex flex-col ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex items-start mt-2">
                    {skillimg && skillimg.map((tagSkill: {file: any; url: any;})=>(
                        // eslint-disable-next-line react/jsx-key
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
            </div>
        </div>
    );
}