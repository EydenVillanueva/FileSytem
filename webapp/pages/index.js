import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout/layout';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1 className="title">
                Welcome to the File System Registration!
            </h1>

            <p className="description">
                Get started by adding a new File
            </p>

            <div className="grid">
                <Link href="files/register">
                    <a className="card">
                        <h3>Add a new File &rarr;</h3>
                        <p>Register a new File with the patient info, allergies and more...</p>
                    </a>
                </Link>
                <Link href="files/find-file">
                    <a className="card">
                        <h3>Find File by Id &rarr;</h3>
                        <p>Find any File stored with its Id to see all the details and more...</p>
                    </a>
                </Link>
            </div>
            <style jsx>{`                    
              a {
                color: inherit;
                text-decoration: none;
              }

              .title a {
                color: #0070f3;
                text-decoration: none;
              }

              .title a:hover,
              .title a:focus,
              .title a:active {
                text-decoration: underline;
              }

              .title {
                margin: 0;
                line-height: 1.15;
                font-size: 2rem;
              }

              .title,
              .description {
                text-align: center;
              }

              .description {
                line-height: 1.5;
                font-size: 1.5rem;
              }

              .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
              }

              .card {
                margin: 0.5rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
              }

              .card:hover,
              .card:focus,
              .card:active {
                color: #0070f3;
                border-color: #0070f3;
              }

              .card h3 {
                margin: 0 0 0.5rem 0;
                font-size: 1.3rem;
              }

              .card p {
                margin: 0;
                font-size: 1rem;
                line-height: 1.3;
              }

              .logo {
                height: 1em;
              }

              @media (max-width: 800px) {
                .grid {
                  width: 100%;
                  flex-direction: column;
                }
              }
            `}</style>
        </Layout>
    )
}
