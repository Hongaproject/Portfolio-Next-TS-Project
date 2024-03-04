import Image from "next/image"
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";

type Data = {
    data : any;
}

export default function ProjectItemT({data}: Data) {

    const title = data[1]?.properties?.Name.title[0].plain_text;
    const description = data[1]?.properties?.Description?.rich_text[0]?.plain_text;
    const notion = data[1]?.properties?.Notion.url;
    const start = data[1]?.properties?.WorkPeriod.date?.start;
    const end = data[1]?.properties?.WorkPeriod.date?.end;
    const website = data[1]?.properties?.Website?.url;
    const github = data[1]?.properties?.Github.url;

    
    return(
        <div className="project-card">
            <Image 
                className="rounded-t-xl" 
                src="/cointop.png" 
                alt={"picture"} 
                width="100" 
                height="100" 
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col flex-wrap">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex flex-wrap items-start mt-2">
                    <Image src="/nextjs.png" alt={"picture"} width="24" height="24" />
                    <Image src="/ts.png" alt={"picture"} width="24" height="24" />
                    <Image src="/bootstrap.png" alt={"picture"} width="24" height="24" />
                    <Image src="/mui.png" alt={"picture"} width="24" height="24" />
                    <Image src="/recoil.png" alt={"picture"} width="24" height="24" />
                    <Image src="/mysql.png" alt={"picture"} width="24" height="24" />
                    <Image src="/github.png" alt={"picture"} width="24" height="24" />
                    <Image src="/vercel.png" alt={"picture"} width="24" height="24" />
                </div>
                <a href={notion} target="_blank" className="font-bold underline mt-2">자세히 보기</a>
                <p className="my-1 mt-2 ">작업기간 : {start} ~ {end} </p>
                <h3 className="">{description}</h3>
                <div className="flex mt-2 justify-end">
                    <a href={website} target="_blank" className="mr-1"><img width="24" height="24" src="/web.png" alt="website"/></a>
                    <a href={github} target="_blank"><img width="24" height="24" src="/github.png" alt="github"/></a>
                </div>
            </div>
        </div>
        
    );
}