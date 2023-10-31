/* eslint-disable react/jsx-key */
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode, ReactNode } from "react";
import styled from 'styled-components'

export default function SkillfrontExplain(){

    const frontEnd = [
        {
            title:"html&css",
            content:"시멘틱 마크업과 레이아웃 및 애니메이션 구현에 능숙합니다."
        },
        {
            title:"JavaScript",
            content:"동작원리를 이해하며 JSON형태인 데이터를 가공 및 활용하여 실제 여러 프로젝트에서 사용한 경험이 있습니다. (영화, 뉴스, 날씨)구현 "
        },
        {
            title:"TypeScript",
            content:"개발에 생산성을 향상 시켜주었으며 interface로 타입을 지정 할 수 있고 실제 여러 프로젝트에서 사용한 경험이 있습니다. (포트폴리오, 코백, 로또 번호 추출기)제작 "
        },
        {
            title:"React",
            content:"사용자 인터페이스를 더 편리하게 만들기 위해 공부를 시작했으며 Functional Component, Hook, Styled-Component를 사용하여 실제 여러 프로젝트에서 사용한 경험이 있습니다. (프로젝트 마이페이지)제작"
        },
        {
            title:"Next.js",
            content:"React의 단점을 보완하고 SEO와 SSR을 사용가능 하여 공부를 시작했으며 실제 여러 프로젝트에서 사용한 경험이 있습니다. (포트폴리오, 코백, 로또 번호 추출기)제작 "
        }
    ] 

    const Container = styled.div`
        width: 500px;
        height: 600px;
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
            {frontEnd.map((list)=>(
                <Div>
                    <p>{list.title}</p>
                    <p>{list.content}</p>
                </Div>
            ))}
        </Container>
    );
}