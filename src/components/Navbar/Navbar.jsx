import { Link } from 'react-router-dom';
import { Menu, Sparkles } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'Refer', path: '/refer' },
  { name: 'Swap', path: '/swap' },
  { name: 'Bonus', path: '/bonus' },
  { name: 'Captcha', path: '/captcha' },
  { name: 'Exchange', path: '/exchange' },
];

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} to="/" aria-label="VELOOP Rewards home">
          <span className={styles.brandMark}>
            <Sparkles size={16} />
          </span>
          <span>VELOOP Rewards</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={styles.link}>
              {item.name}
            </Link>
          ))}
        </nav>

        <button className={styles.menuButton} aria-label="Open navigation menu" type="button">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
