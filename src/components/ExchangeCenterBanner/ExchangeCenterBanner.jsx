import { Wallet, Coins, ArrowRightLeft, Gift, ArrowDownUp } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './ExchangeCenterBanner.module.css';
import ExchangeCenterImage from '../../Assets/Images/ExchangeCenter.png';

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
      backgroundimg={ExchangeCenterImage}
    >
      
    </RewardBanner>
  );
}

export default ExchangeCenterBanner;
