import { useState } from "react";
import SkillExplain from "./skillExplain";

export default function Skills() {

    const [modal, setModal] = useState(false);

    const clickExplain = () => {
        setModal(!modal);
    }

    return(
        <div className="mb-8 leading-relaxed sm:w-full">
            <button onClick={clickExplain}>
                <div className="flex flex-wrap ">
                    <img src="/html.png" width="48" height="48" alt="html5" title="HTML5" />
                    <img src="/css.png" width="48" height="48" alt="css3" title="CSS3" />
                    <img src="/js.png" width="48" height="48" alt="js" title="JavaScript" />
                    <img src="/ts.png" width="48" height="48" alt="ts" title="TypeScript" />
                    <img src="/react.png" width="48" height="48" alt="react" title="React" />
                    <img src="/nextjs.png" className="mr-1" width="48" height="48" alt="nextjs" title="Next.js" />
                    <img src="/tailwind.png" className="mr-1.5" width="48" height="48" alt="tailwind" title="Tailwind" />
                    <img src="/mui.png" width="48" height="48" alt="mui" title="Material-UI" />
                    <img src="/bootstrap.png" width="48" height="48" alt="bootstrap" title="Bootstrap" />
                    <img src="/github.png" width="48" height="48" alt="github" title="Github" />
                    <img src="/notion.png" width="48" height="48" alt="notion" title="Notion" />
                </div>
            </button>
            {modal === true ? <SkillExplain /> : null }
            <div>
            </div>
        </div>
    );
}