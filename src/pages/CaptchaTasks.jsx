function CaptchaTasks() {
  return (
    <div className="feature-page">
      <header className="feature-page__header">
        <span className="feature-page__eyebrow">Verification</span>
        <h1 className="feature-page__title">Captcha Tasks</h1>
      </header>

      <div className="feature-page__body">
        <div className="feature-page__card feature-page__info">
          <p className="feature-page__description">
            Complete available captcha tasks accurately to validate activity and unlock eligible rewards. This feature is task-based, verification-driven, and clearly distinct from standard marketing banners.
          </p>

          <ul className="feature-page__list">
            <li>Complete challenge steps correctly.</li>
            <li>Confirm task submission before reward processing.</li>
            <li>Receive verification status updates.</li>
          </ul>
        </div>

        <div className="feature-page__card">
          <h2 style={{ marginTop: 0 }}>Task flow</h2>
          <p className="feature-page__description">
            Verify human action, confirm completion, and move to the rewards review step only after successful validation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaptchaTasks;
