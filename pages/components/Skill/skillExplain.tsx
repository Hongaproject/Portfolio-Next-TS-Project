/* eslint-disable react/jsx-key */
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode, ReactNode } from "react";
import styled from 'styled-components'


interface type {
    skillList: any;
}

export default function SkillExplain(){

    const explain = [
        {
            title:"html&css",
            content:"웹 개발의 기본이 되는 HTML과 CSS를 공부했습니다."
        },
    ] 

    const Container = styled.div`
        width: 500px;
        height: 400px;
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
            {explain.map((list)=>(
                <Div>
                    <p>{list.title}</p>
                    <p>{list.content}</p>
                </Div>
            ))}
        </Container>
    );
}