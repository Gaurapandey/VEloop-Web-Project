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
      <section className="dashboard-hero">
        <div className="dashboard-panel dashboard-panel--primary">
          <span className="eyebrow">Rewards overview</span>
          <h1>Welcome back, Aaron</h1>
          <p>
            Your VELOOP rewards ecosystem is performing strongly. Track referrals,
            convert eligible balances, unlock bonus opportunities, and redeem
            rewards without leaving the dashboard.
          </p>

          <div className="dashboard-actions">
            <button type="button" className="primary-btn">
              View rewards
            </button>
            <button type="button" className="secondary-btn">
              Check bonuses
            </button>
          </div>
        </div>

        <div className="dashboard-panel dashboard-panel--side">
          <div className="mini-label">Available balance</div>
          <div className="balance-value">
            12,480 <span>VE</span>
          </div>

          <div className="balance-row">
            <span>Active offers</span>
            <strong>05</strong>
          </div>
          <div className="balance-row">
            <span>Pending tasks</span>
            <strong>03</strong>
          </div>
          <div className="balance-row">
            <span>Last payout</span>
            <strong>$210</strong>
          </div>
        </div>
      </section>

      <section className="dashboard-stats" aria-label="Reward stats overview">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.note}</small>
          </div>
        ))}
      </section>

      <section className="feature-feed">
        <div className="feature-feed__header">
          <span className="eyebrow">Reward ecosystem</span>
          <h2>Explore your opportunities</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-grid__item feature-grid__item--wide">
            <ReferEarnBanner />
          </div>
          <div className="feature-grid__item">
            <SwapCenterBanner />
          </div>
          <div className="feature-grid__item">
            <BonusVEsBanner />
          </div>
          <div className="feature-grid__item">
            <CaptchaTasksBanner />
          </div>
          <div className="feature-grid__item">
            <ExchangeCenterBanner />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
