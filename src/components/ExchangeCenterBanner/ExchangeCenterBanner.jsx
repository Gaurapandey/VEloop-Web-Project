import { Wallet, Coins, ArrowRightLeft, Gift, ArrowDownUp } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './ExchangeCenterBanner.module.css';

function ExchangeCenterBanner() {
  return (
    <RewardBanner
      title="Exchange Center"
      description="Explore available redemption options and exchange eligible VEs for supported rewards."
      ctaText="Open Exchange Center"
      route="/exchange"
      highlight="Eligible rewards"
      theme="default"
      smallLabel="Redemption"
    >
      <div className={styles.scene}>
        <div className={styles.walletBlock}>
          <Wallet size={18} />
          <span>Wallet</span>
        </div>

        <div className={styles.coinStack}>
          <Coins size={18} className={styles.coinOne} />
          <Coins size={18} className={styles.coinTwo} />
          <Coins size={18} className={styles.coinThree} />
        </div>

        <div className={styles.exchangeRing}>
          <ArrowDownUp size={22} />
        </div>

        <div className={styles.rewardCard}>
          <Gift size={16} />
          <div>
            <div className={styles.label}>Reward</div>
            <div className={styles.value}>Gift card</div>
          </div>
        </div>

        <div className={styles.arrowChip}>
          <ArrowRightLeft size={14} />
        </div>
      </div>
    </RewardBanner>
  );
}

export default ExchangeCenterBanner;
