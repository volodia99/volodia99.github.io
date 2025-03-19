import CardJob from '@/components/cards/cardJob/cardJob';
import styles from './listChrono.module.scss';

type Props = {
  list: Array<ListProps>
};

type ListProps = {
  year: number,
  jobs: Array<JobProps>
}

type JobProps = {
  href: string,
  title: string,
  author: string,
  description: string,
  tags: Array<string>,
  image?: string
}

export default function ListChrono(props: Props) {
  return(
    <ol className={styles.list}>
    {props.list.map((list, index) => (
      <li className={styles['list-item']} key={index}>
        <h2 className={styles['list-title']}>{list.year}</h2>

        <ul className={styles.sublist}>
          {list.jobs.map((job, index) => (
            <li className={styles['sublist-item']} key={index}>
              <CardJob href={job.href} title={job.title} author={job.author} description={job.description} tags={job.tags} image={job.image} />
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ol>
  )
}
