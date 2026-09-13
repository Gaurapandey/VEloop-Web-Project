import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026 VELOOP Rewards</span>
        <span>Premium fintech rewards experience</span>
      </div>
    </footer>
  );
}

export default Footer;
