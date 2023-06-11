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
    const description = datas.properties.Description.rich_text[0]?.plain_text
    const github = datas.properties.Github.url
    const img = datas.cover?.file?.url || datas.cover?.external.url
    const tags = datas.properties.Tags.multi_select
    

    

    return(
        <div className="project-card">
            <Image className="rounded-t-xl" 
                src={img} 
                alt={"picture"} 
                width={100} 
                height={100} 
                layout="responsive" 
                objectFit="none" 
                quality={100}
            />
            
            <div className="p-4 flex flex-col ">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="text-xl mt-4">{description}</h3>
                <a href={github} target="_blank">깃허브 바로가기</a>
                <div className="flex items-start mt-2">
                    {tags.map((aTag: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}