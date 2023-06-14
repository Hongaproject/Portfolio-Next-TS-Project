import Link from "next/link";

export default function Links() {
    return(
        <div className="mb-8 leading-relaxed">
            <div className="flex">
                <Link href='https://github.com/Hongaproject' target="_blank"><img width="48" height="48" src="/github.png" alt="github" title="Github"/></Link>
                <Link href='https://honggacoding.tistory.com/' target="_blank"><img width="50" height="50" src="/t.png" alt="blog" title="T-story"/></Link>
                <Link href='mailto:tkwlscjq13@naver.com' target="_blank"><img width="48" height="48" src="/email.png" alt="Email" title="Email"/></Link>
            </div>
        </div>
    );
}