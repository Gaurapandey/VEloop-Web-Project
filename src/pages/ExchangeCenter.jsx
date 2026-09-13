function ExchangeCenter() {
  return (
    <div className="feature-page">
      <header className="feature-page__header">
        <span className="feature-page__eyebrow">Redemption</span>
        <h1 className="feature-page__title">Exchange Center</h1>
      </header>

      <div className="feature-page__body">
        <div className="feature-page__card feature-page__info">
          <p className="feature-page__description">
            Exchange Center is where eligible rewards can be redeemed into supported payout or reward options. Unlike Swap Center, the focus here is on payout conversion and redemption pathways.
          </p>

          <ul className="feature-page__list">
            <li>Review supported reward categories and channels.</li>
            <li>Check eligibility before redemption.</li>
            <li>Move eligible rewards into supported reward outcomes.</li>
          </ul>
        </div>

        <div className="feature-page__card">
          <h2 style={{ marginTop: 0 }}>Redemption path</h2>
          <p className="feature-page__description">
            Review reward availability, select a supported option, and confirm the final exchange or payout flow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExchangeCenter;
