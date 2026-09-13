import { ArrowLeftRight, Wallet, Coins, CircleDollarSign } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './SwapCenterBanner.module.css';

function SwapCenterBanner() {
  return (
    <RewardBanner
      title="Swap Center"
      description="Convert eligible reward balances between supported currencies and manage your rewards more efficiently."
      ctaText="Open Swap Center"
      route="/swap"
      highlight="Conversion available"
      theme="purple"
      smallLabel="Balance Conversion"
    >
      <div className={styles.scene}>
        <div className={styles.walletCard}>
          <Wallet size={18} />
          <div>
            <div className={styles.label}>Wallet</div>
            <div className={styles.value}>7,420 VE</div>
          </div>
        </div>

        <div className={styles.swapRing}>
          <ArrowLeftRight size={22} />
        </div>

        <div className={styles.balanceCardOne}>
          <CircleDollarSign size={18} />
          <div>
            <div className={styles.label}>VE</div>
            <div className={styles.value}>4,200</div>
          </div>
        </div>

        <div className={styles.balanceCardTwo}>
          <Coins size={18} />
          <div>
            <div className={styles.label}>SVE</div>
            <div className={styles.value}>4,200</div>
          </div>
        </div>

        <div className={styles.pill}>Live rates</div>
      </div>
    </RewardBanner>
  );
}

export default SwapCenterBanner;
