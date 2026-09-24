import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './RewardBanner.module.css';

function RewardBanner({
  title,
  description,
  ctaText,
  route,
  highlight,
  theme = 'default',
  children,
  smallLabel,
  backgroundimg,
}) {
  return (
    <section
      className={`${styles.banner} ${styles[theme]}`}
      style={{
        '--banner-bg': backgroundimg ? `url(${backgroundimg})` : 'none',
      }}
    >
      {/* Background layer */}
      <div className={styles.backgroundLayer} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.headlineWrap}>
          {smallLabel && (
            <span className={styles.kicker}>{smallLabel}</span>
          )}

          <h2 className={styles.title}>{title}</h2>
        </div>

        <p className={styles.description}>{description}</p>

        {highlight && (
          <div className={styles.highlight}>
            {highlight}
          </div>
        )}

        <Link
          to={route}
          className={styles.cta}
          aria-label={ctaText}
        >
          <span className="text">{ctaText}</span>

          <span className={styles.arrowWrap}>
            <ArrowRight size={17} />
          </span>
        </Link>
      </div>

      {/* Optional foreground children */}
      {children && (
        <div className={styles.imageSection}>
          {children}
        </div>
      )}
    </section>
  );
}

export default RewardBanner;