import { ArrowLeftRight, Wallet, Coins, CircleDollarSign } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './SwapCenterBanner.module.css';
import SwapCenterImage from '../../Assets/Images/SwapCenter.png';

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
      backgroundimg={SwapCenterImage}
    >
      
    </RewardBanner>
  );
}

export default SwapCenterBanner;
