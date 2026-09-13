function ReferEarn() {
  return (
    <div className="feature-page">
      <header className="feature-page__header">
        <span className="feature-page__eyebrow">Referral</span>
        <h1 className="feature-page__title">Refer &amp; Earn</h1>
      </header>

      <div className="feature-page__body">
        <div className="feature-page__card feature-page__info">
          <p className="feature-page__description">
            Invite friends to VELOOP Rewards and unlock eligible benefits when they complete supported activities. This feature is designed to make referrals simple, trusted, and rewarding.
          </p>

          <ul className="feature-page__list">
            <li>Share a referral link with trusted contacts.</li>
            <li>Track eligible activity status and rewards.</li>
            <li>Reward balances can be reviewed in profile dashboards.</li>
          </ul>
        </div>

        <div className="feature-page__card">
          <h2 style={{ marginTop: 0 }}>Feature snapshot</h2>
          <p className="feature-page__description">
            Reward values and conditions are configurable and should be replaced with live data when the product is ready.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReferEarn;
