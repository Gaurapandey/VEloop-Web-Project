import { Gift, Users, Coins, ArrowRight, Sparkles } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './ReferEarnBanner.module.css';
import RewardImage from '../../Assets/Images/Reward.png';


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
       backgroundimg={RewardImage}
    >
  
    </RewardBanner>
  );
}

export default ReferEarnBanner;
