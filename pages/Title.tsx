import Head from "next/head";

type headProps = {
    profile: string;
}

export default function Title({profile}: headProps) {
    return(
        <Head>
            <title>{profile} | 소개 글</title>
        </Head>
    );
}