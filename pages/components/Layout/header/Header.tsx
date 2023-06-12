import Link from "next/link";
import DarkModeBtn from "../../dark-mode-btn";

interface Props {
    href: string
}

export default function Header({href}: Props) {
    
    return(
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={'./'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/resume.png" alt="resume"/>
                        <span className="ml-3 text-xl">홍성원의 Portfolio</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'./'} className="mr-5 hover:text-gray-900">홈</Link>
                        <Link href={'./project'} className="mr-5 hover:text-gray-900">프로젝트</Link>
                    </nav>
                        <DarkModeBtn />
                </div> 
            </header>  
        </div>
    );
}