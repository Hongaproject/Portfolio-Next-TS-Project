import { type } from "os";

type Data = {
    data : any;
    properties : any;
    Name : any;
    title : any;
    plain_text : any;
}

export default function ProjectItem({data}: Data) {

    const title = data.properties.Name.title[0].plain_text

    const github = data.properties.Github.url
    return(
        <div className="p-6 m-3 bg-slate-400 rounded-md">
            <h1>{title}</h1>
            <a href={github} target="_blank">깃허브 바로가기</a>
        </div>
    );
}