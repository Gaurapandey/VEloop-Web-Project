import ReferEarnBanner from '../components/ReferEarnBanner/ReferEarnBanner';
import SwapCenterBanner from '../components/SwapCenterBanner/SwapCenterBanner';
import BonusVEsBanner from '../components/BonusVEsBanner/BonusVEsBanner';
import CaptchaTasksBanner from '../components/CaptchaTasksBanner/CaptchaTasksBanner';
import ExchangeCenterBanner from '../components/ExchangeCenterBanner/ExchangeCenterBanner';

const stats = [
  { label: 'Total rewards', value: '12.4K', note: 'VE balance' },
  { label: 'Active offers', value: '05', note: 'Live campaigns' },
  { label: 'Success rate', value: '96.8%', note: 'Task completion' },
  { label: 'Redeemed', value: '$842', note: 'This month' },
];

function Home() {
  return (
    <div className="dashboard-shell">
      
      <section className="feature-feed">
        <div className="feature-grid">
          <div className="feature-grid__item feature-grid__item--wide">
            <ReferEarnBanner />
          </div>
          <div className="feature-grid__item feature-grid__item--wide">
            <SwapCenterBanner />
          </div>
           <div className="feature-grid__item feature-grid__item--wide">
            <BonusVEsBanner />
          </div>
          
          <div className="feature-grid__item feature-grid__item--wide">
            <CaptchaTasksBanner />
          </div>
          <div className="feature-grid__item feature-grid__item--wide">
            <ExchangeCenterBanner />
          </div> 
        </div>
      </section>
    </div>
  );
}

export default Home;
