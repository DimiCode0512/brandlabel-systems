"use client";

const CONSENT_KEY = "brandlabel_cookie_consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem(CONSENT_KEY);
        window.location.reload();
      }}
      className="touch-manipulation text-left text-xl text-neutral-300 transition hover:text-white active:opacity-70 lg:text-2xl"
    >
      Cookie settings
    </button>
  );
}
