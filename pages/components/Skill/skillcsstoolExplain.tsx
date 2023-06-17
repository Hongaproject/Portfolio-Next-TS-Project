/* eslint-disable react/jsx-key */
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode, ReactNode } from "react";
import styled from 'styled-components'

export default function SkillcsstoolExplain(){

    const csstool = [
        {
            title:"TailwindCSS, Material-UI, Bootstrap",
            content:"css파일 없이 작업이 가능하며 다양한 플랫폼을 사용가능 하여 실제 여러 프로젝트 프로젝트에서 사용했습니다. (포트폴리오, 코백)제작 "
        },
        {
            title:"Github, Notion",
            content:"개인 및 팀원과 협업을 하기 위해 Notion과 Github를 사용했으며 현재 까지 참여한 모든 프로젝트를 Github에 커밋했습니다. Notion에서 데이터베이스를 만들어 API로 데이터를 받아와 프로젝트에서 사용했습니다. (포트폴리오)제작 "
        }
    ] 

    const Container = styled.div`
        width: 500px;
        height: 250px;
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