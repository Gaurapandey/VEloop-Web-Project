function SwapCenter() {
  return (
    <div className="feature-page">
      <header className="feature-page__header">
        <span className="feature-page__eyebrow">Conversion</span>
        <h1 className="feature-page__title">Swap Center</h1>
      </header>

      <div className="feature-page__body">
        <div className="feature-page__card feature-page__info">
          <p className="feature-page__description">
            Swap Center supports conversion between supported reward balances or platform currencies. This is different from redemption because it focuses on managing value internally rather than spending it on a payout.
          </p>

          <ul className="feature-page__list">
            <li>Compare supported balances before conversion.</li>
            <li>Review conversion instructions and rates.</li>
            <li>Complete a secure, guided swap workflow.</li>
          </ul>
        </div>

        <div className="feature-page__card">
          <h2 style={{ marginTop: 0 }}>Swap flow</h2>
          <p className="feature-page__description">
            Select source value, choose destination balance, confirm conversion, and review updated totals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SwapCenter;
