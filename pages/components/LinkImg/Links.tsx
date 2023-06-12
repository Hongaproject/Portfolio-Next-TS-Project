import Link from "next/link";

export default function Links() {
    return(
        <div className="mb-8 leading-relaxed">
            <div className="flex">
                <Link href='https://github.com/Hongaproject' target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-rounded/48/github.png" alt="github" title="Github"/></Link>
                <Link href='https://honggacoding.tistory.com/' target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/t-key.png" alt="blog" title="T-story"/></Link>
                <Link href='mailto:tkwlscjq13@naver.com' target="_blank"><img width="48" height="48" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-email-social-media-ui-tanah-basah-glyph-tanah-basah.png" alt="Email" title="Email"/></Link>
            </div>
        </div>
    );
}