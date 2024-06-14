import Head from "next/head";
import ButtonCTA from '@/components/buttons/cta/cta';
import research from '@/data/research.json';
import ListChrono from "@/components/lists/listChrono/listChrono";

export default function Research() {
  return(
    <>
      <Head>
        <title>Research | Gaylor Wafflard-Fernandez</title>
        </Head>
      <div className="wrapper">
      <div className="content">
          <h1>
            <strong>Research</strong>
            <ButtonCTA title="/ADS" href="https://ui.adsabs.harvard.edu/search/filter_property_fq_property=AND&filter_property_fq_property=property%3A%22refereed%22&fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq=%7B!type%3Daqp%20v%3D%24fq_property%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&fq_property=(property%3A%22refereed%22)&p_=0&q=%20author%3A%22Wafflard-Fernandez%2C%20Gaylor%22&sort=date%20desc%2C%20bibcode%20desc" />
          </h1>


          <ListChrono list={research} />
        </div>
      </div>
    </>
  )
}