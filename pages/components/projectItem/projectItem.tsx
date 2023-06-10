/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"

type Data = {
    data : any;
    properties : any;
    Name : any;
    title : any;
    plain_text : any;
}

export default function ProjectItem({data}: Data) {

    const title = data.properties.Name.title[0].plain_text
    const description = data.properties.Description.url
    const github = data.properties.Github.url
    const img = data.cover.file?.url || data.cover.external.url

    return(
        <div className="p-6 m-3 bg-slate-400 rounded-md">
            <Image src={img} width="100%" height="60%"/>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <a href={github} target="_blank">깃허브 바로가기</a>
        </div>
    );
}