import { useState, useEffect, useRef } from "react";
import SkillfrontExplain from "./skillfrontExplain";
import SkillcsstoolExplain from "./skillcsstoolExplain";
import { styled } from "styled-components";

export default function Skills() {
    
    const [modal, setModal] = useState<boolean>(false);
    const [ctmodal, setCTmodal] = useState<boolean>(true);

    const clickFront = () => {
        setModal(true);
        setCTmodal(false);
    }

    const clickCT = () => {
        setCTmodal(true);
    }

    const [submodal, setsubModal] = useState(false);
    const outside = useRef(null);

    return(
        <div className="mb-8 leading-relaxed ">
            <button onClick={ () => setsubModal(true) } className="flex flex-wrap mb-1">
                <div className="flex" onClick={clickFront}>
                    <img src="/html.png" width="48" height="48" alt="html5" title="HTML5" />
                    <img src="/css.png" width="48" height="48" alt="css3" title="CSS3" />
                    <img src="/js.png" width="48" height="48" alt="js" title="JavaScript" />
                    <img src="/ts.png" width="48" height="48" alt="ts" title="TypeScript" />
                    <img src="/react.png" width="48" height="48" alt="react" title="React" />
                    <img src="/nextjs.png" className="mr-1" width="48" height="48" alt="nextjs" title="Next.js" />
                </div>
                <div className="flex" onClick={clickCT}>
                <blockquote className="p-1 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800"><p></p></blockquote>
                    <img src="/tailwind.png" className="mr-1.5" width="48" height="48" alt="tailwind" title="Tailwind" />
                    <img src="/mui.png" width="48" height="48" alt="mui" title="Material-UI" />
                    <img src="/bootstrap.png" width="48" height="48" alt="bootstrap" title="Bootstrap" />
                    <img src="/github.png" width="48" height="48" alt="github" title="Github" />
                    <img src="/notion.png" width="48" height="48" alt="notion" title="Notion" />
                </div>
            </button>

            <>
                {
                    submodal &&
                    <div ref={outside} onClick={ (e) => { if(e.target == outside.current) setsubModal(false) } }>
                        <button onClick={ () => setsubModal(false) } className="float-right mr-14 mt-1"><img width="24" height="24" src="https://img.icons8.com/material/24/kiw0k-☀️【官网dk2000com】⬅️-5yad7-dmc109uua/close-window--v1.png" alt="close-window--v1"/></button>
                        <div>
                            {modal === null && ctmodal === null ? null : ctmodal && modal ?  <SkillcsstoolExplain />  :  <SkillfrontExplain /> }
                        </div>
                    </div>
                }
                </>
        </div>
    );
}