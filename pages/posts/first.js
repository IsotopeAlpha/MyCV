import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../Layout/components/layout";

export default function FirstPost() {
    return (<Layout>
    <Head>
        <title>First Post Page</title>
        <link rel="icon" href="/images/img.png"/>
    </Head>
        <div>My First Post</div>
        <Link href='/'>Home</Link>
        <Image src="/images/img.png" width={144} height={144} alt="Image Hi"/>
    </Layout>);
}

