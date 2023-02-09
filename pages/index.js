import Head from 'next/head';
import Layout, { siteTitle } from '../Layout/components/layout.js';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../Layout/components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Detail-oriented, organized, very analytical and meticulous person. Works at a fast pace to meet tight deadlines. 
          Enthusiastic team player ready to contribute to company success. Software Developer who is talented at translating customer requirements into testable engineering plans. 
          <br/>Maintains exceptional development quality from conception through distribution. Works alongside clients and colleagues through all stages of development to produce outstanding final products.
          Result-focused software engineering professional with extensive experience in development and testing.
          Well-versed in promoting objective-oriented approaches to real-time software development.
          Hands-on Software Developer is eager to collaborate with customers to find optimal solutions. Carefully customizes each product to user needs and budgets. 
          Provides reliably actionable code and software assets for customers and internal data libraries. <br/>Enthusiastic technical professional with a complete understanding of the entire software development cycle. 
          A hardworking and passionate job seeker with strong organizational skills eager to secure an entry-level Software Developer position. 
          Ready to help the team achieve company goals. Very good in troubleshooting and diagnosing computers for hidden faults and finding solutions to them.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
