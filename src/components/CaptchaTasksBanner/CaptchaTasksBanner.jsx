import { ShieldCheck, CheckCircle2, CircleDashed, Keyboard, Coins } from 'lucide-react';
import RewardBanner from '../RewardBanner/RewardBanner';
import styles from './CaptchaTasksBanner.module.css';
import captchaImage from '../../Assets/Images/captcha.png';

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
      backgroundimg={captchaImage}
    >
      
    </RewardBanner>
  );
}

export default CaptchaTasksBanner;
