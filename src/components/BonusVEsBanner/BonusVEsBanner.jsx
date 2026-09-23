import { Sparkles, Coins, BadgePercent, Gift, TrendingUp } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './BonusVEsBanner.module.css';
import BonusVE from '../../Assets/Images/BonusVEs.png';

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
      backgroundimg={BonusVE}
    >
      
    </RewardBanner>
  );
}

export default BonusVEsBanner;
