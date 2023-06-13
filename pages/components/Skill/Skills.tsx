import { useState } from "react";
import SkillExplain from "./skillExplain";
import SkillImg from "./skillsImg/skillImg";

export default function Skills() {

    const [modal, setModal] = useState(false);

    const clickExplain = () => {
        setModal(!modal);
    }

    return(
        <div className="mb-8 leading-relaxed">
            <button onClick={clickExplain}>
                <div className="flex">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5" title="HTML"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" title="CSS"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" title="JavaScript"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript" title="TypeScript"/>
                    <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo" title="React"/>
                    {/* <img width="48" height="48" src="https://img.icons8.com/fluency-systems-filled/48/circled-n.png" alt="circled-n" title="Next.js"/> */}
                    <img src="nextjs-icon-svgrepo-com.svg" width="42" alt="next.js" title="Next.js" className="ml-1"/>
                    {/* <SkillImg /> */}
                </div>
            </button>
            {modal === true ? <SkillExplain /> : null }
            <div>
            </div>
        </div>
    );
}