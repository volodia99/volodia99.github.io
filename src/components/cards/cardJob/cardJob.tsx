import ListTags from '@/components/lists/listTags/listTags';
import Link from "next/link";
import Image from 'next/image';
import MarkdownWithMath from '@/components/markdown/MarkdownWithMath';
import styles from './cardJob.module.scss';

type Props = {
  href: string,
  title: string,
  author: string,
  description: string,
  tags: Array<string>,
  image?: string
}

export default function CardJob(props: Props) {
  return(
    <div className={styles.card}>      
      <h3 className={styles.title}>
        <Link href={props.href} target="_blank">{props.title}</Link>
      </h3>
      <p className={styles.author}>{props.author}</p>
      <div className={styles.description}>
        <MarkdownWithMath content={props.description} />
      </div>
      {props.image && (
        <Image className={styles.image} src={props.image} loading="lazy" width="720" height="560" alt={`Conceito do projeto ${props.title}`} />
      )}
      <div className={styles.infos}>
        <ListTags list={props.tags}/>
      </div>
    </div>
  )
}
