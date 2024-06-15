import styles from './index.module.scss';

import Head from 'next/head';
import Image from 'next/image';

import CardPage from '@/components/cards/cardPage/cardPage';

export default function Index() {
  return (
    <>
      <Head>
        <title>Gaylor Wafflard-Fernandez</title>
        <meta name="description" content="PostDoc in Astrophysics at IPAG, previously working at IRAP. Protoplanetary Disks & Simulations."/>

        {/* <meta property="og:url" content="https://kevinoliveira.com.br/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Gaylor Wafflard-Fernandez"/>
        <meta property="og:description" content="PostDoc in Astrophysics at IPAG, previously working at IRAP. Protoplanetary Disks & Simulations."/>
        <meta property="og:image" content="https://kevinoliveira.com.br/img/code-in-the-dark.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://kevinoliveira.com.br/"/>
        <meta name="twitter:title" content="Gaylor Wafflard-Fernandez"/>
        <meta name="twitter:description" content="PostDoc in Astrophysics at IPAG, previously working at IRAP. Protoplanetary Disks & Simulations."/>
        <meta name="twitter:image" content="https://kevinoliveira.com.br/img/code-in-the-dark.png"/> */}
        <link rel="icon" href="/img/favicon.ico" />
        <meta
          name="google-site-verification"
          content="e8tKK8_XjvMNTjaAiBPkX3bu_03VuuQzNjcHFTMS8mI"
        />
      </Head>

      <div className="wrapper">
        <article className={styles.presentation}>
          <Image priority src="/img/avatar-lg.png" width="280" height="480" alt="" />
          <h1>Gaylor <strong>Wafflard-Fernandez</strong></h1>
          <h2>PostDoc in Astrophysics</h2>
        </article>

        <nav className={styles.menu}>
          <CardPage href="/about/" title="About me" icon="info-fill" />
          <CardPage href="/research/" title="Research" icon="bulb-outline" />
          <CardPage href="/more/" title="More" icon="plus-circle-fill" />
          {/* <CardPage href="" title="Catalog" icon="edit-2-outline" target="_blank" /> */}
        </nav>  
      </div>
    </>
  )
}
