'use client'

import { Icon } from "@iconify/react";
import styles from './footer.module.scss';
import LinkExternal from '@/components/buttons/external/external';
import Link from 'next/link';

export default function Footer() {
  return(
    <footer role="contentinfo" className={styles.footer}>
      <nav className={styles.links}>
        <LinkExternal title="CV" href="/files/cv.pdf" />
        <LinkExternal title="LinkedIn" href="https://fr.linkedin.com/in/gaylor-wafflard-fernandez-a51897125" />
        <LinkExternal title="GitHub" href="https://github.com/volodia99" />
      </nav>
      <p className={styles.copy}>2024 &copy; Gaylor Wafflard-Fernandez</p>
      {/* <p className={styles.copy}><a href="https://nubank.com.br/pagar/4tc3b/eSpPDeBif2" target="_blank" rel="noopener noreferrer"><small><Icon icon="eva:heart-fill" /> Buy me a coffee</small></a></p> */}
    </footer>
  )
}
