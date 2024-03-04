import { useState, useEffect, useRef } from "react";
import SkillfrontExplain from "./skillfrontExplain";
import SkillcsstoolExplain from "./skillcsstoolExplain";

export default function Skills() {
    
    const [modal, setModal] = useState<boolean>(false);
    const [ctmodal, setCTmodal] = useState<boolean>(true);
    const content1Ref = useRef<HTMLDivElement>(null);
    const content2Ref = useRef<HTMLDivElement>(null);

    const onContent1Click = () => {
        content1Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
      const onContent2Click = () => {
        content2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }

    const clickFront = () => {
        setModal(true);
        setCTmodal(false);
        onContent1Click();
    }

    const clickCT = () => {
        setCTmodal(true);
        onContent2Click();
    }

    const [submodal, setsubModal] = useState(false);
    const outside = useRef(null);

    return(
        <div className="mb-8 leading-relaxed ">
            <button onClick={ () => setsubModal(true) } className="flex flex-wrap mb-1">
                <div className="flex" onClick={clickFront} ref={content1Ref}>
                    <img src="/css.png" width="48" height="48" alt="css3" title="CSS3" />
                    <img src="/js.png" width="48" height="48" alt="js" title="JavaScript" />
                    <img src="/ts.png" width="48" height="48" alt="ts" title="TypeScript" />
                    <img src="/react.png" width="48" height="48" alt="react" title="React" />
                    <img src="/nextjs.png" className="mr-1" width="48" height="48" alt="nextjs" title="Next.js" />
                </div>
                <div className="flex" onClick={clickCT} ref={content2Ref}>
                <blockquote className="p-1 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800"><p></p></blockquote>
                    <img src="/nodejs.png" width="48" height="48" alt="github" title="Node JS" />
                    <img src="/mysql.png" width="48" height="48" alt="github" title="Mysql" />
                    <img src="/github.png" width="48" height="48" alt="github" title="Github" />
                    <img src="/notion.png" width="48" height="48" alt="notion" title="Notion" />
                </div>
            </button>

            <>
                {
                    submodal &&
                    <div ref={outside} onClick={ (e) => { if(e.target == outside.current) setsubModal(false) } }>
                        <button onClick={ () => setsubModal(false) } className="float-right mr-1 mt-1"><img width="24" height="24" src="https://img.icons8.com/material/24/kiw0k-☀️【官网dk2000com】⬅️-5yad7-dmc109uua/close-window--v1.png" alt="close-window--v1"/></button>
                        <div>
                            {modal === null && ctmodal === null ? null : ctmodal && modal ?  <SkillcsstoolExplain />  :  <SkillfrontExplain /> }
                        </div>
                    </div>
                }
                </>
        </div>
    );
}