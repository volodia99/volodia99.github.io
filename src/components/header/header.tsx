import { Icon } from "@iconify/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import Logo from './logo/logo';
import ToggleTheme from './toggleTheme/toggleTheme';

export default function Header() {
  const router = useRouter();

  return (
    <header role="banner" className={styles.header}>
      <Logo />
      <nav className={styles.menu}>
        <Link href="/about" className={`${styles['menu-item']} ${router.pathname == "/about" ? styles.active : ""}`}>About</Link>
        <Link href="/research" className={`${styles['menu-item']} ${router.pathname == "/research" ? styles.active : ""}`}>Research</Link>
        <Link href="/more" className={`${styles['menu-item']} ${router.pathname == "/more" ? styles.active : ""}`}>More</Link>
      </nav>
      <ToggleTheme />
    </header>
  )
}
