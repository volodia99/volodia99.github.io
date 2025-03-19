import styles from './listRemarks.module.scss';

type Props = {
  title?: string,
  list: Array<string>
};

export default function ListRemarks(props: Props) {
  return(
    <div className={styles.wrapper}>
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : ''}
      <ul className={styles.list}>
        {props.list.map((remarks, index) => (
          <li key={index} className={styles.remarks}>{remarks}</li>
        ))}
      </ul>
    </div>
  )
}