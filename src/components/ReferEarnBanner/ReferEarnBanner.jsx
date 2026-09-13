import { Gift, Users, Coins, ArrowRight, Sparkles } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './ReferEarnBanner.module.css';

function ReferEarnBanner() {
  return (
    <RewardBanner
      title="Refer & Earn"
      description="Invite your friends to VELOOP Rewards and unlock exciting rewards when they complete eligible activities."
      ctaText="Refer & Earn"
      route="/refer"
      highlight="Eligible rewards"
      theme="blue"
      smallLabel="Referral"
    >
      <div className={styles.scene}>
        <div className={styles.pill}>+VE</div>
        <div className={styles.connectionLine} />

        <div className={styles.userCardLeft}>
          <div className={styles.avatar}>
            <Users size={18} />
          </div>
          <div>
            <div className={styles.userName}>Friend A</div>
            <div className={styles.userMeta}>Joined</div>
          </div>
        </div>

        <div className={styles.giftBox}>
          <Gift size={34} />
          <span>Gift</span>
        </div>

        <div className={styles.userCardRight}>
          <div className={styles.avatar}>
            <Users size={18} />
          </div>
          <div>
            <div className={styles.userName}>Friend B</div>
            <div className={styles.userMeta}>Accepted</div>
          </div>
        </div>

        <div className={styles.coinOne}><Coins size={18} /></div>
        <div className={styles.coinTwo}><Coins size={15} /></div>
        <div className={styles.coinThree}><Coins size={13} /></div>
        <div className={styles.sparkle}><Sparkles size={14} /></div>
      </div>
    </RewardBanner>
  );
}

export default ReferEarnBanner;
