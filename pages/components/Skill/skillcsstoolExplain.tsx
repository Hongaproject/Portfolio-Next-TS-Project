/* eslint-disable react/jsx-key */
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode, ReactNode } from "react";
import styled from 'styled-components'

export default function SkillcsstoolExplain(){

    const csstool = [
        {
            title:"Node JS",
            content:"express를 사용하여 서버 실행 및 API를 사용해서 data처리해본 경험이 있습니다. (게시판)제작"
        },
        {
            title:"Mysql",
            content:"Workbench를 사용해서 DataBase를 작성하고 CRUD를 이용해 React와 Next JS에 적용해서 데이터 관리를 할 수 있습니다. (게시판)제작"
        },
        {
            title:"Github, Notion",
            content:"개인 및 팀원과 협업을 하기 위해 Notion과 Github를 사용했으며 현재 까지 참여한 모든 프로젝트를 Github에 커밋했습니다. Notion에서 데이터베이스를 만들어 API로 데이터를 받아와 프로젝트에서 사용했습니다. (포트폴리오)제작 "
        }
    ] 

    const Container = styled.div`
        width: 700px;
        height: 550px;
        border: 1px solid;
        box-shadow: 2px 2px 2px 2px gray;
        justify-content: center;
        border-radius: 5px;
`
    const Div = styled.div`
        margin:5px 0px 30px 10px ;
    `
    return(
        <Container>
            {csstool.map((list)=>(
                <Div>
                    <p>{list.title}</p>
                    <p>{list.content}</p>
                </Div>
            ))}
        </Container>
    );
}