import { ShieldCheck, CheckCircle2, CircleDashed, Keyboard, Coins } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './CaptchaTasksBanner.module.css';

function CaptchaTasksBanner() {
  return (
    <RewardBanner
      title="Captcha Tasks"
      description="Complete available captcha tasks accurately and earn rewards for eligible submissions."
      ctaText="Start Task"
      route="/captcha"
      highlight="Verification required"
      theme="silver"
      smallLabel="Task verification"
    >
      <div className={styles.scene}>
        <div className={styles.panel}>
          <div className={styles.headerRow}>
            <ShieldCheck size={16} />
            <span>Task Check</span>
          </div>

          <div className={styles.checkBox}>✓</div>
          <div className={styles.progressLine}>
            <span></span>
          </div>
        </div>

        <div className={styles.keyboardBox}>
          <Keyboard size={18} />
        </div>

        <div className={styles.rewardPill}>
          <Coins size={14} />
          Reward
        </div>

        <div className={styles.checkBadge}>
          <CheckCircle2 size={19} />
        </div>
      </div>
    </RewardBanner>
  );
}

export default CaptchaTasksBanner;
