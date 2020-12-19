import React from "react";
import Link from 'next/link'
import Head from 'next/head'

import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';


const name = "Eyden Villanueva";
export const siteTitle = "File System";

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Manage all related to File registration"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                <>
                    <h2 className={utilStyles.headingLg}>
                        <a
                            className={utilStyles.colorInherit}
                            href="https://github.com/EydenVillanueva"
                            target="_blank">
                            Made by: {name}
                        </a>
                    </h2>
                </>
            </header>
            <main className={styles.main}>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}