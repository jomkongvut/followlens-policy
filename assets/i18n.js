/*
 * FollowLens — translations & language switching (EN default, TH available)
 * ---------------------------------------------------------------------------
 * - Every visible string lives in DICT.en and DICT.th (same keys in both).
 * - Markup: data-i18n="key"        -> sets textContent
 *           data-i18n-html="key"   -> sets innerHTML (trusted strings below)
 *           data-i18n-attr="content:key;aria-label:key2" -> sets attributes
 *           data-config="path"     -> fills a value from SITE_CONFIG (prices pick the current language)
 *           data-config-href="path"-> sets href from SITE_CONFIG
 *           data-config-mailto     -> sets href="mailto:<supportEmail>"
 * - Placeholders in strings: {companyName} {supportEmail} {legalEntity}
 *   {jurisdiction} {effectiveDate} {year}
 * - Language: ?lang=th|en URL param > localStorage > English.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'followlens.lang';
  var SUPPORTED = ['en', 'th'];
  var DEFAULT_LANG = 'en';

  // Contact link: the email when SITE_CONFIG.supportEmail is set, otherwise SITE_CONFIG.contactUrl.
  var MAIL = '{contact}';

  var DICT = {
    /* ===================================================================== */
    en: {
      /* ---------- Common ---------- */
      'common.skip': `Skip to content`,
      'nav.aria': `Main navigation`,
      'nav.menu': `Open menu`,
      'nav.features': `Features`,
      'nav.how': `How it works`,
      'nav.safety': `Safety`,
      'nav.pricing': `Pricing`,
      'nav.faq': `FAQ`,
      'lang.label': `Language`,
      'cta.add': `Add to Chrome — it's free`,
      'cta.addShort': `Add to Chrome`,
      'brand.home': `FollowLens home`,
      'brand.tagline': `Follower analytics & safe auto-unfollow for Instagram.`,
      'footer.product': `Product`,
      'footer.legal': `Legal & support`,
      'footer.privacy': `Privacy Policy`,
      'footer.terms': `Terms of Service`,
      'footer.contact': `Contact support`,
      'footer.donate': `☕ Buy me a coffee`,
      'footer.disclaimer': `<strong>Disclaimer:</strong> FollowLens is not affiliated with, endorsed by, or sponsored by Instagram or Meta. Instagram is a trademark of Meta Platforms, Inc.`,
      'footer.risk': `Automated actions may violate Instagram's Terms of Use. You use FollowLens at your own risk and are solely responsible for your account — we are not liable for any block, restriction or ban.`,
      'footer.rights': `© {year} {companyName}. All rights reserved.`,
      'toc.title': `On this page`,

      /* ---------- Home: meta & hero ---------- */
      'home.title': `FollowLens — Follower analytics & safe auto-unfollow for Instagram`,
      'home.desc': `See who doesn't follow you back, spot spam and no-photo accounts, and clean up your Instagram following safely. A Chrome extension that keeps your data in your browser.`,
      'hero.eyebrow': `Chrome extension · Desktop`,
      'hero.title': `See who doesn't follow you back — <span class="grad-text">and clean up safely.</span>`,
      'hero.lead': `FollowLens scans your Instagram following and followers right in your own browser, flags spam and no-photo accounts, and helps you unfollow at a human pace — with daily caps, random delays and auto-stop built in.`,
      'hero.secondary': `See pricing`,
      'hero.trust1': `No Instagram password needed`,
      'hero.trust2': `Data stays in your browser`,
      'hero.trust3@free': `100% free — no account needed`,
      'faq.a2@free': `<p>No. FollowLens never asks for, sees or stores your Instagram password. It works inside the instagram.com tab where you're already logged in. There's no FollowLens account to create either.</p>`,
      'faq.a3@free': `<p>Everything — following and follower lists, flags, whitelist, history and settings — is stored locally in your browser using chrome.storage. Nothing is uploaded to any server, and uninstalling the extension removes it. See the <a href="privacy.html">Privacy Policy</a> for details.</p>`,
      'legal.freeNote': `<strong>Current version:</strong> FollowLens is currently 100% free. It has no sign-in and no payments, and it does not send any of your data to our servers — everything stays in your browser. Sections below about accounts, payments and subscriptions apply only if those optional features are introduced later, and we'll update this page before they are.`,
      'hero.trust3': `Free plan, no card required`,

      /* ---------- Home: mockup ---------- */
      'mock.aria': `Preview of the FollowLens dashboard: follower statistics and a list of accounts with spam and no-photo flags`,
      'mock.url': `FollowLens · Dashboard`,
      'mock.scanned': `Scan complete`,
      'stat.following': `Following`,
      'stat.followers': `Followers`,
      'stat.notBack': `Not following back`,
      'stat.noPic': `No profile photo`,
      'stat.spam': `Spam / suspicious`,
      'tab.fans': `Fans`,
      'tab.mutuals': `Mutuals`,
      'badge.spam': `Spam`,
      'badge.noPic': `No photo`,
      'badge.mutual': `3 mutual friends`,
      'badge.whitelist': `Whitelisted`,
      'mock.unfollow': `Unfollow`,
      'mock.keep': `Keep`,
      'mock.noName': `No name`,
      'mock.queue': `Auto Unfollow · Safe · 12 / 40 today`,

      /* ---------- Home: features ---------- */
      'feat.eyebrow': `Features`,
      'feat.title': `Everything you need to understand your audience`,
      'feat.lead': `Clear relationship analysis, smart flags and a careful clean-up workflow — all in one panel.`,
      'f1.t': `Who doesn't follow back`,
      'f1.d': `Instantly see accounts you follow that don't follow you back, plus your fans and your mutuals.`,
      'f2.t': `No-photo detection`,
      'f2.d': `Flags accounts without a profile picture — a common sign of inactive or fake accounts.`,
      'f3.t': `0–100 spam score`,
      'f3.d': `Scores each account using signals like missing photo or name, digit-heavy usernames, zero posts, unusual following/follower ratios and spam keywords in bios (English & Thai).`,
      'f4.t': `Mutual friends`,
      'f4.d': `See how many people you both know before you decide to unfollow someone.`,
      'f5.t': `Filters, search & sort`,
      'f5.d': `Slice your lists by relationship, flags, spam score or name to find exactly who you're looking for.`,
      'f6.t': `Whitelist`,
      'f6.d': `Protect friends, family and favourite creators so they're never unfollowed by mistake.`,
      'f7.t': `History & one-click re-follow`,
      'f7.d': `Every unfollow is logged. Changed your mind? Re-follow in a single click.`,
      'f8.t': `Safe Auto Unfollow`,
      'f8.d': `Queue accounts and let FollowLens unfollow them at a human pace, with random delays, batch pauses and a daily cap.`,
      'f9.t': `CSV export`,
      'f9.d': `Export your lists to CSV for your own records or deeper analysis in a spreadsheet.`,

      /* ---------- Home: how it works ---------- */
      'how.eyebrow': `How it works`,
      'how.title': `Three steps to a cleaner following list`,
      'how.lead': `No setup, no passwords, no spreadsheets.`,
      's1.t': `Install`,
      's1.d': `Add FollowLens to Chrome, Edge or Brave on your computer and sign in with Google to activate your plan.`,
      's2.t': `Scan`,
      's2.d': `Open instagram.com, logged in as usual, and start a scan. FollowLens reads your lists inside your own browser session.`,
      's3.t': `Clean up safely`,
      's3.d': `Review the results, whitelist the people who matter, then unfollow manually or with the Auto Unfollow queue and its safety limits.`,

      /* ---------- Home: safety ---------- */
      'safety.eyebrow': `Safety first`,
      'safety.title': `Built to be careful with your account`,
      'safety.lead': `Aggressive tools get accounts restricted. FollowLens is deliberately slow and conservative.`,
      'safety.l1.t': `Randomized delays & batch pauses`,
      'safety.l1.d': `Actions are spaced out with random intervals and longer breaks between batches, like a real person.`,
      'safety.l2.t': `Daily cap`,
      'safety.l2.d': `A daily limit on unfollows keeps your activity within a conservative range.`,
      'safety.l3.t': `Re-check before every unfollow`,
      'safety.l3.d': `Each account is checked again right before the action, so people who just followed you back — or that you whitelisted — are skipped.`,
      'safety.l4.t': `Auto-stop on action blocks`,
      'safety.l4.d': `If Instagram signals that an action was blocked, the queue stops immediately so you can wait it out.`,
      'safety.l5.t': `Your data stays local`,
      'safety.l5.d': `Scan results live in your browser's storage (chrome.storage). We never receive your follower lists and never ask for your Instagram password.`,
      'preset.title': `Auto Unfollow presets`,
      'preset.col1': `Preset`,
      'preset.col2': `Pace`,
      'preset.col3': `Best for`,
      'preset.safe': `Safe`,
      'preset.safe.pace': `Slowest, longest pauses`,
      'preset.safe.for': `New or smaller accounts, first-time use`,
      'preset.normal': `Normal`,
      'preset.normal.pace': `Balanced`,
      'preset.normal.for': `Established accounts with regular activity`,
      'preset.fast': `Fast`,
      'preset.fast.pace': `Quicker, still capped`,
      'preset.fast.for': `Short sessions when you accept more risk`,
      'safety.note': `<strong>Honest note:</strong> automated actions may violate Instagram's Terms of Use. Conservative limits reduce the risk, but no tool can guarantee that your account won't be temporarily action-blocked. You are responsible for how you use FollowLens on your account. You use it at your own risk — we are not responsible if your account is blocked, restricted or banned.`,

      /* ---------- Home: pricing ---------- */
      'pricing.eyebrow': `Pricing`,
      'pricing.title': `Start free. Upgrade when you're ready.`,
      'pricing.lead': `The Free plan includes the full scan. Pro adds automation and removes the daily limits.`,
      'period.aria': `Billing period`,
      'period.monthly': `Monthly`,
      'period.yearly': `Yearly`,
      'period.lifetime': `Lifetime`,
      'period.save': `Save 50%`,
      'free.name': `Free`,
      'free.desc': `Everything you need to see who's who.`,
      'free.price': `$0`,
      'free.sub': `Free forever`,
      'free.f1': `Full scan & relationship analysis`,
      'free.f2': `No-photo & basic spam flags`,
      'free.f3': `Filters, search & sort`,
      'free.f4': `Whitelist & unfollow history`,
      'free.f5': `Manual unfollow — up to 20 per day`,
      'free.f6': `Detailed profile check (mutual friends + detailed spam score) — up to 10 profiles per day`,
      'pro.name': `Pro`,
      'pro.popular': `Most popular`,
      'pro.desc': `For people who want to clean up at scale — safely.`,
      'pro.subMonthly': `Billed monthly · cancel anytime`,
      'pro.subYearly': `Billed yearly · save 50% vs monthly`,
      'pro.subLifetime': `Pay once, no renewals · PromptPay supported`,
      'pro.f1': `<strong>Everything in Free</strong>`,
      'pro.f2': `Auto Unfollow queue with the full safety system`,
      'pro.f3': `Unlimited detailed checks (mutual friends, detailed spam score)`,
      'pro.f4': `Unlimited manual unfollow`,
      'pro.f5': `CSV export`,
      'pro.f6': `Priority email support`,
      'pro.cta': `Install & upgrade to Pro`,
      'pro.foot': `Upgrade inside the extension after signing in with Google. Secure checkout by Stripe.`,
      'pricing.note': `Monthly and Yearly plans renew automatically until canceled — cancel anytime from “Manage subscription & invoices” in the extension. Cards are accepted for all plans; PromptPay is available for the one-time Lifetime plan. Taxes may apply depending on your location.`,

      /* ---------- Home: FAQ ---------- */
      'faq.eyebrow': `FAQ`,
      'faq.title': `Frequently asked questions`,
      'faq.lead': `Straight answers — including the uncomfortable ones.`,
      'faq.q1': `Is FollowLens safe? Will my account get banned?`,
      'faq.a1': `<p>Here's the honest answer: any automated activity may violate Instagram's Terms of Use, and Instagram can limit or block actions on accounts it considers to be behaving unusually. FollowLens reduces that risk with conservative defaults — randomized delays, batch pauses, a daily cap, a re-check before every unfollow and an automatic stop the moment Instagram blocks an action.</p><p>No tool can guarantee that your account will never see a temporary action block. Start with the Safe preset, keep your daily numbers modest, and remember that you are responsible for how you use your account.</p><p><strong>You use FollowLens entirely at your own risk.</strong> FollowLens and its developer are not responsible for any action block, temporary restriction, shadow-ban, suspension, disabled account or permanent ban of your Instagram account, or for any lost followers, content, reach or business that may result from using the extension — whether you unfollow manually or with Auto Unfollow.</p>`,
      'faq.q2': `Do you need my Instagram password?`,
      'faq.a2': `<p>No. FollowLens never asks for, sees or stores your Instagram password. It works inside the instagram.com tab where you're already logged in. Your FollowLens account uses Google sign-in, and only to manage your license.</p>`,
      'faq.q3': `Where is my data stored?`,
      'faq.a3': `<p>Your scan results — following and follower lists, flags, whitelist and history — are stored locally in your browser using chrome.storage. They are never uploaded to our servers, and uninstalling the extension removes them. We only store what's needed for your license: your Google account email, name and profile picture, plus your Stripe customer and subscription IDs. See the <a href="privacy.html">Privacy Policy</a> for details.</p>`,
      'faq.q4': `How do I cancel my subscription?`,
      'faq.a4': `<p>Open FollowLens, click your avatar menu and choose <strong>“Manage subscription & invoices”</strong>. This opens the secure Stripe customer portal, where you can cancel in a couple of clicks. You keep Pro until the end of the period you've already paid for, and you won't be charged again.</p>`,
      'faq.q5': `Can I get a refund?`,
      'faq.a5': `<p>Yes. If Pro isn't right for you, contact us via ${MAIL} within 7 days of your first purchase and we'll refund it in full. Renewals and later purchases are generally not refundable, except where required by law. Full details are in our <a href="terms.html#refunds">Terms of Service</a>.</p>`,
      'faq.q6': `Does it work on mobile?`,
      'faq.a6': `<p>No. FollowLens is a browser extension for desktop and laptop computers. It works in Google Chrome and other Chromium-based browsers such as Microsoft Edge and Brave, on Windows, macOS, Linux and ChromeOS. It doesn't work in the Instagram mobile app or in mobile browsers.</p>`,
      'faq.q7': `What's the difference between Free and Pro?`,
      'faq.a7': `<p>Free gives you the full scan and relationship analysis, no-photo and basic spam flags, filters, whitelist and history, plus up to 20 manual unfollows and 10 detailed profile checks per day. Pro adds the Auto Unfollow queue with its safety system, unlimited detailed checks and manual unfollows, CSV export and priority email support.</p>`,
      'faq.q8': `Which payment methods do you accept?`,
      'faq.a8': `<p>Payments are processed securely by Stripe. We accept major credit and debit cards for all plans, and PromptPay for the one-time Lifetime plan. We never see or store your full card details.</p>`,
      'faq.q9': `Is FollowLens affiliated with Instagram?`,
      'faq.a9': `<p>No. FollowLens is an independent product and is not affiliated with, endorsed by, or sponsored by Instagram or Meta. Instagram is a trademark of Meta Platforms, Inc.</p>`,
      'band.title': `Ready to see who's really following you?`,
      'band.lead': `Install FollowLens for free and run your first scan today.`,

      /* ---------- Privacy ---------- */
      'privacy.title': `Privacy Policy — FollowLens`,
      'privacy.desc': `How FollowLens handles your data: Instagram data is processed and stored only in your browser, and we never ask for your Instagram password.`,
      'privacy.h1': `Privacy Policy`,
      'legal.effective': `Effective date: {effectiveDate}`,
      'privacy.intro': `This Privacy Policy explains how {companyName} collects, uses and protects information when you use the FollowLens browser extension (the “Extension”) and this website (together, the “Service”).`,
      'privacy.summary.h': `1. At a glance`,
      'privacy.summary.body': `<div class="callout"><ul><li>We <strong>never</strong> ask for or store your Instagram password.</li><li>Your Instagram follower and following data is processed <strong>locally in your browser</strong> and stored only on your device. It is never sent to our servers.</li><li>We store only what's needed to run your license: your Google account email, name and profile picture, and your Stripe customer and subscription IDs.</li><li>We don't sell your data, and we don't use it for advertising.</li><li>You can ask us to delete your account data at any time by contacting us via ${MAIL}.</li></ul></div>`,
      'privacy.who.h': `2. Who we are`,
      'privacy.who.body': `<p>The Service is operated by {legalEntity} (“{companyName}”, “we”, “us” or “our”). For the purposes of data protection law, we are the controller of the personal information described in this policy — except for the Instagram data described in Section 4, which we never receive.</p><p>If you have any questions, contact us via ${MAIL}.</p>`,
      'privacy.collect.h': `3. Information we collect`,
      'privacy.collect.body': `<h3>3.1 Account information</h3><p>When you sign in to the Extension with Google, our authentication provider Supabase receives from Google your <strong>email address, name, profile picture</strong> and a unique account identifier. We use this only to create your FollowLens account and link it to your plan (your “license”). We do not receive your Google password, and we do not request access to your Gmail, Google Drive, contacts or any other Google data.</p><h3>3.2 Payment and subscription information</h3><p>Payments are processed by Stripe. We store your <strong>Stripe customer ID and subscription ID</strong>, together with your plan, subscription status and renewal or expiry dates, so the Extension knows whether Pro is active. Card and PromptPay payment details are collected and processed directly by Stripe; we never see or store your full card number.</p><h3>3.3 Plan usage information</h3><p>To apply Free plan limits (for example, the number of detailed profile checks or manual unfollows used per day), the Extension may keep simple counters linked to your account. These counters contain only numbers and dates — no Instagram usernames or content.</p><h3>3.4 Technical information</h3><p>When the Extension contacts our license service, our infrastructure providers automatically process standard technical data such as IP address, request timestamps and error logs, for security, abuse prevention and reliability. This website does not use analytics, advertising or tracking cookies; it only stores your language preference in your browser's local storage.</p><h3>3.5 What we do not collect</h3><ul><li>Your Instagram password or login credentials.</li><li>Your Instagram follower or following lists, profile data, posts, messages or any other Instagram content.</li><li>Your browsing history or activity on websites other than instagram.com.</li></ul>`,
      'privacy.instagram.h': `4. Instagram data stays in your browser`,
      'privacy.instagram.body': `<p>To show you its analysis, the Extension reads information from instagram.com inside the browser tab where you are already logged in — for example, the accounts you follow, the accounts that follow you, and profile details such as username, display name, whether a profile picture is set, post and follower counts, and bio text. It uses this information to calculate relationships, flags, spam scores and mutual friends.</p><p><strong>All of this processing happens locally in your browser.</strong> Scan results, your whitelist and your unfollow history are stored in the Extension's local browser storage (chrome.storage) on your device. This data is <strong>never transmitted to our servers</strong> or shared with any third party. Actions you take, such as unfollowing or re-following an account, are sent directly from your browser to Instagram, just as if you had clicked the button on Instagram yourself.</p><p>You can delete this local data at any time by clearing it in the Extension or by uninstalling the Extension.</p>`,
      'privacy.use.h': `5. How we use information`,
      'privacy.use.body': `<p>We use the information described in Section 3 only to:</p><ul><li>create and authenticate your FollowLens account;</li><li>verify your license and unlock Pro features;</li><li>process payments and manage subscriptions, cancellations and refunds through Stripe;</li><li>respond to your support requests;</li><li>keep the Service secure and prevent fraud or abuse; and</li><li>comply with our legal, tax and accounting obligations.</li></ul><p>We do <strong>not</strong> sell your personal information, use it for advertising, or use it to build profiles about you. Where the law requires a legal basis, we rely on the performance of our contract with you, our legitimate interest in keeping the Service secure, and compliance with legal obligations.</p>`,
      'privacy.limited.h': `6. Chrome Web Store Limited Use disclosure`,
      'privacy.limited.body': `<p>{companyName}'s use and transfer of information received through the Extension, including information received from Google APIs, will adhere to the <a href="https://developer.chrome.com/docs/webstore/program-policies">Chrome Web Store User Data Policy</a>, including the Limited Use requirements. In particular:</p><ul><li>we use user data only to provide and improve the Extension's single purpose — follower analytics and follow management for your own Instagram account — and features that are visible to you;</li><li>we do not transfer user data to third parties, except as necessary to provide the Service (for example, to the service providers listed in Section 7), to comply with applicable law, or as part of a merger, acquisition or sale of assets with notice to users;</li><li>we do not use or transfer user data for personalized advertising;</li><li>we do not sell user data, and we do not use or transfer it to determine creditworthiness or for lending purposes; and</li><li>we do not allow humans to read user data, unless you give us your explicit consent (for example, when you contact support), it is necessary for security purposes such as investigating abuse, it is required to comply with applicable law, or the data is aggregated and anonymized for internal operations.</li></ul>`,
      'privacy.providers.h': `7. Service providers`,
      'privacy.providers.body': `<p>We share personal information only with the service providers that help us run the Service, and only as needed for them to do so:</p><ul><li><strong>Supabase</strong> — user authentication and the database that stores your account and license records. <a href="https://supabase.com/privacy">Privacy policy</a></li><li><strong>Google</strong> — Google Sign-In, used to verify your identity. <a href="https://policies.google.com/privacy">Privacy policy</a></li><li><strong>Stripe</strong> — payment processing, subscription billing, PromptPay payments and the customer portal. <a href="https://stripe.com/privacy">Privacy policy</a></li><li><strong>Our website hosting provider</strong> — serves this static website and may process standard server logs.</li></ul><p>These providers process information on our behalf under their own terms and privacy policies. We may also disclose information if required by law, or to protect the rights, safety and security of our users, the public or ourselves.</p>`,
      'privacy.transfers.h': `8. International transfers`,
      'privacy.transfers.body': `<p>Our service providers may process information in countries other than the one where you live, including the United States. Where required, we rely on appropriate safeguards — such as the standard contractual clauses offered by our providers — to protect your information.</p>`,
      'privacy.retention.h': `9. Data retention`,
      'privacy.retention.body': `<ul><li><strong>Account and license data</strong> is kept for as long as your account is active. If you ask us to delete your account, we delete it within 30 days.</li><li><strong>Payment and transaction records</strong> may be kept by us and by Stripe for as long as required by tax, accounting and other legal obligations.</li><li><strong>Support emails</strong> are kept for as long as needed to resolve your request, and then for a reasonable period for record-keeping.</li><li><strong>Local Instagram data</strong> stays on your device until you clear it in the Extension or uninstall the Extension. We never hold a copy.</li></ul>`,
      'privacy.rights.h': `10. Your rights and choices`,
      'privacy.rights.body': `<p>Depending on where you live — for example under Thailand's Personal Data Protection Act (PDPA), the EU/UK GDPR or California privacy law — you may have the right to access, correct, delete or export your personal information, to object to or restrict certain processing, and to withdraw consent at any time.</p><p><strong>To request deletion of your data</strong> or to exercise any other right, contact us via ${MAIL} with the subject “Data request”. We may need to verify your identity before acting on the request, and we will respond within 30 days. Deleting your account does not automatically cancel an active subscription — please cancel it first via “Manage subscription & invoices” in the Extension.</p><p>You also have the right to lodge a complaint with your local data protection authority (in Thailand, the Office of the Personal Data Protection Committee).</p>`,
      'privacy.security.h': `11. Security`,
      'privacy.security.body': `<p>We use industry-standard measures to protect your information, including encrypted connections (HTTPS), access controls and the security features of our service providers. No method of transmission or storage is completely secure, but we work hard to protect your information — and to limit the data we hold in the first place.</p>`,
      'privacy.children.h': `12. Children's privacy`,
      'privacy.children.body': `<p>The Service is not directed to children. You must be at least 13 years old — or the minimum age required in your country to use Instagram and to consent to the processing of personal data — to use the Service. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it.</p>`,
      'privacy.changes.h': `13. Changes to this policy`,
      'privacy.changes.body': `<p>We may update this Privacy Policy from time to time. When we do, we will change the effective date at the top of this page. If the changes are significant, we will give you notice through the website or the Extension before they take effect.</p><p>This policy is available in English and Thai. If there is any inconsistency between the two versions, the English version prevails, unless the law requires otherwise.</p>`,
      'privacy.contact.h': `14. Contact us`,
      'privacy.contact.body': `<p>{legalEntity}<br>Contact: ${MAIL}</p>`,

      /* ---------- Terms ---------- */
      'terms.desc@free': `The terms that apply when you use FollowLens, a free browser extension — including your responsibilities on Instagram.`,
      'terms.agreement.body@free': `<p>By installing or using the Extension, you agree to these Terms and to our <a href="privacy.html">Privacy Policy</a>. If you do not agree, do not use the Service.</p>`,
      'terms.service.body@free': `<p>FollowLens is a browser extension that runs on instagram.com in your own logged-in browser. It helps you analyze the accounts you follow and the accounts that follow you, flags accounts that may be inactive or spam, and lets you unfollow accounts manually or through an automated queue with safety limits.</p><p><strong>FollowLens is free of charge.</strong> There are no paid plans, subscriptions, in-app purchases or fees, and we never ask for payment details. If you choose to support the project through our “Buy me a coffee” link, that is a voluntary gift: it does not purchase any feature, license, support or service, and it is not refundable.</p><p>FollowLens is not affiliated with, endorsed by, or sponsored by Instagram or Meta.</p>`,
      'terms.eligibility.h@free': `3. Eligibility`,
      'terms.eligibility.body@free': `<p>You must meet Instagram's minimum age requirements to use the Service. If you are under the age of majority where you live, you may use the Service only with the involvement of a parent or guardian.</p><p>FollowLens does not require a FollowLens account. It works with the Instagram account you are already logged into, and you are solely responsible for that account and for everything done with it through the Extension.</p>`,
      'terms.license.body@free': `<p>Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable and revocable license to install and use the Extension, free of charge, to manage your own Instagram account(s). You may not copy, modify, distribute, sell, rent or sublicense the Extension, or reverse engineer or decompile it, except to the extent this restriction is prohibited by law.</p>`,
      'terms.liability.body@free': `<p>To the maximum extent permitted by law, {companyName} and {legalEntity} will not be liable for any direct, indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data, followers, goodwill or account access — including any action block, restriction, suspension, ban or termination of your Instagram account — arising out of or relating to your use of the Service.</p><p>Because the Service is provided free of charge, to the maximum extent permitted by law our total liability for any claim relating to the Service is zero. Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.</p>`,
      'terms.termination.body@free': `<p>You may stop using the Service at any time by uninstalling the Extension, which also removes the data it stored in your browser. We may stop providing the Service, or any part of it, at any time, and we may block access if you breach these Terms or if required by law. Sections that by their nature should survive termination — including the disclaimers, limitation of liability and governing law — continue to apply.</p>`,
      'terms.svcchanges.h@free': `7. Changes to the Service`,
      'terms.ip.h@free': `8. Intellectual property`,
      'terms.privacy.h@free': `9. Privacy`,
      'terms.warranty.h@free': `10. Disclaimer of warranties`,
      'terms.liability.h@free': `11. Limitation of liability`,
      'terms.indemnity.h@free': `12. Indemnification`,
      'terms.termination.h@free': `13. Suspension and termination`,
      'terms.law.h@free': `14. Governing law and disputes`,
      'terms.changes.h@free': `15. Changes to these Terms`,
      'terms.language.h@free': `16. Language`,
      'terms.contact.h@free': `17. Contact`,
      'terms.freeNote': `<strong>Current version:</strong> FollowLens is 100% free. There is no sign-in, no payment and no subscription, and none of your data is sent to our servers — everything stays in your browser.`,
      'terms.title': `Terms of Service — FollowLens`,
      'terms.desc': `The terms that apply when you use FollowLens, including subscriptions, cancellation, refunds and your responsibilities on Instagram.`,
      'terms.h1': `Terms of Service`,
      'terms.intro': `These Terms of Service (the “Terms”) govern your use of the FollowLens browser extension (the “Extension”), the FollowLens website and any related services (together, the “Service”), operated by {legalEntity} (“{companyName}”, “we”, “us” or “our”). Please read them carefully.`,
      'terms.agreement.h': `1. Agreement to these Terms`,
      'terms.agreement.body': `<p>By installing or using the Extension, creating an account or purchasing a paid plan, you agree to these Terms and to our <a href="privacy.html">Privacy Policy</a>. If you do not agree, do not use the Service.</p>`,
      'terms.service.h': `2. The Service`,
      'terms.service.body': `<p>FollowLens is a browser extension that runs on instagram.com in your own logged-in browser. It helps you analyze the accounts you follow and the accounts that follow you, flags accounts that may be inactive or spam, and lets you unfollow accounts manually or through an automated queue with safety limits. Some features are available only on paid plans (“Pro”).</p><div class="callout"><p><strong>FollowLens is not affiliated with, endorsed by, or sponsored by Instagram or Meta.</strong> Instagram is a trademark of Meta Platforms, Inc.</p></div>`,
      'terms.eligibility.h': `3. Eligibility and your account`,
      'terms.eligibility.body': `<p>You must be at least 18 years old, or the age of majority where you live, to purchase a paid plan. If you are younger, you may use the Service only with the involvement of a parent or guardian, and in any case you must meet Instagram's minimum age requirements. You sign in to FollowLens with your Google account. You are responsible for all activity under your account and for keeping access to your Google account secure.</p>`,
      'terms.license.h': `4. License`,
      'terms.license.body': `<p>Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable and revocable license to install and use the Extension to manage your own Instagram account(s). You may not:</p><ul><li>copy, modify, distribute, sell, rent or sublicense the Extension;</li><li>reverse engineer or decompile the Extension, except to the extent this restriction is prohibited by law;</li><li>bypass or tamper with license checks, plan limits or safety limits; or</li><li>share your Pro access with other people or resell it.</li></ul>`,
      'terms.use.h': `5. Acceptable use`,
      'terms.use.body': `<p>You agree not to use the Service to:</p><ul><li>send spam, harass others or engage in any abusive or deceptive behaviour;</li><li>manage accounts that you do not own or are not authorized to manage;</li><li>collect, sell or publish other people's personal data;</li><li>break any law or infringe anyone's rights; or</li><li>interfere with, overload or attempt to gain unauthorized access to our systems.</li></ul>`,
      'terms.instagram.h': `6. Instagram and your responsibility`,
      'terms.instagram.body': `<div class="callout warn"><p><strong>Please read this section carefully.</strong></p></div><p>FollowLens works with a third-party service, Instagram, which has its own Terms of Use and community guidelines. <strong>Automated actions, including automated unfollowing, may violate Instagram's Terms of Use.</strong> Instagram may, at its sole discretion, limit, temporarily block (“action block”), suspend or disable accounts whose activity it considers automated or unusual.</p><p>You acknowledge and agree that:</p><ul><li>you are solely responsible for your Instagram account, for complying with Instagram's terms, and for all actions performed on your account through the Extension;</li><li>the Extension's safety features — such as randomized delays, batch pauses, daily caps, re-checks before each unfollow and auto-stop when an action is blocked — are designed to reduce risk but <strong>cannot guarantee</strong> that your account will not be restricted;</li><li>Instagram may change its website at any time, which may cause features to stop working temporarily; and</li><li>we are not responsible for any restriction, suspension, loss of followers or other consequences imposed by Instagram.</li></ul><p><strong>You use FollowLens entirely at your own risk.</strong> {companyName} and its developer are not responsible for any action block, temporary restriction, shadow-ban, suspension, disabled account or permanent ban of your Instagram account, or for any lost followers, content, reach or business that may result from using the extension — whether you unfollow manually or with Auto Unfollow.</p>`,
      'terms.plans.h': `7. Plans, payments and auto-renewal`,
      'terms.plans.body': `<p><strong>Free plan.</strong> The Free plan is provided at no cost and includes the daily usage limits described on our website. We may change what the Free plan includes at any time.</p><p><strong>Pro subscriptions (Monthly and Yearly).</strong> Subscriptions are billed in advance and <strong>renew automatically</strong> at the end of each billing period at the then-current price, until you cancel. By subscribing, you authorize us and our payment processor, Stripe, to charge your payment method for each renewal. If we change the price of your plan, we will notify you in advance, and the new price will apply from your next billing period.</p><p><strong>Lifetime plan.</strong> The Lifetime plan is a one-time payment that gives you access to Pro features for as long as we continue to offer the Extension. It is not a subscription and does not renew. PromptPay is available for the Lifetime plan.</p><p><strong>Payments.</strong> All payments are processed by Stripe. Prices may include or exclude taxes depending on your location, as shown at checkout. If a renewal payment fails, Pro features may be paused until payment succeeds.</p>`,
      'terms.cancel.h': `8. Cancellation`,
      'terms.cancel.body': `<p>You can cancel a subscription at any time from the Extension: open your avatar menu and choose <strong>“Manage subscription & invoices”</strong> to go to the Stripe customer portal. You can also email us for help. Cancellation takes effect at the end of your current billing period — you keep Pro access until then and will not be charged again. Except as described in the Refund policy below or as required by law, we do not provide refunds or credits for partial billing periods.</p>`,
      'terms.refunds.h': `9. Refund policy`,
      'terms.refunds.body': `<p><strong>7-day refund on your first purchase.</strong> If you are not satisfied, contact us via ${MAIL} within 7 days of your first purchase of any Pro plan (Monthly, Yearly or Lifetime), from the email address linked to your account, and we will issue a full refund. Your Pro access ends when the refund is processed.</p><p>Renewal charges and later purchases are generally non-refundable, but we may issue a refund at our discretion — for example, in case of a billing error. We may refuse refund requests that appear abusive, such as repeated purchase-and-refund cycles. Refunds are returned to the original payment method; timing depends on your bank or payment provider. Please contact us before filing a chargeback so we can help.</p><p>Nothing in this policy limits any rights you have under mandatory consumer protection laws in your country.</p>`,
      'terms.svcchanges.h': `10. Changes to the Service`,
      'terms.svcchanges.body': `<p>We are continuously improving FollowLens and may add, change or remove features at any time. We may also suspend or discontinue the Service, in whole or in part. If we discontinue the Extension entirely, we will try to give reasonable advance notice.</p>`,
      'terms.ip.h': `11. Intellectual property`,
      'terms.ip.body': `<p>The Extension, the website and all related content, software, designs and trademarks are owned by us or our licensors and are protected by law. These Terms do not give you any rights to our brand. If you send us feedback or suggestions, you allow us to use them without any obligation to you.</p>`,
      'terms.privacy.h': `12. Privacy`,
      'terms.privacy.body': `<p>Our <a href="privacy.html">Privacy Policy</a> explains how we handle personal information. In short: your Instagram data is processed and stored locally in your browser and is never sent to our servers.</p>`,
      'terms.warranty.h': `13. Disclaimer of warranties`,
      'terms.warranty.body': `<p>The Service is provided <strong>“as is” and “as available”</strong>, without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. Spam scores, flags and other analyses are automated, heuristic estimates and may be inaccurate. We do not warrant that the Service will be uninterrupted, error-free or compatible with every future change made by Instagram.</p>`,
      'terms.liability.h': `14. Limitation of liability`,
      'terms.liability.body': `<p>To the maximum extent permitted by law, {companyName} and {legalEntity} will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data, followers, goodwill or account access — including any restriction, suspension or termination of your Instagram account — arising out of or relating to your use of the Service.</p><p>To the maximum extent permitted by law, our total liability for any claim relating to the Service is limited to the amount you paid us for the Service in the 12 months before the event giving rise to the claim. Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.</p>`,
      'terms.indemnity.h': `15. Indemnification`,
      'terms.indemnity.body': `<p>You agree to indemnify and hold us harmless from any claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Service, your violation of these Terms, or your violation of any third-party terms, including Instagram's Terms of Use.</p>`,
      'terms.termination.h': `16. Suspension and termination`,
      'terms.termination.body': `<p>You may stop using the Service at any time by uninstalling the Extension. We may suspend or terminate your access if you breach these Terms or if required by law. If we terminate your access without cause, we will refund any prepaid fees for the unused portion of your subscription. Sections that by their nature should survive termination — including the disclaimers, limitation of liability and governing law — will survive.</p>`,
      'terms.law.h': `17. Governing law and disputes`,
      'terms.law.body': `<p>These Terms are governed by the laws of {jurisdiction}, without regard to its conflict-of-law rules. Any dispute will be subject to the exclusive jurisdiction of the courts of {jurisdiction}, except where mandatory consumer protection laws give you the right to bring proceedings in your country of residence. We encourage you to contact us first — most issues can be resolved quickly by email.</p>`,
      'terms.changes.h': `18. Changes to these Terms`,
      'terms.changes.body': `<p>We may update these Terms from time to time. We will change the effective date at the top of this page and, for significant changes, notify you through the website or the Extension before they take effect. If you continue to use the Service after the changes take effect, you accept the updated Terms.</p>`,
      'terms.language.h': `19. Language`,
      'terms.language.body': `<p>These Terms are available in English and Thai. The Thai version is provided for convenience; if there is any inconsistency, the English version prevails, unless the law of your country requires otherwise.</p>`,
      'terms.contact.h': `20. Contact`,
      'terms.contact.body': `<p>{legalEntity}<br>Contact: ${MAIL}</p>`,

      /* ---------- Success ---------- */
      'success.title': `Payment successful — FollowLens`,
      'success.desc': `Your FollowLens Pro purchase is complete. Here's how to start using it.`,
      'success.h1': `Payment successful 🎉`,
      'success.lead': `Thank you for upgrading to FollowLens Pro! Here's how to start using it:`,
      'success.s1': `Go back to your Instagram tab (instagram.com).`,
      'success.s2': `Open FollowLens. Pro unlocks automatically within a few seconds.`,
      'success.s3': `Not unlocked yet? Click your avatar menu in FollowLens and choose <strong>“Refresh status”</strong>.`,
      'success.home': `Back to home`,
      'success.help': `Stripe has emailed you a receipt. Still having trouble? Contact us via ${MAIL} and we'll sort it out.`,
      'success.close': `You can safely close this tab.`,

      /* ---------- Cancel ---------- */
      'cancel.title': `Checkout canceled — FollowLens`,
      'cancel.desc': `Your checkout was canceled and no charge was made.`,
      'cancel.h1': `Checkout canceled`,
      'cancel.lead': `No charge was made. You can keep using the Free plan, or upgrade whenever you're ready.`,
      'cancel.pricing': `Back to pricing`,
      'cancel.home': `Home`,
      'cancel.help': `Questions about plans or payment? Contact us via ${MAIL}.`,

      /* ---------- 404 ---------- */
      'nf.title': `Page not found — FollowLens`,
      'nf.desc': `This page doesn't exist.`,
      'nf.h1': `Page not found`,
      'nf.lead': `The page you're looking for doesn't exist or has moved.`,
      'nf.home': `Go to homepage`
    },

    /* ===================================================================== */
    th: {
      /* ---------- Common ---------- */
      'common.skip': `ข้ามไปยังเนื้อหา`,
      'nav.aria': `เมนูหลัก`,
      'nav.menu': `เปิดเมนู`,
      'nav.features': `ฟีเจอร์`,
      'nav.how': `วิธีใช้งาน`,
      'nav.safety': `ความปลอดภัย`,
      'nav.pricing': `ราคา`,
      'nav.faq': `คำถามที่พบบ่อย`,
      'lang.label': `ภาษา`,
      'cta.add': `เพิ่มลงใน Chrome — ใช้ฟรี`,
      'cta.addShort': `เพิ่มลงใน Chrome`,
      'brand.home': `หน้าแรก FollowLens`,
      'brand.tagline': `วิเคราะห์ผู้ติดตาม และเลิกติดตามอัตโนมัติอย่างปลอดภัย สำหรับ Instagram`,
      'footer.product': `ผลิตภัณฑ์`,
      'footer.legal': `กฎหมายและการช่วยเหลือ`,
      'footer.privacy': `นโยบายความเป็นส่วนตัว`,
      'footer.terms': `ข้อกำหนดการให้บริการ`,
      'footer.contact': `ติดต่อฝ่ายช่วยเหลือ`,
      'footer.donate': `☕ เลี้ยงกาแฟผู้พัฒนา`,
      'footer.disclaimer': `<strong>ข้อจำกัดความรับผิดชอบ:</strong> FollowLens ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับการรับรอง และไม่ได้รับการสนับสนุนจาก Instagram หรือ Meta โดย Instagram เป็นเครื่องหมายการค้าของ Meta Platforms, Inc.`,
      'footer.risk': `การกระทำแบบอัตโนมัติอาจขัดต่อข้อกำหนดการใช้งานของ Instagram คุณใช้ FollowLens โดยยอมรับความเสี่ยงเองและรับผิดชอบบัญชีของคุณแต่เพียงผู้เดียว — เราไม่รับผิดชอบต่อการถูกบล็อก ถูกจำกัด หรือถูกแบนใดๆ`,
      'footer.rights': `© {year} {companyName} สงวนลิขสิทธิ์`,
      'toc.title': `ในหน้านี้`,

      /* ---------- Home: meta & hero ---------- */
      'home.title': `FollowLens — วิเคราะห์ผู้ติดตามและเลิกติดตามอัตโนมัติอย่างปลอดภัยสำหรับ Instagram`,
      'home.desc': `ดูว่าใครไม่ฟอลโลว์กลับ ตรวจจับบัญชีสแปมและบัญชีที่ไม่มีรูปโปรไฟล์ แล้วจัดการรายชื่อที่คุณติดตามบน Instagram อย่างปลอดภัย เป็นส่วนขยาย Chrome ที่เก็บข้อมูลไว้ในเบราว์เซอร์ของคุณเท่านั้น`,
      'hero.eyebrow': `ส่วนขยาย Chrome · สำหรับคอมพิวเตอร์`,
      'hero.title': `รู้ทันทีว่าใครไม่ฟอลโลว์กลับ <span class="grad-text">แล้วจัดการได้อย่างปลอดภัย</span>`,
      'hero.lead': `FollowLens สแกนรายชื่อคนที่คุณติดตามและผู้ติดตามบน Instagram ได้โดยตรงในเบราว์เซอร์ของคุณเอง ช่วยชี้บัญชีสแปมและบัญชีที่ไม่มีรูปโปรไฟล์ และช่วยให้คุณเลิกติดตามในจังหวะที่เป็นธรรมชาติ พร้อมเพดานรายวัน การหน่วงเวลาแบบสุ่ม และระบบหยุดอัตโนมัติในตัว`,
      'hero.secondary': `ดูราคา`,
      'hero.trust1': `ไม่ต้องใช้รหัสผ่าน Instagram`,
      'hero.trust2': `ข้อมูลอยู่ในเบราว์เซอร์ของคุณ`,
      'hero.trust3@free': `ฟรี 100% ไม่ต้องสมัครสมาชิก`,
      'faq.a2@free': `<p>ไม่ต้อง FollowLens ไม่เคยขอ ไม่เคยเห็น และไม่เคยจัดเก็บรหัสผ่าน Instagram ของคุณ ส่วนขยายทำงานในแท็บ instagram.com ที่คุณล็อกอินไว้อยู่แล้ว และไม่ต้องสมัครบัญชี FollowLens ใดๆ</p>`,
      'faq.a3@free': `<p>ข้อมูลทั้งหมด ทั้งรายชื่อที่ติดตามและผู้ติดตาม ผลการวิเคราะห์ Whitelist ประวัติ และการตั้งค่า ถูกเก็บไว้ในเบราว์เซอร์ของคุณด้วย chrome.storage ไม่มีการอัปโหลดไปยังเซิร์ฟเวอร์ใดๆ และจะถูกลบเมื่อถอนการติดตั้งส่วนขยาย ดูรายละเอียดได้ที่<a href="privacy.html">นโยบายความเป็นส่วนตัว</a></p>`,
      'legal.freeNote': `<strong>เวอร์ชันปัจจุบัน:</strong> FollowLens ใช้งานได้ฟรี 100% ไม่มีการเข้าสู่ระบบ ไม่มีการชำระเงิน และไม่ส่งข้อมูลใดๆ ของคุณไปยังเซิร์ฟเวอร์ของเรา ทุกอย่างอยู่ในเบราว์เซอร์ของคุณ เนื้อหาด้านล่างที่เกี่ยวกับบัญชี การชำระเงิน และการสมัครสมาชิก จะมีผลเฉพาะเมื่อมีการเพิ่มฟีเจอร์เสริมเหล่านั้นในอนาคต และเราจะอัปเดตหน้านี้ก่อนเปิดใช้`,
      'hero.trust3': `มีแพ็กเกจฟรี ไม่ต้องใช้บัตร`,

      /* ---------- Home: mockup ---------- */
      'mock.aria': `ตัวอย่างแดชบอร์ด FollowLens: สถิติผู้ติดตาม และรายชื่อบัญชีพร้อมธงแจ้งเตือนสแปมและบัญชีไม่มีรูป`,
      'mock.url': `FollowLens · แดชบอร์ด`,
      'mock.scanned': `สแกนเสร็จแล้ว`,
      'stat.following': `กำลังติดตาม`,
      'stat.followers': `ผู้ติดตาม`,
      'stat.notBack': `ไม่ฟอลโลว์กลับ`,
      'stat.noPic': `ไม่มีรูปโปรไฟล์`,
      'stat.spam': `สแปม / น่าสงสัย`,
      'tab.fans': `แฟนคลับ`,
      'tab.mutuals': `ติดตามกันและกัน`,
      'badge.spam': `สแปม`,
      'badge.noPic': `ไม่มีรูป`,
      'badge.mutual': `เพื่อนร่วมกัน 3 คน`,
      'badge.whitelist': `อยู่ในไวต์ลิสต์`,
      'mock.unfollow': `เลิกติดตาม`,
      'mock.keep': `เก็บไว้`,
      'mock.noName': `ไม่มีชื่อ`,
      'mock.queue': `เลิกติดตามอัตโนมัติ · โหมดปลอดภัย · วันนี้ 12 / 40`,

      /* ---------- Home: features ---------- */
      'feat.eyebrow': `ฟีเจอร์`,
      'feat.title': `ครบทุกอย่างที่ต้องใช้เพื่อเข้าใจผู้ติดตามของคุณ`,
      'feat.lead': `วิเคราะห์ความสัมพันธ์ได้ชัดเจน แจ้งเตือนอย่างชาญฉลาด และขั้นตอนเก็บกวาดที่รอบคอบ ครบในแผงเดียว`,
      'f1.t': `ใครไม่ฟอลโลว์กลับ`,
      'f1.d': `เห็นทันทีว่าบัญชีไหนที่คุณติดตามแต่เขาไม่ติดตามคุณกลับ รวมถึงแฟนคลับและคนที่ติดตามกันและกัน`,
      'f2.t': `ตรวจจับบัญชีไม่มีรูป`,
      'f2.d': `ชี้บัญชีที่ไม่มีรูปโปรไฟล์ ซึ่งมักเป็นสัญญาณของบัญชีร้างหรือบัญชีปลอม`,
      'f3.t': `คะแนนสแปม 0–100`,
      'f3.d': `ให้คะแนนแต่ละบัญชีจากสัญญาณต่างๆ เช่น ไม่มีรูปหรือไม่มีชื่อ ชื่อผู้ใช้ที่มีตัวเลขเยอะ ไม่มีโพสต์ อัตราส่วนการติดตามกับผู้ติดตามที่ผิดปกติ และคำที่มักพบในสแปมในไบโอ (ทั้งภาษาอังกฤษและภาษาไทย)`,
      'f4.t': `เพื่อนร่วมกัน`,
      'f4.d': `ดูว่าคุณกับอีกฝ่ายมีเพื่อนร่วมกันกี่คน ก่อนตัดสินใจเลิกติดตาม`,
      'f5.t': `กรอง ค้นหา และจัดเรียง`,
      'f5.d': `แยกรายชื่อตามความสัมพันธ์ ธงแจ้งเตือน คะแนนสแปม หรือชื่อ เพื่อหาคนที่ต้องการได้ตรงจุด`,
      'f6.t': `ไวต์ลิสต์`,
      'f6.d': `ปกป้องเพื่อน ครอบครัว และครีเอเตอร์คนโปรด ไม่ให้ถูกเลิกติดตามโดยไม่ตั้งใจ`,
      'f7.t': `ประวัติ และติดตามกลับได้ในคลิกเดียว`,
      'f7.d': `ทุกการเลิกติดตามถูกบันทึกไว้ เปลี่ยนใจเมื่อไหร่ก็กดติดตามกลับได้ในคลิกเดียว`,
      'f8.t': `เลิกติดตามอัตโนมัติอย่างปลอดภัย`,
      'f8.d': `เพิ่มบัญชีเข้าคิว แล้วให้ FollowLens เลิกติดตามให้ในจังหวะแบบคนจริง ด้วยการหน่วงเวลาแบบสุ่ม การพักระหว่างรอบ และเพดานรายวัน`,
      'f9.t': `ส่งออกเป็น CSV`,
      'f9.d': `ส่งออกรายชื่อเป็นไฟล์ CSV เพื่อเก็บไว้เองหรือนำไปวิเคราะห์ต่อในสเปรดชีต`,

      /* ---------- Home: how it works ---------- */
      'how.eyebrow': `วิธีใช้งาน`,
      'how.title': `3 ขั้นตอนสู่รายชื่อที่สะอาดขึ้น`,
      'how.lead': `ไม่ต้องตั้งค่า ไม่ต้องใช้รหัสผ่าน ไม่ต้องทำสเปรดชีต`,
      's1.t': `ติดตั้ง`,
      's1.d': `เพิ่ม FollowLens ลงใน Chrome, Edge หรือ Brave บนคอมพิวเตอร์ แล้วลงชื่อเข้าใช้ด้วย Google เพื่อเปิดใช้งานแพ็กเกจของคุณ`,
      's2.t': `สแกน`,
      's2.d': `เปิด instagram.com โดยล็อกอินตามปกติ แล้วเริ่มสแกน FollowLens จะอ่านรายชื่อผ่านเซสชันในเบราว์เซอร์ของคุณเอง`,
      's3.t': `จัดการอย่างปลอดภัย`,
      's3.d': `ตรวจดูผลลัพธ์ เพิ่มคนสำคัญไว้ในไวต์ลิสต์ แล้วเลิกติดตามเอง หรือใช้คิวเลิกติดตามอัตโนมัติที่มีขีดจำกัดด้านความปลอดภัย`,

      /* ---------- Home: safety ---------- */
      'safety.eyebrow': `ปลอดภัยไว้ก่อน`,
      'safety.title': `ออกแบบมาให้ระมัดระวังกับบัญชีของคุณ`,
      'safety.lead': `เครื่องมือที่เร่งเกินไปมักทำให้บัญชีถูกจำกัด FollowLens จึงตั้งใจทำงานช้าและระมัดระวัง`,
      'safety.l1.t': `หน่วงเวลาแบบสุ่มและพักระหว่างรอบ`,
      'safety.l1.d': `เว้นระยะแต่ละการกระทำแบบสุ่ม และพักนานขึ้นระหว่างแต่ละรอบ เหมือนคนใช้งานจริง`,
      'safety.l2.t': `เพดานรายวัน`,
      'safety.l2.d': `จำกัดจำนวนการเลิกติดตามต่อวัน เพื่อให้กิจกรรมของคุณอยู่ในระดับที่ระมัดระวัง`,
      'safety.l3.t': `ตรวจซ้ำก่อนเลิกติดตามทุกครั้ง`,
      'safety.l3.d': `ตรวจสอบแต่ละบัญชีอีกครั้งก่อนดำเนินการ คนที่เพิ่งฟอลโลว์กลับหรืออยู่ในไวต์ลิสต์จะถูกข้ามไป`,
      'safety.l4.t': `หยุดอัตโนมัติเมื่อถูกบล็อก`,
      'safety.l4.d': `หาก Instagram แจ้งว่าการกระทำถูกบล็อก คิวจะหยุดทันที เพื่อให้คุณรอจนกว่าจะกลับมาใช้งานได้`,
      'safety.l5.t': `ข้อมูลอยู่ในเครื่องของคุณ`,
      'safety.l5.d': `ผลการสแกนถูกเก็บไว้ในพื้นที่จัดเก็บของเบราว์เซอร์ (chrome.storage) เราไม่เคยได้รับรายชื่อผู้ติดตามของคุณ และไม่เคยขอรหัสผ่าน Instagram`,
      'preset.title': `พรีเซ็ตการเลิกติดตามอัตโนมัติ`,
      'preset.col1': `พรีเซ็ต`,
      'preset.col2': `ความเร็ว`,
      'preset.col3': `เหมาะสำหรับ`,
      'preset.safe': `ปลอดภัย`,
      'preset.safe.pace': `ช้าที่สุด พักนานที่สุด`,
      'preset.safe.for': `บัญชีใหม่หรือบัญชีขนาดเล็ก และการใช้งานครั้งแรก`,
      'preset.normal': `ปกติ`,
      'preset.normal.pace': `สมดุล`,
      'preset.normal.for': `บัญชีที่ใช้งานสม่ำเสมอมาระยะหนึ่งแล้ว`,
      'preset.fast': `เร็ว`,
      'preset.fast.pace': `เร็วขึ้น แต่ยังมีเพดาน`,
      'preset.fast.for': `เซสชันสั้นๆ เมื่อคุณยอมรับความเสี่ยงที่สูงขึ้นได้`,
      'safety.note': `<strong>บอกกันตรงๆ:</strong> การกระทำแบบอัตโนมัติอาจขัดต่อข้อกำหนดการใช้งานของ Instagram การจำกัดอย่างระมัดระวังช่วยลดความเสี่ยงได้ แต่ไม่มีเครื่องมือใดรับประกันได้ว่าบัญชีของคุณจะไม่ถูกบล็อกการกระทำชั่วคราว คุณเป็นผู้รับผิดชอบต่อการใช้ FollowLens กับบัญชีของคุณเอง คุณใช้งานโดยยอมรับความเสี่ยงเอง — เราไม่รับผิดชอบหากบัญชีของคุณถูกบล็อก ถูกจำกัด หรือถูกแบน`,

      /* ---------- Home: pricing ---------- */
      'pricing.eyebrow': `ราคา`,
      'pricing.title': `เริ่มใช้ฟรี อัปเกรดเมื่อพร้อม`,
      'pricing.lead': `แพ็กเกจฟรีสแกนได้เต็มรูปแบบ ส่วน Pro เพิ่มระบบอัตโนมัติและปลดล็อกขีดจำกัดรายวัน`,
      'period.aria': `รอบการชำระเงิน`,
      'period.monthly': `รายเดือน`,
      'period.yearly': `รายปี`,
      'period.lifetime': `ตลอดชีพ`,
      'period.save': `ประหยัด 50%`,
      'free.name': `ฟรี`,
      'free.desc': `ทุกอย่างที่ต้องใช้เพื่อดูว่าใครเป็นใคร`,
      'free.price': `฿0`,
      'free.sub': `ใช้ฟรีตลอดไป`,
      'free.f1': `สแกนเต็มรูปแบบและวิเคราะห์ความสัมพันธ์`,
      'free.f2': `แจ้งเตือนบัญชีไม่มีรูปและสแปมเบื้องต้น`,
      'free.f3': `กรอง ค้นหา และจัดเรียง`,
      'free.f4': `ไวต์ลิสต์และประวัติการเลิกติดตาม`,
      'free.f5': `เลิกติดตามเอง สูงสุด 20 บัญชีต่อวัน`,
      'free.f6': `ตรวจโปรไฟล์แบบละเอียด (เพื่อนร่วมกัน + คะแนนสแปมแบบละเอียด) สูงสุด 10 โปรไฟล์ต่อวัน`,
      'pro.name': `Pro`,
      'pro.popular': `ยอดนิยม`,
      'pro.desc': `สำหรับคนที่อยากจัดการรายชื่อจำนวนมากอย่างปลอดภัย`,
      'pro.subMonthly': `เรียกเก็บเงินรายเดือน · ยกเลิกได้ทุกเมื่อ`,
      'pro.subYearly': `เรียกเก็บเงินรายปี · ประหยัด 50% เมื่อเทียบกับรายเดือน`,
      'pro.subLifetime': `จ่ายครั้งเดียว ไม่มีการต่ออายุ · รองรับพร้อมเพย์`,
      'pro.f1': `<strong>ทุกอย่างในแพ็กเกจฟรี</strong>`,
      'pro.f2': `คิวเลิกติดตามอัตโนมัติพร้อมระบบความปลอดภัยครบชุด`,
      'pro.f3': `ตรวจแบบละเอียดได้ไม่จำกัด (เพื่อนร่วมกัน คะแนนสแปมแบบละเอียด)`,
      'pro.f4': `เลิกติดตามเองได้ไม่จำกัด`,
      'pro.f5': `ส่งออกเป็น CSV`,
      'pro.f6': `ได้รับการช่วยเหลือทางอีเมลก่อนใคร`,
      'pro.cta': `ติดตั้งแล้วอัปเกรดเป็น Pro`,
      'pro.foot': `อัปเกรดได้ในส่วนขยายหลังลงชื่อเข้าใช้ด้วย Google ชำระเงินอย่างปลอดภัยผ่าน Stripe`,
      'pricing.note': `แพ็กเกจรายเดือนและรายปีจะต่ออายุอัตโนมัติจนกว่าคุณจะยกเลิก ยกเลิกได้ทุกเมื่อที่เมนู “จัดการสมาชิกและใบเสร็จ” ในส่วนขยาย รับชำระด้วยบัตรสำหรับทุกแพ็กเกจ และรองรับพร้อมเพย์สำหรับแพ็กเกจตลอดชีพแบบจ่ายครั้งเดียว อาจมีภาษีเพิ่มเติมขึ้นอยู่กับประเทศของคุณ`,

      /* ---------- Home: FAQ ---------- */
      'faq.eyebrow': `คำถามที่พบบ่อย`,
      'faq.title': `คำถามที่พบบ่อย`,
      'faq.lead': `ตอบตรงๆ ทุกข้อ รวมถึงเรื่องที่ไม่ค่อยมีใครอยากพูดถึง`,
      'faq.q1': `FollowLens ปลอดภัยไหม? บัญชีของฉันจะโดนแบนหรือเปล่า?`,
      'faq.a1': `<p>ขอตอบตามตรงว่า กิจกรรมอัตโนมัติใดๆ อาจขัดต่อข้อกำหนดการใช้งานของ Instagram และ Instagram สามารถจำกัดหรือบล็อกการกระทำของบัญชีที่ระบบมองว่ามีพฤติกรรมผิดปกติได้ FollowLens ช่วยลดความเสี่ยงนี้ด้วยค่าเริ่มต้นที่ระมัดระวัง ได้แก่ การหน่วงเวลาแบบสุ่ม การพักระหว่างรอบ เพดานรายวัน การตรวจซ้ำก่อนเลิกติดตามทุกครั้ง และการหยุดอัตโนมัติทันทีเมื่อ Instagram บล็อกการกระทำ</p><p>ไม่มีเครื่องมือใดรับประกันได้ว่าบัญชีของคุณจะไม่ถูกบล็อกการกระทำชั่วคราวเลย แนะนำให้เริ่มจากพรีเซ็ต “ปลอดภัย” ใช้จำนวนต่อวันแต่พอดี และโปรดจำไว้ว่าคุณเป็นผู้รับผิดชอบต่อการใช้งานบัญชีของคุณเอง</p><p><strong>คุณใช้ FollowLens โดยยอมรับความเสี่ยงเองทั้งหมด</strong> FollowLens และผู้พัฒนาไม่รับผิดชอบต่อการที่บัญชี Instagram ของคุณถูกบล็อกการกระทำ ถูกจำกัดชั่วคราว ถูก shadow-ban ถูกระงับ ถูกปิดใช้งาน หรือถูกแบนถาวร รวมถึงการสูญเสียผู้ติดตาม เนื้อหา การเข้าถึง หรือธุรกิจใดๆ ที่อาจเกิดจากการใช้ส่วนขยายนี้ ไม่ว่าจะ Unfollow ด้วยตนเองหรือใช้ Auto Unfollow</p>`,
      'faq.q2': `ต้องใช้รหัสผ่าน Instagram ของฉันไหม?`,
      'faq.a2': `<p>ไม่ต้อง FollowLens ไม่เคยขอ ไม่เคยเห็น และไม่เคยจัดเก็บรหัสผ่าน Instagram ของคุณ ส่วนขยายทำงานในแท็บ instagram.com ที่คุณล็อกอินไว้อยู่แล้ว ส่วนบัญชี FollowLens ใช้การลงชื่อเข้าใช้ด้วย Google เพื่อจัดการสิทธิ์การใช้งานเท่านั้น</p>`,
      'faq.q3': `ข้อมูลของฉันถูกเก็บไว้ที่ไหน?`,
      'faq.a3': `<p>ผลการสแกนของคุณ ทั้งรายชื่อคนที่คุณติดตามและผู้ติดตาม ธงแจ้งเตือน ไวต์ลิสต์ และประวัติ จะถูกเก็บไว้ในเบราว์เซอร์ของคุณผ่าน chrome.storage ไม่เคยถูกอัปโหลดไปยังเซิร์ฟเวอร์ของเรา และจะถูกลบเมื่อคุณถอนการติดตั้งส่วนขยาย เราจัดเก็บเฉพาะข้อมูลที่จำเป็นสำหรับสิทธิ์การใช้งาน ได้แก่ อีเมล ชื่อ และรูปโปรไฟล์จากบัญชี Google ของคุณ รวมถึงรหัสลูกค้าและรหัสการสมัครสมาชิกใน Stripe ดูรายละเอียดเพิ่มเติมได้ที่<a href="privacy.html">นโยบายความเป็นส่วนตัว</a></p>`,
      'faq.q4': `ยกเลิกการสมัครสมาชิกได้อย่างไร?`,
      'faq.a4': `<p>เปิด FollowLens คลิกเมนูรูปโปรไฟล์ของคุณ แล้วเลือก <strong>“จัดการสมาชิกและใบเสร็จ”</strong> ระบบจะเปิดพอร์ทัลลูกค้าของ Stripe ที่ปลอดภัย ซึ่งคุณยกเลิกได้ในไม่กี่คลิก คุณยังใช้ Pro ได้จนสิ้นสุดรอบที่ชำระเงินไปแล้ว และจะไม่ถูกเรียกเก็บเงินอีก</p>`,
      'faq.q5': `ขอคืนเงินได้ไหม?`,
      'faq.a5': `<p>ได้ หาก Pro ไม่ตอบโจทย์คุณ ติดต่อเราผ่าน ${MAIL} ภายใน 7 วันนับจากการซื้อครั้งแรก แล้วเราจะคืนเงินให้เต็มจำนวน โดยทั่วไปค่าต่ออายุและการซื้อครั้งถัดๆ ไปจะไม่สามารถขอคืนเงินได้ เว้นแต่กฎหมายกำหนด ดูรายละเอียดทั้งหมดได้ที่<a href="terms.html#refunds">ข้อกำหนดการให้บริการ</a></p>`,
      'faq.q6': `ใช้บนมือถือได้ไหม?`,
      'faq.a6': `<p>ไม่ได้ FollowLens เป็นส่วนขยายเบราว์เซอร์สำหรับคอมพิวเตอร์ตั้งโต๊ะและโน้ตบุ๊ก ใช้งานได้บน Google Chrome และเบราว์เซอร์ที่พัฒนาบน Chromium อื่นๆ เช่น Microsoft Edge และ Brave ทั้งบน Windows, macOS, Linux และ ChromeOS แต่ใช้ไม่ได้ในแอป Instagram บนมือถือหรือเบราว์เซอร์บนมือถือ</p>`,
      'faq.q7': `แพ็กเกจฟรีกับ Pro ต่างกันอย่างไร?`,
      'faq.a7': `<p>แพ็กเกจฟรีสแกนและวิเคราะห์ความสัมพันธ์ได้เต็มรูปแบบ มีธงแจ้งเตือนบัญชีไม่มีรูปและสแปมเบื้องต้น ตัวกรอง ไวต์ลิสต์ และประวัติ พร้อมเลิกติดตามเองได้สูงสุด 20 บัญชีและตรวจโปรไฟล์แบบละเอียดได้ 10 โปรไฟล์ต่อวัน ส่วน Pro เพิ่มคิวเลิกติดตามอัตโนมัติพร้อมระบบความปลอดภัย ตรวจแบบละเอียดและเลิกติดตามเองได้ไม่จำกัด ส่งออกเป็น CSV และได้รับการช่วยเหลือทางอีเมลก่อนใคร</p>`,
      'faq.q8': `รับชำระเงินช่องทางไหนบ้าง?`,
      'faq.a8': `<p>การชำระเงินทั้งหมดดำเนินการอย่างปลอดภัยผ่าน Stripe รองรับบัตรเครดิตและบัตรเดบิตหลักๆ สำหรับทุกแพ็กเกจ และรองรับพร้อมเพย์สำหรับแพ็กเกจตลอดชีพแบบจ่ายครั้งเดียว เราไม่เคยเห็นหรือจัดเก็บข้อมูลบัตรฉบับเต็มของคุณ</p>`,
      'faq.q9': `FollowLens เกี่ยวข้องกับ Instagram หรือไม่?`,
      'faq.a9': `<p>ไม่เกี่ยวข้อง FollowLens เป็นผลิตภัณฑ์อิสระ ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับการรับรอง และไม่ได้รับการสนับสนุนจาก Instagram หรือ Meta โดย Instagram เป็นเครื่องหมายการค้าของ Meta Platforms, Inc.</p>`,
      'band.title': `พร้อมหรือยังที่จะรู้ว่าใครติดตามคุณจริงๆ?`,
      'band.lead': `ติดตั้ง FollowLens ฟรี แล้วเริ่มสแกนครั้งแรกได้เลยวันนี้`,

      /* ---------- Privacy ---------- */
      'privacy.title': `นโยบายความเป็นส่วนตัว — FollowLens`,
      'privacy.desc': `FollowLens จัดการข้อมูลของคุณอย่างไร: ข้อมูล Instagram ถูกประมวลผลและจัดเก็บในเบราว์เซอร์ของคุณเท่านั้น และเราไม่เคยขอรหัสผ่าน Instagram ของคุณ`,
      'privacy.h1': `นโยบายความเป็นส่วนตัว`,
      'legal.effective': `มีผลบังคับใช้ตั้งแต่วันที่ {effectiveDate}`,
      'privacy.intro': `นโยบายความเป็นส่วนตัวนี้อธิบายว่า {companyName} เก็บรวบรวม ใช้ และคุ้มครองข้อมูลอย่างไร เมื่อคุณใช้ส่วนขยายเบราว์เซอร์ FollowLens (“ส่วนขยาย”) และเว็บไซต์นี้ (รวมเรียกว่า “บริการ”)`,
      'privacy.summary.h': `1. สรุปสั้นๆ`,
      'privacy.summary.body': `<div class="callout"><ul><li>เรา<strong>ไม่เคย</strong>ขอหรือจัดเก็บรหัสผ่าน Instagram ของคุณ</li><li>ข้อมูลผู้ติดตามและรายชื่อที่คุณติดตามบน Instagram จะถูกประมวลผล<strong>ภายในเบราว์เซอร์ของคุณ</strong>และจัดเก็บไว้บนอุปกรณ์ของคุณเท่านั้น ไม่เคยถูกส่งไปยังเซิร์ฟเวอร์ของเรา</li><li>เราจัดเก็บเฉพาะข้อมูลที่จำเป็นต่อการจัดการสิทธิ์การใช้งาน ได้แก่ อีเมล ชื่อ และรูปโปรไฟล์จากบัญชี Google ของคุณ รวมถึงรหัสลูกค้าและรหัสการสมัครสมาชิกใน Stripe</li><li>เราไม่ขายข้อมูลของคุณ และไม่นำไปใช้เพื่อการโฆษณา</li><li>คุณขอให้เราลบข้อมูลบัญชีของคุณได้ทุกเมื่อ โดยติดต่อเราผ่าน ${MAIL}</li></ul></div>`,
      'privacy.who.h': `2. เราคือใคร`,
      'privacy.who.body': `<p>บริการนี้ดำเนินการโดย {legalEntity} (“{companyName}” หรือ “เรา”) ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล เราเป็นผู้ควบคุมข้อมูลส่วนบุคคลที่ระบุไว้ในนโยบายนี้ ยกเว้นข้อมูล Instagram ตามข้อ 4 ซึ่งเราไม่เคยได้รับ</p><p>หากมีคำถามใดๆ ติดต่อเราได้ผ่าน ${MAIL}</p>`,
      'privacy.collect.h': `3. ข้อมูลที่เราเก็บรวบรวม`,
      'privacy.collect.body': `<h3>3.1 ข้อมูลบัญชี</h3><p>เมื่อคุณลงชื่อเข้าใช้ส่วนขยายด้วย Google ผู้ให้บริการยืนยันตัวตนของเรา คือ Supabase จะได้รับ<strong>อีเมล ชื่อ รูปโปรไฟล์</strong> และรหัสประจำบัญชีของคุณจาก Google เราใช้ข้อมูลนี้เพื่อสร้างบัญชี FollowLens และเชื่อมโยงบัญชีเข้ากับแพ็กเกจของคุณ (“สิทธิ์การใช้งาน”) เท่านั้น เราไม่ได้รับรหัสผ่าน Google ของคุณ และไม่ขอสิทธิ์เข้าถึง Gmail, Google Drive, รายชื่อติดต่อ หรือข้อมูล Google อื่นใดของคุณ</p><h3>3.2 ข้อมูลการชำระเงินและการสมัครสมาชิก</h3><p>การชำระเงินดำเนินการผ่าน Stripe เราจัดเก็บ<strong>รหัสลูกค้าและรหัสการสมัครสมาชิกใน Stripe</strong> พร้อมกับแพ็กเกจ สถานะการสมัครสมาชิก และวันต่ออายุหรือวันหมดอายุ เพื่อให้ส่วนขยายทราบว่า Pro เปิดใช้งานอยู่หรือไม่ ข้อมูลบัตรและข้อมูลการชำระเงินผ่านพร้อมเพย์จะถูกเก็บและประมวลผลโดย Stripe โดยตรง เราไม่เคยเห็นหรือจัดเก็บหมายเลขบัตรฉบับเต็มของคุณ</p><h3>3.3 ข้อมูลการใช้งานตามแพ็กเกจ</h3><p>เพื่อใช้ขีดจำกัดของแพ็กเกจฟรี (เช่น จำนวนการตรวจโปรไฟล์แบบละเอียดหรือการเลิกติดตามเองที่ใช้ไปในแต่ละวัน) ส่วนขยายอาจบันทึกตัวนับอย่างง่ายที่ผูกกับบัญชีของคุณ ตัวนับเหล่านี้มีเพียงตัวเลขและวันที่ ไม่มีชื่อผู้ใช้หรือเนื้อหาใดๆ จาก Instagram</p><h3>3.4 ข้อมูลทางเทคนิค</h3><p>เมื่อส่วนขยายติดต่อกับบริการตรวจสอบสิทธิ์ของเรา ผู้ให้บริการโครงสร้างพื้นฐานของเราจะประมวลผลข้อมูลทางเทคนิคทั่วไปโดยอัตโนมัติ เช่น หมายเลข IP เวลาที่ส่งคำขอ และบันทึกข้อผิดพลาด เพื่อความปลอดภัย การป้องกันการใช้งานในทางที่ผิด และความเสถียรของระบบ เว็บไซต์นี้ไม่ใช้คุกกี้เพื่อการวิเคราะห์ การโฆษณา หรือการติดตามใดๆ โดยจัดเก็บเพียงภาษาที่คุณเลือกไว้ในพื้นที่จัดเก็บของเบราว์เซอร์ (local storage) เท่านั้น</p><h3>3.5 ข้อมูลที่เราไม่เก็บรวบรวม</h3><ul><li>รหัสผ่านหรือข้อมูลเข้าสู่ระบบ Instagram ของคุณ</li><li>รายชื่อผู้ติดตามหรือรายชื่อที่คุณติดตาม ข้อมูลโปรไฟล์ โพสต์ ข้อความ หรือเนื้อหาอื่นใดบน Instagram ของคุณ</li><li>ประวัติการท่องเว็บหรือกิจกรรมของคุณบนเว็บไซต์อื่นนอกเหนือจาก instagram.com</li></ul>`,
      'privacy.instagram.h': `4. ข้อมูล Instagram อยู่ในเบราว์เซอร์ของคุณเท่านั้น`,
      'privacy.instagram.body': `<p>เพื่อแสดงผลการวิเคราะห์ ส่วนขยายจะอ่านข้อมูลจาก instagram.com ภายในแท็บเบราว์เซอร์ที่คุณล็อกอินไว้อยู่แล้ว เช่น บัญชีที่คุณติดตาม บัญชีที่ติดตามคุณ และรายละเอียดโปรไฟล์ อย่างชื่อผู้ใช้ ชื่อที่แสดง การมีหรือไม่มีรูปโปรไฟล์ จำนวนโพสต์และผู้ติดตาม และข้อความในไบโอ แล้วนำมาคำนวณความสัมพันธ์ ธงแจ้งเตือน คะแนนสแปม และจำนวนเพื่อนร่วมกัน</p><p><strong>การประมวลผลทั้งหมดนี้เกิดขึ้นภายในเบราว์เซอร์ของคุณ</strong> ผลการสแกน ไวต์ลิสต์ และประวัติการเลิกติดตามจะถูกจัดเก็บไว้ในพื้นที่จัดเก็บของส่วนขยาย (chrome.storage) บนอุปกรณ์ของคุณ ข้อมูลเหล่านี้<strong>ไม่เคยถูกส่งไปยังเซิร์ฟเวอร์ของเรา</strong>และไม่ถูกแบ่งปันให้บุคคลที่สามใดๆ ส่วนการกระทำที่คุณสั่ง เช่น การเลิกติดตามหรือการติดตามกลับ จะถูกส่งจากเบราว์เซอร์ของคุณไปยัง Instagram โดยตรง เหมือนกับที่คุณกดปุ่มบน Instagram ด้วยตัวเอง</p><p>คุณลบข้อมูลในเครื่องนี้ได้ทุกเมื่อ โดยล้างข้อมูลในส่วนขยายหรือถอนการติดตั้งส่วนขยาย</p>`,
      'privacy.use.h': `5. เราใช้ข้อมูลอย่างไร`,
      'privacy.use.body': `<p>เราใช้ข้อมูลตามข้อ 3 เพื่อวัตถุประสงค์ต่อไปนี้เท่านั้น</p><ul><li>สร้างและยืนยันตัวตนบัญชี FollowLens ของคุณ</li><li>ตรวจสอบสิทธิ์การใช้งานและปลดล็อกฟีเจอร์ Pro</li><li>ดำเนินการชำระเงิน รวมถึงจัดการการสมัครสมาชิก การยกเลิก และการคืนเงินผ่าน Stripe</li><li>ตอบคำถามและให้ความช่วยเหลือเมื่อคุณติดต่อเรา</li><li>รักษาความปลอดภัยของบริการ และป้องกันการฉ้อโกงหรือการใช้งานในทางที่ผิด</li><li>ปฏิบัติตามหน้าที่ตามกฎหมาย ภาษี และการบัญชี</li></ul><p>เรา<strong>ไม่</strong>ขายข้อมูลส่วนบุคคลของคุณ ไม่นำไปใช้เพื่อการโฆษณา และไม่นำไปสร้างโปรไฟล์เกี่ยวกับตัวคุณ ในกรณีที่กฎหมายกำหนดให้ต้องมีฐานทางกฎหมาย เราอาศัยฐานการปฏิบัติตามสัญญาที่ทำกับคุณ ประโยชน์โดยชอบด้วยกฎหมายในการรักษาความปลอดภัยของบริการ และการปฏิบัติตามหน้าที่ตามกฎหมาย</p>`,
      'privacy.limited.h': `6. การเปิดเผยข้อมูลตามข้อกำหนด Limited Use ของ Chrome Web Store`,
      'privacy.limited.body': `<p>การใช้และการโอนข้อมูลที่ {companyName} ได้รับผ่านส่วนขยาย รวมถึงข้อมูลที่ได้รับจาก Google API จะเป็นไปตาม<a href="https://developer.chrome.com/docs/webstore/program-policies">นโยบายข้อมูลผู้ใช้ของ Chrome Web Store (Chrome Web Store User Data Policy)</a> รวมถึงข้อกำหนดการใช้งานแบบจำกัด (Limited Use) โดยเฉพาะอย่างยิ่ง</p><ul><li>เราใช้ข้อมูลผู้ใช้เพื่อให้บริการและปรับปรุงวัตถุประสงค์หลักเพียงอย่างเดียวของส่วนขยาย คือ การวิเคราะห์ผู้ติดตามและการจัดการการติดตามสำหรับบัญชี Instagram ของคุณเอง รวมถึงฟีเจอร์ที่คุณมองเห็นได้เท่านั้น</li><li>เราไม่โอนข้อมูลผู้ใช้ให้บุคคลที่สาม เว้นแต่จำเป็นต่อการให้บริการ (เช่น ผู้ให้บริการที่ระบุไว้ในข้อ 7) เพื่อปฏิบัติตามกฎหมาย หรือเป็นส่วนหนึ่งของการควบรวมกิจการ การเข้าซื้อกิจการ หรือการขายทรัพย์สิน โดยจะแจ้งให้ผู้ใช้ทราบ</li><li>เราไม่ใช้หรือโอนข้อมูลผู้ใช้เพื่อการโฆษณาแบบเฉพาะบุคคล</li><li>เราไม่ขายข้อมูลผู้ใช้ และไม่ใช้หรือโอนข้อมูลเพื่อประเมินความน่าเชื่อถือทางการเงินหรือเพื่อการให้สินเชื่อ</li><li>เราไม่อนุญาตให้บุคคลใดอ่านข้อมูลผู้ใช้ เว้นแต่คุณให้ความยินยอมอย่างชัดแจ้ง (เช่น เมื่อคุณติดต่อฝ่ายช่วยเหลือ) จำเป็นเพื่อความปลอดภัย เช่น การตรวจสอบการใช้งานในทางที่ผิด จำเป็นเพื่อปฏิบัติตามกฎหมาย หรือเป็นข้อมูลที่รวบรวมและทำให้ไม่สามารถระบุตัวตนได้แล้วเพื่อการดำเนินงานภายใน</li></ul>`,
      'privacy.providers.h': `7. ผู้ให้บริการ`,
      'privacy.providers.body': `<p>เราแบ่งปันข้อมูลส่วนบุคคลเฉพาะกับผู้ให้บริการที่ช่วยเราดำเนินบริการ และเท่าที่จำเป็นต่อการให้บริการนั้นเท่านั้น</p><ul><li><strong>Supabase</strong> — ระบบยืนยันตัวตนผู้ใช้ และฐานข้อมูลที่จัดเก็บข้อมูลบัญชีและสิทธิ์การใช้งานของคุณ <a href="https://supabase.com/privacy">นโยบายความเป็นส่วนตัว</a></li><li><strong>Google</strong> — การลงชื่อเข้าใช้ด้วย Google เพื่อยืนยันตัวตนของคุณ <a href="https://policies.google.com/privacy">นโยบายความเป็นส่วนตัว</a></li><li><strong>Stripe</strong> — การประมวลผลการชำระเงิน การเรียกเก็บค่าสมัครสมาชิก การชำระเงินผ่านพร้อมเพย์ และพอร์ทัลลูกค้า <a href="https://stripe.com/privacy">นโยบายความเป็นส่วนตัว</a></li><li><strong>ผู้ให้บริการโฮสต์เว็บไซต์ของเรา</strong> — ให้บริการเว็บไซต์นี้ และอาจประมวลผลบันทึกเซิร์ฟเวอร์ตามปกติ</li></ul><p>ผู้ให้บริการเหล่านี้ประมวลผลข้อมูลในนามของเราภายใต้ข้อกำหนดและนโยบายความเป็นส่วนตัวของตนเอง นอกจากนี้ เราอาจเปิดเผยข้อมูลหากกฎหมายกำหนด หรือเพื่อปกป้องสิทธิ ความปลอดภัย และความมั่นคงของผู้ใช้ สาธารณชน หรือตัวเราเอง</p>`,
      'privacy.transfers.h': `8. การโอนข้อมูลไปต่างประเทศ`,
      'privacy.transfers.body': `<p>ผู้ให้บริการของเราอาจประมวลผลข้อมูลในประเทศอื่นนอกเหนือจากประเทศที่คุณอาศัยอยู่ รวมถึงสหรัฐอเมริกา ในกรณีที่กฎหมายกำหนด เราจะใช้มาตรการคุ้มครองที่เหมาะสม เช่น ข้อสัญญามาตรฐาน (Standard Contractual Clauses) ที่ผู้ให้บริการของเรามีให้ เพื่อคุ้มครองข้อมูลของคุณ</p>`,
      'privacy.retention.h': `9. ระยะเวลาการเก็บรักษาข้อมูล`,
      'privacy.retention.body': `<ul><li><strong>ข้อมูลบัญชีและสิทธิ์การใช้งาน</strong> จะถูกเก็บไว้ตราบเท่าที่บัญชีของคุณยังใช้งานอยู่ หากคุณขอให้ลบบัญชี เราจะลบภายใน 30 วัน</li><li><strong>บันทึกการชำระเงินและธุรกรรม</strong> อาจถูกเก็บไว้โดยเราและ Stripe ตามระยะเวลาที่กฎหมายภาษี การบัญชี และกฎหมายอื่นกำหนด</li><li><strong>อีเมลที่ติดต่อฝ่ายช่วยเหลือ</strong> จะถูกเก็บไว้เท่าที่จำเป็นเพื่อดำเนินการตามคำขอของคุณ และต่อจากนั้นอีกระยะเวลาหนึ่งตามสมควรเพื่อการเก็บบันทึก</li><li><strong>ข้อมูล Instagram ในเครื่อง</strong> จะอยู่บนอุปกรณ์ของคุณจนกว่าคุณจะล้างข้อมูลในส่วนขยายหรือถอนการติดตั้งส่วนขยาย เราไม่เคยเก็บสำเนาไว้</li></ul>`,
      'privacy.rights.h': `10. สิทธิและทางเลือกของคุณ`,
      'privacy.rights.body': `<p>ขึ้นอยู่กับกฎหมายของประเทศที่คุณอาศัยอยู่ เช่น พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) ของไทย GDPR ของสหภาพยุโรปหรือสหราชอาณาจักร หรือกฎหมายความเป็นส่วนตัวของรัฐแคลิฟอร์เนีย คุณอาจมีสิทธิขอเข้าถึง แก้ไข ลบ หรือขอรับสำเนาข้อมูลส่วนบุคคลของคุณ คัดค้านหรือขอให้ระงับการประมวลผลบางประเภท และถอนความยินยอมได้ทุกเมื่อ</p><p><strong>หากต้องการขอให้ลบข้อมูล</strong>หรือใช้สิทธิอื่นใด โปรดติดต่อเราผ่าน ${MAIL} โดยใช้หัวข้อ “Data request” เราอาจต้องยืนยันตัวตนของคุณก่อนดำเนินการ และจะตอบกลับภายใน 30 วัน การลบบัญชีไม่ได้ยกเลิกการสมัครสมาชิกที่ยังใช้งานอยู่โดยอัตโนมัติ โปรดยกเลิกก่อนผ่านเมนู “จัดการสมาชิกและใบเสร็จ” ในส่วนขยาย</p><p>คุณยังมีสิทธิร้องเรียนต่อหน่วยงานกำกับดูแลด้านการคุ้มครองข้อมูลส่วนบุคคลในประเทศของคุณ (ในประเทศไทย คือ สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล หรือ สคส.)</p>`,
      'privacy.security.h': `11. ความปลอดภัยของข้อมูล`,
      'privacy.security.body': `<p>เราใช้มาตรการตามมาตรฐานอุตสาหกรรมเพื่อคุ้มครองข้อมูลของคุณ รวมถึงการเชื่อมต่อแบบเข้ารหัส (HTTPS) การควบคุมสิทธิ์การเข้าถึง และระบบความปลอดภัยของผู้ให้บริการของเรา แม้จะไม่มีวิธีการส่งหรือจัดเก็บข้อมูลใดที่ปลอดภัยได้ 100% แต่เราพยายามอย่างเต็มที่ในการคุ้มครองข้อมูลของคุณ และจำกัดข้อมูลที่เราเก็บไว้ให้น้อยที่สุดตั้งแต่ต้น</p>`,
      'privacy.children.h': `12. ความเป็นส่วนตัวของเด็ก`,
      'privacy.children.body': `<p>บริการนี้ไม่ได้มุ่งเป้าไปที่เด็ก ผู้ใช้บริการต้องมีอายุอย่างน้อย 13 ปี หรือตามอายุขั้นต่ำที่กฎหมายในประเทศของคุณกำหนดสำหรับการใช้ Instagram และการให้ความยินยอมในการประมวลผลข้อมูลส่วนบุคคล เราไม่ได้ตั้งใจเก็บรวบรวมข้อมูลส่วนบุคคลของเด็ก หากคุณเชื่อว่ามีเด็กให้ข้อมูลส่วนบุคคลแก่เรา โปรดติดต่อเรา แล้วเราจะลบข้อมูลนั้น</p>`,
      'privacy.changes.h': `13. การเปลี่ยนแปลงนโยบายนี้`,
      'privacy.changes.body': `<p>เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว เมื่อมีการปรับปรุง เราจะเปลี่ยนวันที่มีผลบังคับใช้ที่ด้านบนของหน้านี้ หากเป็นการเปลี่ยนแปลงที่สำคัญ เราจะแจ้งให้คุณทราบผ่านเว็บไซต์หรือส่วนขยายก่อนที่การเปลี่ยนแปลงจะมีผล</p><p>นโยบายนี้มีทั้งฉบับภาษาอังกฤษและภาษาไทย หากเนื้อหาสองฉบับไม่สอดคล้องกัน ให้ถือฉบับภาษาอังกฤษเป็นหลัก เว้นแต่กฎหมายกำหนดไว้เป็นอย่างอื่น</p>`,
      'privacy.contact.h': `14. ติดต่อเรา`,
      'privacy.contact.body': `<p>{legalEntity}<br>ช่องทางติดต่อ: ${MAIL}</p>`,

      /* ---------- Terms ---------- */
      'terms.desc@free': `ข้อกำหนดที่ใช้เมื่อคุณใช้ FollowLens ซึ่งเป็นส่วนขยายเบราว์เซอร์ที่ใช้งานได้ฟรี รวมถึงความรับผิดชอบของคุณบน Instagram`,
      'terms.agreement.body@free': `<p>เมื่อคุณติดตั้งหรือใช้งานส่วนขยาย ถือว่าคุณยอมรับข้อกำหนดนี้และ<a href="privacy.html">นโยบายความเป็นส่วนตัว</a>ของเรา หากไม่ยอมรับ โปรดอย่าใช้บริการ</p>`,
      'terms.service.body@free': `<p>FollowLens เป็นส่วนขยายเบราว์เซอร์ที่ทำงานบน instagram.com ในเบราว์เซอร์ที่คุณล็อกอินไว้ ช่วยวิเคราะห์บัญชีที่คุณติดตามและบัญชีที่ติดตามคุณ แจ้งเตือนบัญชีที่อาจไม่มีการใช้งานหรือเป็นสแปม และให้คุณเลิกติดตามได้ทั้งแบบกดเองและแบบคิวอัตโนมัติที่มีการจำกัดความปลอดภัย</p><p><strong>FollowLens ใช้งานได้ฟรี</strong> ไม่มีแพ็กเกจแบบเสียเงิน ไม่มีการสมัครสมาชิก ไม่มีการซื้อในแอปหรือค่าธรรมเนียมใดๆ และเราไม่เคยขอข้อมูลการชำระเงิน หากคุณเลือกสนับสนุนผ่านลิงก์ “เลี้ยงกาแฟ” (Buy me a coffee) ถือเป็นการให้โดยสมัครใจ ไม่ได้เป็นการซื้อฟีเจอร์ สิทธิ์การใช้งาน บริการ หรือการช่วยเหลือใดๆ และไม่สามารถขอคืนเงินได้</p><p>FollowLens ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับการรับรอง และไม่ได้รับการสนับสนุนจาก Instagram หรือ Meta</p>`,
      'terms.eligibility.h@free': `3. คุณสมบัติของผู้ใช้`,
      'terms.eligibility.body@free': `<p>คุณต้องมีอายุตามเกณฑ์ขั้นต่ำของ Instagram จึงจะใช้บริการได้ หากคุณยังไม่บรรลุนิติภาวะตามกฎหมายที่คุณอาศัยอยู่ ต้องใช้บริการภายใต้การดูแลของผู้ปกครอง</p><p>FollowLens ไม่ต้องสมัครบัญชีใดๆ ส่วนขยายทำงานกับบัญชี Instagram ที่คุณล็อกอินไว้อยู่แล้ว และคุณเป็นผู้รับผิดชอบบัญชีนั้นรวมถึงทุกการกระทำที่ทำผ่านส่วนขยายแต่เพียงผู้เดียว</p>`,
      'terms.license.body@free': `<p>ภายใต้ข้อกำหนดนี้ เราให้สิทธิ์แก่คุณแบบส่วนบุคคล จำกัด ไม่ผูกขาด โอนไม่ได้ และเพิกถอนได้ ในการติดตั้งและใช้งานส่วนขยายโดยไม่มีค่าใช้จ่าย เพื่อจัดการบัญชี Instagram ของคุณเอง คุณต้องไม่ทำซ้ำ ดัดแปลง เผยแพร่ ขาย ให้เช่า หรือให้สิทธิ์ช่วงส่วนขยาย และต้องไม่ทำวิศวกรรมย้อนกลับหรือถอดรหัสส่วนขยาย เว้นแต่กฎหมายจะห้ามข้อจำกัดนี้</p>`,
      'terms.liability.body@free': `<p>ภายใต้ขอบเขตสูงสุดที่กฎหมายอนุญาต {companyName} และ {legalEntity} จะไม่รับผิดต่อความเสียหายใดๆ ไม่ว่าทางตรง ทางอ้อม โดยบังเอิญ พิเศษ ต่อเนื่อง หรือค่าเสียหายเชิงลงโทษ หรือการสูญเสียผลกำไร ข้อมูล ผู้ติดตาม ชื่อเสียง หรือการเข้าถึงบัญชี รวมถึงการที่บัญชี Instagram ของคุณถูกบล็อกการกระทำ ถูกจำกัด ถูกระงับ ถูกแบน หรือถูกปิด อันเกิดจากหรือเกี่ยวข้องกับการใช้บริการ</p><p>เนื่องจากบริการนี้ให้ใช้ฟรี ภายใต้ขอบเขตสูงสุดที่กฎหมายอนุญาต ความรับผิดรวมของเราต่อข้อเรียกร้องใดๆ ที่เกี่ยวกับบริการจึงเท่ากับศูนย์ บางประเทศไม่อนุญาตให้จำกัดความรับผิดบางประเภท ข้อความข้างต้นบางส่วนจึงอาจไม่มีผลกับคุณ</p>`,
      'terms.termination.body@free': `<p>คุณเลิกใช้บริการได้ทุกเมื่อโดยถอนการติดตั้งส่วนขยาย ซึ่งจะลบข้อมูลที่ส่วนขยายเก็บไว้ในเบราว์เซอร์ของคุณด้วย เราอาจหยุดให้บริการทั้งหมดหรือบางส่วนได้ทุกเมื่อ และอาจระงับการเข้าถึงหากคุณละเมิดข้อกำหนดนี้หรือเมื่อกฎหมายกำหนด ข้อกำหนดที่โดยลักษณะควรมีผลต่อไปหลังการยุติ เช่น การปฏิเสธการรับประกัน การจำกัดความรับผิด และกฎหมายที่ใช้บังคับ จะยังคงมีผลต่อไป</p>`,
      'terms.svcchanges.h@free': `7. การเปลี่ยนแปลงบริการ`,
      'terms.ip.h@free': `8. ทรัพย์สินทางปัญญา`,
      'terms.privacy.h@free': `9. ความเป็นส่วนตัว`,
      'terms.warranty.h@free': `10. การปฏิเสธการรับประกัน`,
      'terms.liability.h@free': `11. การจำกัดความรับผิด`,
      'terms.indemnity.h@free': `12. การชดใช้ค่าเสียหาย`,
      'terms.termination.h@free': `13. การระงับและการยุติการใช้งาน`,
      'terms.law.h@free': `14. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท`,
      'terms.changes.h@free': `15. การเปลี่ยนแปลงข้อกำหนด`,
      'terms.language.h@free': `16. ภาษา`,
      'terms.contact.h@free': `17. ติดต่อเรา`,
      'terms.freeNote': `<strong>เวอร์ชันปัจจุบัน:</strong> FollowLens ใช้งานได้ฟรี 100% ไม่มีการเข้าสู่ระบบ ไม่มีการชำระเงิน ไม่มีการสมัครสมาชิก และไม่ส่งข้อมูลใดๆ ของคุณไปยังเซิร์ฟเวอร์ของเรา ทุกอย่างอยู่ในเบราว์เซอร์ของคุณ`,
      'terms.title': `ข้อกำหนดการให้บริการ — FollowLens`,
      'terms.desc': `ข้อกำหนดในการใช้ FollowLens รวมถึงการสมัครสมาชิก การยกเลิก การคืนเงิน และความรับผิดชอบของคุณบน Instagram`,
      'terms.h1': `ข้อกำหนดการให้บริการ`,
      'terms.intro': `ข้อกำหนดการให้บริการนี้ (“ข้อกำหนด”) ใช้กับการใช้งานส่วนขยายเบราว์เซอร์ FollowLens (“ส่วนขยาย”) เว็บไซต์ FollowLens และบริการที่เกี่ยวข้อง (รวมเรียกว่า “บริการ”) ซึ่งดำเนินการโดย {legalEntity} (“{companyName}” หรือ “เรา”) โปรดอ่านอย่างละเอียด`,
      'terms.agreement.h': `1. การยอมรับข้อกำหนด`,
      'terms.agreement.body': `<p>เมื่อคุณติดตั้งหรือใช้ส่วนขยาย สร้างบัญชี หรือซื้อแพ็กเกจแบบชำระเงิน ถือว่าคุณยอมรับข้อกำหนดนี้และ<a href="privacy.html">นโยบายความเป็นส่วนตัว</a>ของเรา หากคุณไม่ยอมรับ โปรดอย่าใช้บริการ</p>`,
      'terms.service.h': `2. เกี่ยวกับบริการ`,
      'terms.service.body': `<p>FollowLens เป็นส่วนขยายเบราว์เซอร์ที่ทำงานบน instagram.com ในเบราว์เซอร์ที่คุณล็อกอินไว้เอง ช่วยวิเคราะห์บัญชีที่คุณติดตามและบัญชีที่ติดตามคุณ แจ้งเตือนบัญชีที่อาจไม่มีการใช้งานหรือเป็นสแปม และช่วยให้คุณเลิกติดตามได้ทั้งแบบทำเองและผ่านคิวอัตโนมัติที่มีขีดจำกัดด้านความปลอดภัย ฟีเจอร์บางอย่างใช้ได้เฉพาะแพ็กเกจแบบชำระเงิน (“Pro”)</p><div class="callout"><p><strong>FollowLens ไม่มีส่วนเกี่ยวข้อง ไม่ได้รับการรับรอง และไม่ได้รับการสนับสนุนจาก Instagram หรือ Meta</strong> โดย Instagram เป็นเครื่องหมายการค้าของ Meta Platforms, Inc.</p></div>`,
      'terms.eligibility.h': `3. คุณสมบัติผู้ใช้และบัญชีของคุณ`,
      'terms.eligibility.body': `<p>คุณต้องมีอายุอย่างน้อย 18 ปี หรือบรรลุนิติภาวะตามกฎหมายของประเทศที่คุณอาศัยอยู่ จึงจะซื้อแพ็กเกจแบบชำระเงินได้ หากอายุน้อยกว่านั้น คุณใช้บริการได้ภายใต้การดูแลของผู้ปกครอง และไม่ว่ากรณีใด คุณต้องมีอายุตามเกณฑ์ขั้นต่ำของ Instagram คุณลงชื่อเข้าใช้ FollowLens ด้วยบัญชี Google และต้องรับผิดชอบต่อกิจกรรมทั้งหมดภายใต้บัญชีของคุณ รวมถึงการดูแลการเข้าถึงบัญชี Google ของคุณให้ปลอดภัย</p>`,
      'terms.license.h': `4. สิทธิการใช้งาน`,
      'terms.license.body': `<p>ภายใต้ข้อกำหนดนี้ เราให้สิทธิแก่คุณในการติดตั้งและใช้ส่วนขยายเพื่อจัดการบัญชี Instagram ของคุณเอง โดยเป็นสิทธิส่วนบุคคลที่มีขอบเขตจำกัด ไม่ผูกขาด โอนให้ผู้อื่นไม่ได้ และอาจถูกเพิกถอนได้ คุณต้องไม่</p><ul><li>คัดลอก ดัดแปลง เผยแพร่ ขาย ให้เช่า หรือให้สิทธิช่วงในส่วนขยาย</li><li>ทำวิศวกรรมย้อนกลับหรือถอดรหัสส่วนขยาย เว้นแต่กฎหมายห้ามการจำกัดสิทธินี้</li><li>หลบเลี่ยงหรือแก้ไขการตรวจสอบสิทธิ์ ขีดจำกัดของแพ็กเกจ หรือขีดจำกัดด้านความปลอดภัย</li><li>แบ่งปันสิทธิ์ Pro ให้ผู้อื่น หรือนำไปขายต่อ</li></ul>`,
      'terms.use.h': `5. การใช้งานที่ยอมรับได้`,
      'terms.use.body': `<p>คุณตกลงว่าจะไม่ใช้บริการเพื่อ</p><ul><li>ส่งสแปม คุกคามผู้อื่น หรือกระทำการใดๆ ที่เป็นการละเมิดหรือหลอกลวง</li><li>จัดการบัญชีที่คุณไม่ได้เป็นเจ้าของหรือไม่ได้รับอนุญาตให้จัดการ</li><li>เก็บรวบรวม ขาย หรือเผยแพร่ข้อมูลส่วนบุคคลของผู้อื่น</li><li>กระทำผิดกฎหมายหรือละเมิดสิทธิของผู้ใด</li><li>รบกวน ทำให้ระบบของเราทำงานหนักเกินไป หรือพยายามเข้าถึงระบบของเราโดยไม่ได้รับอนุญาต</li></ul>`,
      'terms.instagram.h': `6. Instagram และความรับผิดชอบของคุณ`,
      'terms.instagram.body': `<div class="callout warn"><p><strong>โปรดอ่านข้อนี้อย่างละเอียด</strong></p></div><p>FollowLens ทำงานร่วมกับบริการของบุคคลที่สาม คือ Instagram ซึ่งมีข้อกำหนดการใช้งานและหลักเกณฑ์ชุมชนของตนเอง <strong>การกระทำแบบอัตโนมัติ รวมถึงการเลิกติดตามอัตโนมัติ อาจขัดต่อข้อกำหนดการใช้งานของ Instagram</strong> และ Instagram อาจจำกัด บล็อกการกระทำชั่วคราว (“action block”) ระงับ หรือปิดใช้งานบัญชีที่ระบบมองว่ามีกิจกรรมแบบอัตโนมัติหรือผิดปกติได้ ตามดุลยพินิจของ Instagram แต่เพียงผู้เดียว</p><p>คุณรับทราบและตกลงว่า</p><ul><li>คุณเป็นผู้รับผิดชอบแต่เพียงผู้เดียวต่อบัญชี Instagram ของคุณ ต่อการปฏิบัติตามข้อกำหนดของ Instagram และต่อการกระทำทั้งหมดที่เกิดขึ้นกับบัญชีของคุณผ่านส่วนขยาย</li><li>ฟีเจอร์ด้านความปลอดภัยของส่วนขยาย เช่น การหน่วงเวลาแบบสุ่ม การพักระหว่างรอบ เพดานรายวัน การตรวจซ้ำก่อนเลิกติดตามทุกครั้ง และการหยุดอัตโนมัติเมื่อการกระทำถูกบล็อก ออกแบบมาเพื่อลดความเสี่ยง แต่<strong>ไม่สามารถรับประกันได้</strong>ว่าบัญชีของคุณจะไม่ถูกจำกัด</li><li>Instagram อาจเปลี่ยนแปลงเว็บไซต์ได้ทุกเมื่อ ซึ่งอาจทำให้ฟีเจอร์บางอย่างใช้งานไม่ได้ชั่วคราว</li><li>เราไม่รับผิดชอบต่อการจำกัด การระงับ การสูญเสียผู้ติดตาม หรือผลกระทบอื่นใดที่ Instagram ดำเนินการ</li></ul><p><strong>คุณใช้ FollowLens โดยยอมรับความเสี่ยงเองทั้งหมด</strong> {companyName} และผู้พัฒนาไม่รับผิดชอบต่อการที่บัญชี Instagram ของคุณถูกบล็อกการกระทำ ถูกจำกัดชั่วคราว ถูก shadow-ban ถูกระงับ ถูกปิดใช้งาน หรือถูกแบนถาวร รวมถึงการสูญเสียผู้ติดตาม เนื้อหา การเข้าถึง หรือธุรกิจใดๆ ที่อาจเกิดจากการใช้ส่วนขยายนี้ ไม่ว่าจะ Unfollow ด้วยตนเองหรือใช้ Auto Unfollow</p>`,
      'terms.plans.h': `7. แพ็กเกจ การชำระเงิน และการต่ออายุอัตโนมัติ`,
      'terms.plans.body': `<p><strong>แพ็กเกจฟรี</strong> ให้บริการโดยไม่มีค่าใช้จ่าย และมีขีดจำกัดการใช้งานรายวันตามที่ระบุไว้บนเว็บไซต์ของเรา เราอาจเปลี่ยนแปลงสิ่งที่รวมอยู่ในแพ็กเกจฟรีได้ทุกเมื่อ</p><p><strong>การสมัครสมาชิก Pro (รายเดือนและรายปี)</strong> เรียกเก็บเงินล่วงหน้าและ<strong>ต่ออายุอัตโนมัติ</strong>เมื่อสิ้นสุดแต่ละรอบการเรียกเก็บเงินตามราคาที่ใช้อยู่ในขณะนั้น จนกว่าคุณจะยกเลิก เมื่อสมัครสมาชิก ถือว่าคุณอนุญาตให้เราและผู้ให้บริการชำระเงินของเรา คือ Stripe เรียกเก็บเงินจากวิธีการชำระเงินของคุณในการต่ออายุแต่ละครั้ง หากเราเปลี่ยนราคาแพ็กเกจของคุณ เราจะแจ้งให้ทราบล่วงหน้า และราคาใหม่จะมีผลตั้งแต่รอบการเรียกเก็บเงินถัดไป</p><p><strong>แพ็กเกจตลอดชีพ</strong> เป็นการชำระเงินครั้งเดียว ซึ่งให้สิทธิ์ใช้ฟีเจอร์ Pro ตราบเท่าที่เรายังให้บริการส่วนขยาย ไม่ใช่การสมัครสมาชิกและไม่มีการต่ออายุ แพ็กเกจนี้รองรับการชำระเงินผ่านพร้อมเพย์</p><p><strong>การชำระเงิน</strong> ทั้งหมดดำเนินการผ่าน Stripe ราคาอาจรวมหรือไม่รวมภาษี ขึ้นอยู่กับประเทศของคุณ ตามที่แสดงในหน้าชำระเงิน หากการชำระค่าต่ออายุไม่สำเร็จ ฟีเจอร์ Pro อาจถูกระงับไว้จนกว่าการชำระเงินจะสำเร็จ</p>`,
      'terms.cancel.h': `8. การยกเลิก`,
      'terms.cancel.body': `<p>คุณยกเลิกการสมัครสมาชิกได้ทุกเมื่อจากในส่วนขยาย โดยเปิดเมนูรูปโปรไฟล์ แล้วเลือก <strong>“จัดการสมาชิกและใบเสร็จ”</strong> เพื่อไปยังพอร์ทัลลูกค้าของ Stripe หรือส่งอีเมลให้เราช่วยดำเนินการก็ได้ การยกเลิกจะมีผลเมื่อสิ้นสุดรอบการเรียกเก็บเงินปัจจุบัน คุณยังใช้ Pro ได้จนถึงเวลานั้นและจะไม่ถูกเรียกเก็บเงินอีก เว้นแต่ตามที่ระบุในนโยบายการคืนเงินด้านล่างหรือตามที่กฎหมายกำหนด เราไม่คืนเงินหรือให้เครดิตสำหรับรอบการเรียกเก็บเงินที่ใช้ไม่ครบ</p>`,
      'terms.refunds.h': `9. นโยบายการคืนเงิน`,
      'terms.refunds.body': `<p><strong>คืนเงินภายใน 7 วันสำหรับการซื้อครั้งแรก</strong> หากคุณไม่พอใจ โปรดติดต่อเราผ่าน ${MAIL} ภายใน 7 วันนับจากการซื้อแพ็กเกจ Pro ครั้งแรก (รายเดือน รายปี หรือตลอดชีพ) โดยส่งจากอีเมลที่ผูกกับบัญชีของคุณ แล้วเราจะคืนเงินให้เต็มจำนวน สิทธิ์ Pro ของคุณจะสิ้นสุดลงเมื่อการคืนเงินเสร็จสมบูรณ์</p><p>โดยทั่วไป ค่าต่ออายุและการซื้อครั้งถัดๆ ไปไม่สามารถขอคืนเงินได้ แต่เราอาจพิจารณาคืนเงินตามดุลยพินิจ เช่น ในกรณีที่เรียกเก็บเงินผิดพลาด เราอาจปฏิเสธคำขอคืนเงินที่มีลักษณะเป็นการใช้สิทธิโดยมิชอบ เช่น การซื้อแล้วขอคืนเงินซ้ำหลายครั้ง เงินจะถูกคืนไปยังช่องทางการชำระเงินเดิม ส่วนระยะเวลาขึ้นอยู่กับธนาคารหรือผู้ให้บริการชำระเงินของคุณ โปรดติดต่อเราก่อนยื่นขอปฏิเสธรายการชำระเงิน (chargeback) เพื่อให้เราช่วยเหลือ</p><p>นโยบายนี้ไม่จำกัดสิทธิใดๆ ที่คุณมีตามกฎหมายคุ้มครองผู้บริโภคในประเทศของคุณ</p>`,
      'terms.svcchanges.h': `10. การเปลี่ยนแปลงบริการ`,
      'terms.svcchanges.body': `<p>เราพัฒนา FollowLens อย่างต่อเนื่อง และอาจเพิ่ม เปลี่ยนแปลง หรือนำฟีเจอร์ออกได้ทุกเมื่อ นอกจากนี้ เราอาจระงับหรือยุติบริการทั้งหมดหรือบางส่วน หากเรายุติส่วนขยายทั้งหมด เราจะพยายามแจ้งให้ทราบล่วงหน้าตามสมควร</p>`,
      'terms.ip.h': `11. ทรัพย์สินทางปัญญา`,
      'terms.ip.body': `<p>ส่วนขยาย เว็บไซต์ รวมถึงเนื้อหา ซอฟต์แวร์ การออกแบบ และเครื่องหมายการค้าที่เกี่ยวข้องทั้งหมด เป็นกรรมสิทธิ์ของเราหรือผู้ให้อนุญาตแก่เรา และได้รับความคุ้มครองตามกฎหมาย ข้อกำหนดนี้ไม่ได้ให้สิทธิใดๆ แก่คุณในแบรนด์ของเรา หากคุณส่งความคิดเห็นหรือข้อเสนอแนะมาให้เรา ถือว่าคุณอนุญาตให้เรานำไปใช้ได้โดยไม่มีภาระผูกพันใดๆ ต่อคุณ</p>`,
      'terms.privacy.h': `12. ความเป็นส่วนตัว`,
      'terms.privacy.body': `<p><a href="privacy.html">นโยบายความเป็นส่วนตัว</a>ของเราอธิบายวิธีจัดการข้อมูลส่วนบุคคล โดยสรุปคือ ข้อมูล Instagram ของคุณถูกประมวลผลและจัดเก็บในเบราว์เซอร์ของคุณ และไม่เคยถูกส่งไปยังเซิร์ฟเวอร์ของเรา</p>`,
      'terms.warranty.h': `13. การปฏิเสธการรับประกัน`,
      'terms.warranty.body': `<p>บริการนี้ให้บริการ<strong>“ตามสภาพ” และ “ตามที่มีให้บริการ”</strong> โดยไม่มีการรับประกันใดๆ ทั้งโดยชัดแจ้งหรือโดยปริยาย รวมถึงการรับประกันความเหมาะสมในเชิงพาณิชย์ ความเหมาะสมกับวัตถุประสงค์เฉพาะ และการไม่ละเมิดสิทธิ คะแนนสแปม ธงแจ้งเตือน และผลการวิเคราะห์อื่นๆ เป็นการประเมินโดยอัตโนมัติตามหลักเกณฑ์โดยประมาณ และอาจไม่ถูกต้อง เราไม่รับประกันว่าบริการจะทำงานได้อย่างต่อเนื่อง ปราศจากข้อผิดพลาด หรือรองรับการเปลี่ยนแปลงทุกอย่างของ Instagram ในอนาคต</p>`,
      'terms.liability.h': `14. การจำกัดความรับผิด`,
      'terms.liability.body': `<p>ภายใต้ขอบเขตสูงสุดที่กฎหมายอนุญาต {companyName} และ {legalEntity} จะไม่รับผิดต่อความเสียหายทางอ้อม ความเสียหายโดยบังเอิญ ความเสียหายพิเศษ ความเสียหายต่อเนื่อง หรือค่าเสียหายเชิงลงโทษใดๆ หรือการสูญเสียผลกำไร ข้อมูล ผู้ติดตาม ชื่อเสียง หรือการเข้าถึงบัญชี รวมถึงการจำกัด การระงับ หรือการปิดบัญชี Instagram ของคุณ ที่เกิดจากหรือเกี่ยวข้องกับการใช้บริการ</p><p>ภายใต้ขอบเขตสูงสุดที่กฎหมายอนุญาต ความรับผิดรวมทั้งหมดของเราสำหรับข้อเรียกร้องใดๆ ที่เกี่ยวกับบริการ จำกัดไม่เกินจำนวนเงินที่คุณชำระให้เราสำหรับบริการในช่วง 12 เดือนก่อนเกิดเหตุที่นำไปสู่ข้อเรียกร้อง บางประเทศไม่อนุญาตให้จำกัดความรับผิดบางประเภท ดังนั้นข้อจำกัดข้างต้นบางส่วนอาจไม่ใช้กับคุณ</p>`,
      'terms.indemnity.h': `15. การชดใช้ค่าเสียหาย`,
      'terms.indemnity.body': `<p>คุณตกลงที่จะชดใช้และปกป้องเราจากข้อเรียกร้อง ความสูญเสีย และค่าใช้จ่ายใดๆ (รวมถึงค่าทนายความตามสมควร) ที่เกิดจากการใช้บริการในทางที่ผิด การละเมิดข้อกำหนดนี้ หรือการละเมิดข้อกำหนดของบุคคลที่สาม รวมถึงข้อกำหนดการใช้งานของ Instagram</p>`,
      'terms.termination.h': `16. การระงับและการยุติการใช้งาน`,
      'terms.termination.body': `<p>คุณหยุดใช้บริการได้ทุกเมื่อโดยถอนการติดตั้งส่วนขยาย เราอาจระงับหรือยุติสิทธิ์การเข้าถึงของคุณหากคุณละเมิดข้อกำหนดนี้หรือเมื่อกฎหมายกำหนด หากเรายุติสิทธิ์การเข้าถึงของคุณโดยไม่มีเหตุอันควร เราจะคืนค่าบริการที่ชำระล่วงหน้าสำหรับส่วนที่ยังไม่ได้ใช้ของการสมัครสมาชิก ข้อกำหนดที่โดยสภาพควรมีผลต่อไปหลังการยุติ (รวมถึงการปฏิเสธการรับประกัน การจำกัดความรับผิด และกฎหมายที่ใช้บังคับ) จะยังคงมีผลต่อไป</p>`,
      'terms.law.h': `17. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท`,
      'terms.law.body': `<p>ข้อกำหนดนี้อยู่ภายใต้บังคับของกฎหมายแห่ง {jurisdiction} โดยไม่คำนึงถึงหลักการขัดกันแห่งกฎหมาย ข้อพิพาทใดๆ จะอยู่ในเขตอำนาจของศาลแห่ง {jurisdiction} แต่เพียงผู้เดียว เว้นแต่กฎหมายคุ้มครองผู้บริโภคที่มีผลบังคับจะให้สิทธิคุณฟ้องร้องในประเทศที่คุณมีถิ่นที่อยู่ เราขอแนะนำให้ติดต่อเราก่อน เพราะปัญหาส่วนใหญ่แก้ไขได้อย่างรวดเร็วทางอีเมล</p>`,
      'terms.changes.h': `18. การเปลี่ยนแปลงข้อกำหนด`,
      'terms.changes.body': `<p>เราอาจปรับปรุงข้อกำหนดนี้เป็นครั้งคราว โดยจะเปลี่ยนวันที่มีผลบังคับใช้ที่ด้านบนของหน้านี้ และสำหรับการเปลี่ยนแปลงที่สำคัญ เราจะแจ้งให้คุณทราบผ่านเว็บไซต์หรือส่วนขยายก่อนที่จะมีผล หากคุณยังคงใช้บริการหลังจากการเปลี่ยนแปลงมีผลแล้ว ถือว่าคุณยอมรับข้อกำหนดฉบับปรับปรุง</p>`,
      'terms.language.h': `19. ภาษา`,
      'terms.language.body': `<p>ข้อกำหนดนี้มีทั้งฉบับภาษาอังกฤษและภาษาไทย ฉบับภาษาไทยจัดทำขึ้นเพื่อความสะดวก หากเนื้อหาไม่สอดคล้องกัน ให้ถือฉบับภาษาอังกฤษเป็นหลัก เว้นแต่กฎหมายของประเทศคุณกำหนดไว้เป็นอย่างอื่น</p>`,
      'terms.contact.h': `20. ติดต่อเรา`,
      'terms.contact.body': `<p>{legalEntity}<br>ช่องทางติดต่อ: ${MAIL}</p>`,

      /* ---------- Success ---------- */
      'success.title': `ชำระเงินสำเร็จ — FollowLens`,
      'success.desc': `การซื้อ FollowLens Pro ของคุณเสร็จสมบูรณ์แล้ว เริ่มใช้งานได้ตามขั้นตอนนี้`,
      'success.h1': `ชำระเงินสำเร็จ 🎉`,
      'success.lead': `ขอบคุณที่อัปเกรดเป็น FollowLens Pro! เริ่มใช้งานได้ตามขั้นตอนนี้`,
      'success.s1': `กลับไปที่แท็บ Instagram ของคุณ (instagram.com)`,
      'success.s2': `เปิด FollowLens แล้ว Pro จะปลดล็อกโดยอัตโนมัติภายในไม่กี่วินาที`,
      'success.s3': `ยังไม่ปลดล็อก? คลิกเมนูรูปโปรไฟล์ใน FollowLens แล้วเลือก <strong>“รีเฟรชสถานะ”</strong>`,
      'success.home': `กลับหน้าแรก`,
      'success.help': `Stripe ได้ส่งใบเสร็จไปที่อีเมลของคุณแล้ว หากยังพบปัญหา ติดต่อเราผ่าน ${MAIL} แล้วเราจะช่วยแก้ไขให้`,
      'success.close': `คุณปิดแท็บนี้ได้เลย`,

      /* ---------- Cancel ---------- */
      'cancel.title': `ยกเลิกการชำระเงินแล้ว — FollowLens`,
      'cancel.desc': `การชำระเงินของคุณถูกยกเลิก และไม่มีการเรียกเก็บเงินใดๆ`,
      'cancel.h1': `ยกเลิกการชำระเงินแล้ว`,
      'cancel.lead': `ไม่มีการเรียกเก็บเงินใดๆ คุณยังใช้แพ็กเกจฟรีต่อได้ หรือจะอัปเกรดเมื่อพร้อมก็ได้`,
      'cancel.pricing': `กลับไปที่หน้าราคา`,
      'cancel.home': `หน้าแรก`,
      'cancel.help': `มีคำถามเรื่องแพ็กเกจหรือการชำระเงิน? ติดต่อเราผ่าน ${MAIL}`,

      /* ---------- 404 ---------- */
      'nf.title': `ไม่พบหน้านี้ — FollowLens`,
      'nf.desc': `ไม่มีหน้านี้อยู่`,
      'nf.h1': `ไม่พบหน้านี้`,
      'nf.lead': `หน้าที่คุณกำลังหาไม่มีอยู่ หรือถูกย้ายไปแล้ว`,
      'nf.home': `ไปที่หน้าแรก`
    }
  };

  /* ======================================================================= */

  var current = DEFAULT_LANG;
  var storageOk = true;

  function cfg() { return (typeof window !== 'undefined' && window.SITE_CONFIG) || {}; }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatDate(iso, lang) {
    if (!iso) return '';
    try {
      var d = new Date(iso + 'T00:00:00Z');
      if (isNaN(d.getTime())) return iso;
      return new Intl.DateTimeFormat(lang === 'th' ? 'th-TH' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
      }).format(d);
    } catch (e) { return iso; }
  }

  function vars(lang) {
    var c = cfg();
    return {
      companyName: c.companyName || 'FollowLens',
      supportEmail: c.supportEmail || '',
      contact: contactHtml(c, lang),
      legalEntity: c.legalEntity || '',
      jurisdiction: c.jurisdiction || '[jurisdiction]',
      effectiveDate: formatDate(c.effectiveDate, lang),
      year: String(new Date().getFullYear())
    };
  }

  function contactHtml(c, lang) {
    if (c.supportEmail) return '<a href="mailto:' + escapeHtml(c.supportEmail) + '">' + escapeHtml(c.supportEmail) + '</a>';
    var label = lang === 'th' ? 'หน้าติดต่อของเรา (GitHub Issues)' : 'our support page (GitHub Issues)';
    return '<a href="' + escapeHtml(c.contactUrl || '#') + '" target="_blank" rel="noopener">' + label + '</a>';
  }

  function interpolate(str, lang, asHtml) {
    var v = vars(lang);
    return String(str).replace(/\{(\w+)\}/g, function (m, k) {
      if (!Object.prototype.hasOwnProperty.call(v, k)) return m;
      if (k === 'contact') return asHtml ? v[k] : v[k].replace(/<[^>]+>/g, '');
      return asHtml ? escapeHtml(v[k]) : v[k];
    });
  }

  function raw(key, lang) {
    var d = DICT[lang] || DICT.en;
    // While the product is 100% free, prefer "<key>@free" wording when it exists.
    if (cfg().freeRelease) {
      var fk = key + '@free';
      if (Object.prototype.hasOwnProperty.call(d, fk)) return d[fk];
      if (Object.prototype.hasOwnProperty.call(DICT.en, fk)) return DICT.en[fk];
    }
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    if (Object.prototype.hasOwnProperty.call(DICT.en, key)) return DICT.en[key];
    if (typeof console !== 'undefined') console.warn('[i18n] missing key:', key);
    return null;
  }

  function t(key, lang, asHtml) {
    lang = lang || current;
    var s = raw(key, lang);
    return s == null ? null : interpolate(s, lang, asHtml);
  }

  function configValue(path, lang) {
    var parts = String(path).split('.');
    var v = cfg();
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return null;
      v = v[parts[i]];
    }
    if (v && typeof v === 'object') v = v[lang] != null ? v[lang] : v.en;
    return v == null ? null : String(v);
  }

  function each(sel, fn) {
    var list = document.querySelectorAll(sel);
    for (var i = 0; i < list.length; i++) fn(list[i]);
  }

  function updateInternalLinks(lang) {
    // Only needed when localStorage is unavailable: carry ?lang= across pages.
    if (storageOk) return;
    each('a[href]', function (a) {
      var href = a.getAttribute('href');
      if (!href || /^([a-z]+:|#|\/\/)/i.test(href)) return;
      var m = href.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
      if (!m || !/(\.html|\/)$/.test(m[1] || '/')) return;
      var params;
      try { params = new URLSearchParams((m[2] || '').slice(1)); } catch (e) { return; }
      if (lang === DEFAULT_LANG) params.delete('lang'); else params.set('lang', lang);
      var q = params.toString();
      a.setAttribute('href', m[1] + (q ? '?' + q : '') + (m[3] || ''));
    });
  }

  function apply(lang) {
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.classList.toggle('free-release', !!cfg().freeRelease);

    each('[data-i18n]', function (el) {
      var s = t(el.getAttribute('data-i18n'), lang, false);
      if (s != null) el.textContent = s;
    });
    each('[data-i18n-html]', function (el) {
      var s = t(el.getAttribute('data-i18n-html'), lang, true);
      if (s != null) el.innerHTML = s;
    });
    each('[data-i18n-attr]', function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var idx = pair.indexOf(':');
        if (idx < 1) return;
        var attr = pair.slice(0, idx).trim();
        var s = t(pair.slice(idx + 1).trim(), lang, false);
        if (s != null) el.setAttribute(attr, s);
      });
    });
    each('[data-config]', function (el) {
      var v = configValue(el.getAttribute('data-config'), lang);
      if (v != null) el.textContent = v;
    });
    each('[data-config-href]', function (el) {
      var v = configValue(el.getAttribute('data-config-href'), lang);
      if (v) el.setAttribute('href', v);
    });
    each('[data-config-mailto]', function (el) {
      var email = cfg().supportEmail;
      if (email) el.setAttribute('href', 'mailto:' + email);
      else if (cfg().contactUrl) { el.setAttribute('href', cfg().contactUrl); el.setAttribute('target', '_blank'); el.setAttribute('rel', 'noopener'); }
    });
    each('[data-set-lang]', function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    updateInternalLinks(lang);

    try {
      document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
    } catch (e) { /* old browsers */ }
  }

  function setLang(lang, opts) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    current = lang;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { storageOk = false; }
    if (!(opts && opts.keepUrl)) {
      try {
        var u = new URL(window.location.href);
        if (u.searchParams.has('lang')) {
          if (lang === DEFAULT_LANG) u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
          window.history.replaceState(null, '', u.pathname + u.search + u.hash);
        }
      } catch (e) { /* ignore */ }
    }
    apply(lang);
  }

  function detect() {
    try {
      var p = new URLSearchParams(window.location.search).get('lang');
      if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    } catch (e) { /* ignore */ }
    try {
      var s = window.localStorage.getItem(STORAGE_KEY);
      if (s && SUPPORTED.indexOf(s) !== -1) return s;
    } catch (e) { storageOk = false; }
    return DEFAULT_LANG;
  }

  window.I18N = {
    dict: DICT,
    supported: SUPPORTED.slice(),
    t: function (key, lang) { return t(key, lang, false); },
    getLang: function () { return current; },
    setLang: setLang
  };

  if (typeof document === 'undefined') return; // allows loading in non-browser tooling

  function init() {
    setLang(detect(), { keepUrl: true });
    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-set-lang]') : null;
      if (!btn) return;
      e.preventDefault();
      setLang(btn.getAttribute('data-set-lang'));
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
