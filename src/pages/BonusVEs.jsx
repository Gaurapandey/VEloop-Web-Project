function BonusVEs() {
  return (
    <div className="feature-page">
      <header className="feature-page__header">
        <span className="feature-page__eyebrow">Campaigns</span>
        <h1 className="feature-page__title">Bonus VEs</h1>
      </header>

      <div className="feature-page__body">
        <div className="feature-page__card feature-page__info">
          <p className="feature-page__description">
            Explore bonus campaigns that give users access to extra VEs through qualifying tasks, milestones, and promotional campaigns. The system keeps the value flexible and configurable.
          </p>

          <ul className="feature-page__list">
            <li>Track bonus progress and unlock states.</li>
            <li>View bonus opportunities with neutral wording.</li>
            <li>See how campaign activity improves total rewards.</li>
          </ul>
        </div>

        <div className="feature-page__card">
          <h2 style={{ marginTop: 0 }}>Campaign examples</h2>
          <p className="feature-page__description">
            Bonus campaigns may include milestone lifts, limited-time boosts, or activity-based completion rewards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BonusVEs;
