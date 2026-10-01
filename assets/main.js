/* FollowLens — small UI behaviours: mobile menu, FAQ accordion, pricing period switch */
(function () {
  'use strict';

  function init() {
    /* ---------- Mobile menu ---------- */
    var menuBtn = document.querySelector('.menu-btn');
    var nav = document.getElementById('main-nav');
    if (menuBtn && nav) {
      var setOpen = function (open) {
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        nav.classList.toggle('is-open', open);
      };
      menuBtn.addEventListener('click', function () {
        setOpen(menuBtn.getAttribute('aria-expanded') !== 'true');
      });
      nav.addEventListener('click', function (e) {
        if (e.target.closest && e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          menuBtn.focus();
        }
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 900) setOpen(false);
      });
    }

    /* ---------- FAQ accordion ---------- */
    var qs = document.querySelectorAll('.faq-q');
    Array.prototype.forEach.call(qs, function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        panel.hidden = open;
      });
    });

    /* ---------- Pricing period switch (radiogroup) ---------- */
    var group = document.querySelector('.period-switch');
    if (group) {
      var radios = Array.prototype.slice.call(group.querySelectorAll('[role="radio"]'));
      var select = function (radio, focus) {
        var period = radio.getAttribute('data-period');
        radios.forEach(function (r) {
          var on = r === radio;
          r.setAttribute('aria-checked', on ? 'true' : 'false');
          r.tabIndex = on ? 0 : -1;
        });
        Array.prototype.forEach.call(document.querySelectorAll('[data-period-show]'), function (el) {
          el.hidden = el.getAttribute('data-period-show') !== period;
        });
        if (focus) radio.focus();
      };
      radios.forEach(function (r, i) {
        r.addEventListener('click', function () { select(r, false); });
        r.addEventListener('keydown', function (e) {
          var next = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = radios[(i + 1) % radios.length];
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = radios[(i - 1 + radios.length) % radios.length];
          else if (e.key === 'Home') next = radios[0];
          else if (e.key === 'End') next = radios[radios.length - 1];
          if (next) { e.preventDefault(); select(next, true); }
        });
      });
      var initial = radios.filter(function (r) { return r.getAttribute('aria-checked') === 'true'; })[0] || radios[0];
      if (initial) select(initial, false);
    }

    /* ---------- Placeholder store link ---------- */
    // While chromeStoreUrl is still "#", keep the click from jumping to the top of the page.
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[data-config-href="chromeStoreUrl"]') : null;
      if (a && a.getAttribute('href') === '#') e.preventDefault();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
