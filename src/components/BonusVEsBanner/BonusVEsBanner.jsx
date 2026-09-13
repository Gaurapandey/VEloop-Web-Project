import { Sparkles, Coins, BadgePercent, Gift, TrendingUp } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './BonusVEsBanner.module.css';

function BonusVEsBanner() {
  return (
    <RewardBanner
      title="Get Extra VEs"
      description="Complete eligible activities and unlock additional VEs through special bonus opportunities."
      ctaText="Explore Bonus"
      route="/bonus"
      highlight="Bonus rewards available"
      theme="gold"
      smallLabel="Reward boost"
    >
      <div className={styles.scene}>
        <div className={styles.badge}><BadgePercent size={18} /> Bonus</div>
        <div className={styles.bonusBox}>
          <Gift size={28} />
          <span>+VE</span>
        </div>
        <div className={styles.meter}>
          <div className={styles.meterFill}></div>
        </div>
        <div className={styles.coinStack}>
          <Coins size={16} className={styles.coinOne} />
          <Coins size={18} className={styles.coinTwo} />
          <Coins size={20} className={styles.coinThree} />
        </div>
        <div className={styles.sparkles}><Sparkles size={16} /></div>
        <div className={styles.trend}><TrendingUp size={16} /> 2.5x</div>
      </div>
    </RewardBanner>
  );
}

export default BonusVEsBanner;
