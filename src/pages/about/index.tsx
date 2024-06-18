import Head from 'next/head';
import Link from 'next/link';

import CardTimeline from '@/components/cards/cardTimeline/cardTimeline';
import ContentImage from '@/components/content/contentImage/contentImage';
import ListTimeline from '@/components/lists/listTimeline/listTimeline';
import experiences from '@/data/experiences.json';
import ListTags from '@/components/lists/listTags/listTags';

export default function About() {
  return (
    <>
      <Head>
        <title>About me | Gaylor Wafflard-Fernandez</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>About me</h1>
          <p>I'm a PosDoc at the Institute for Planetary sciences and Astrophysics (<Link href="https://ipag.osug.fr/" target="_blank">IPAG</Link>), in Grenoble. I am currently working on planetary evolution in protoplanetary disks.</p>
        </div>

        <ContentImage src="/img/code-in-the-dark.gif" width={1080} height={480} alt="Interaction of a planet">
          <figcaption>
            <p>Interaction of a massive planet with a disk of gas.</p>
            <p>Simulated with the <Link href="https://github.com/idefix-code/idefix/" target="_blank">IDEFIX</Link> code.</p>
          </figcaption>
        </ContentImage>

        <div className="content">
          <ListTimeline title="Research experience">
            {experiences.map((experience, index) => (
              <li key={index}>
                <CardTimeline title={experience.title} year={experience.year} description={experience.description} />
              </li>
            ))}
          </ListTimeline>

          <ListTags title="Research Interest" list={[
            'Protoplanetary disks',
            'Disk accretion & evolution',
            'Disk (sub)structures',
            'Planet migration',
          ]} />

          <ListTags title="Technical experience" list={[
            'Python',
            'Latex',
            'Git',
            'IDEFIX',
            'RADMC3D',
            'FARGO3D',
            'Dusty FARGO-ADSG',
          ]} />
        </div>
      </div>
    </>
  )
}
