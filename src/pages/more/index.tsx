import ListAccordion from "@/components/lists/listAccordion/listAccordion";
import more from '@/data/more.json';
import Head from "next/head";

export default function More() {
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

          <ListAccordion list={more} />
        </div>
      </div>
    </>
  )
}