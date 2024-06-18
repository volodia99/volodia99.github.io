import ButtonCTA from '@/components/buttons/cta/cta';
import MarkdownWithMath from '@/components/markdown/MarkdownWithMath';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import styles from './listAccordion.module.scss';

type Props = {
  list: Array<ItemProps>
}

type ItemProps = {
  href: string,
  title: string,
  content: string,
  thumb: string,
  thumbAlt: string
}

export default function ListAccordion(props: Props) {
 return(
    <ol className={styles.list}>
      {props.list.map((item, index) => (
        <li key={index} className={styles.item}>
          <details>
            <summary className={styles.title}>
              <h2>{item.title}</h2>
              <Icon icon="eva:diagonal-arrow-right-up-outline" />
            </summary>
            <div className={styles.content}>
              {item.thumb ?
                  <Image className={styles.image} src={item.thumb} width="648" height="486" loading="lazy" alt={item.thumbAlt} />
                  : ''
              }
              <div className={styles.description}>
                <MarkdownWithMath content={item.content} />
              </div>
              {/* <p>{item.content}</p> */}
              <ButtonCTA title="See more" href={item.href} />

            </div>
          </details>
        </li>
      ))}
    </ol>
 )
}