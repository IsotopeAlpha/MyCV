import Link from "next/link";

function HomePage() {
    return (<>
        <div>This is the Home Page</div>
        <Link href='/posts/first'>First Post</Link>
    </>);
}

export default HomePage;