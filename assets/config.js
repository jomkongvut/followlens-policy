/*
 * FollowLens site configuration
 * ------------------------------------------------------------
 * Edit the values below. Every page reads this file at runtime, so you
 * never need to touch the HTML to change links, prices or legal details.
 */
window.SITE_CONFIG = {
  // true while FollowLens is 100% free (no sign-in, no payments): hides pricing / Pro content
  // and uses the "@free" wording variants. Set to false when Pro launches.
  freeRelease: true,

  // Chrome Web Store listing URL (replace "#" once the extension is published)
  chromeStoreUrl: "#",

  // Public support / legal contact address. Leave empty to hide email everywhere —
  // contactUrl is then used as the contact channel instead.
  supportEmail: "",
  contactUrl: "https://github.com/jomkongvut/followlens-policy/issues",

  // Tip jar (shown in the footer of every page)
  donateUrl: "https://buymeacoffee.com/jomkongvut",

  // Brand name shown across the site
  companyName: "FollowLens",

  // Legal name of the person or company operating FollowLens (used in the legal pages)
  legalEntity: "FollowLens",

  // Effective date of the Privacy Policy and Terms (YYYY-MM-DD)
  effectiveDate: "2026-10-01",

  // Governing law / courts named in the Terms of Service (e.g. "Thailand")
  jurisdiction: "Thailand",

  // Prices shown in the pricing section, per language
  prices: {
    monthly:  { en: "$4.99 / month", th: "฿149 / เดือน" },
    yearly:   { en: "$29 / year",    th: "฿890 / ปี" },
    lifetime: { en: "$49 one-time",  th: "฿1,490 จ่ายครั้งเดียว" }
  }
};
