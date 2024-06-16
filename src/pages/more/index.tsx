import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import Head from "next/head";

export default function more() {
  return(
    <>
      <Head>
        <title>More | Gaylor Wafflard-Fernandez</title>
      </Head>
      <div className="wrapper">
        <div className="content">
          <h1>
            <span>Miscellaneous</span>
            <strong>Scientific productions</strong>
          </h1>

          <ListAccordion list={[
            {
              title: 'Under construction',
              content: 'TBD',
              thumb: '',
              thumbAlt: ''
            },
            {
              title: 'Under construction',
              content: 'TBD',
              thumb: '',
              thumbAlt: ''
            },
            {
              title: 'Under construction',
              content: 'TBD',
              thumb: '',
              thumbAlt: ''
            }
          ]} />
        </div>
      </div>
    </>
  )
}