/*
 * Banner de cookies y Google Analytics 4.
 *
 * Lo usan el portfolio y los proyectos publicados en paoalbandata.github.io:
 *   <script src="/analytics.js" defer></script>
 *
 * Google Analytics solo se carga si la persona acepta. La elección se guarda
 * en este navegador durante 12 meses y se puede cambiar desde /cookies/ o con
 * cualquier elemento que tenga el atributo data-cookie-settings.
 */
(function () {
    'use strict';

    var GA_ID = 'G-6L7LVJGS1F';
    var STORAGE_KEY = 'pa-cookie-consent';
    var MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
    var POLICY_URL = 'https://paoalbandata.github.io/cookies/';

    function readConsent() {
        try {
            var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (saved && (saved.value === 'granted' || saved.value === 'denied') && Date.now() - saved.date < MAX_AGE_MS) {
                return saved.value;
            }
        } catch (e) {}
        return null;
    }

    function saveConsent(value) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: value, date: Date.now() }));
        } catch (e) {}
    }

    function loadAnalytics() {
        if (window.__paAnalyticsLoaded || GA_ID.indexOf('XXXX') !== -1) return;
        window.__paAnalyticsLoaded = true;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', GA_ID);
    }

    function deleteAnalyticsCookies() {
        var host = location.hostname;
        document.cookie.split(';').forEach(function (c) {
            var name = c.split('=')[0].trim();
            if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid') {
                ['', host, '.' + host].forEach(function (domain) {
                    document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '');
                });
            }
        });
    }

    var css =
        '#pa-cookies{position:fixed;left:0;right:0;bottom:0;z-index:9999;padding:0 max(12px,env(safe-area-inset-right,0px)) calc(12px + env(safe-area-inset-bottom,0px)) max(12px,env(safe-area-inset-left,0px));font:14px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}' +
        '#pa-cookies .pa-box{max-width:720px;margin:0 auto;background:#fff;color:#1f2328;border:1px solid #d0d7de;border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.14);padding:16px 18px;display:flex;flex-wrap:wrap;gap:12px 16px;align-items:center}' +
        '#pa-cookies p{margin:0;flex:1 1 320px}' +
        '#pa-cookies a{color:inherit;text-decoration:underline;text-underline-offset:2px}' +
        '#pa-cookies .pa-btns{display:flex;gap:8px;flex-wrap:wrap}' +
        '#pa-cookies button{font:600 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;padding:10px 18px;border-radius:8px;cursor:pointer;border:1px solid #1f2328;background:#fff;color:#1f2328}' +
        '#pa-cookies button.pa-accept{background:#1f2328;color:#fff}' +
        '#pa-cookies button:focus-visible{outline:2px solid #0969da;outline-offset:2px}' +
        '@media (prefers-color-scheme:dark){#pa-cookies .pa-box{background:#1c2128;color:#e6edf3;border-color:#373e47}#pa-cookies button{background:#1c2128;color:#e6edf3;border-color:#e6edf3}#pa-cookies button.pa-accept{background:#e6edf3;color:#1c2128}}';

    function closeBanner() {
        var el = document.getElementById('pa-cookies');
        if (el) el.remove();
    }

    function showBanner() {
        closeBanner();
        if (!document.getElementById('pa-cookies-style')) {
            var style = document.createElement('style');
            style.id = 'pa-cookies-style';
            style.textContent = css;
            document.head.appendChild(style);
        }
        var wrap = document.createElement('div');
        wrap.id = 'pa-cookies';
        wrap.setAttribute('role', 'region');
        wrap.setAttribute('aria-label', 'Aviso de cookies');
        wrap.innerHTML =
            '<div class="pa-box">' +
            '<p>Uso cookies de Google Analytics para saber cu\u00e1ntas personas visitan esta web y qu\u00e9 proyectos ven. ' +
            'Solo se activan si aceptas. <a href="' + POLICY_URL + '">M\u00e1s informaci\u00f3n</a></p>' +
            '<div class="pa-btns">' +
            '<button type="button" class="pa-reject">Rechazar</button>' +
            '<button type="button" class="pa-accept">Aceptar</button>' +
            '</div></div>';
        wrap.querySelector('.pa-accept').addEventListener('click', function () {
            saveConsent('granted');
            closeBanner();
            loadAnalytics();
        });
        wrap.querySelector('.pa-reject').addEventListener('click', function () {
            var wasGranted = window.__paAnalyticsLoaded;
            saveConsent('denied');
            deleteAnalyticsCookies();
            closeBanner();
            if (wasGranted) location.reload();
        });
        document.body.appendChild(wrap);
    }

    function init() {
        var consent = readConsent();
        if (consent === 'granted') loadAnalytics();
        else if (consent === null) showBanner();

        document.addEventListener('click', function (e) {
            var trigger = e.target.closest && e.target.closest('[data-cookie-settings]');
            if (trigger) {
                e.preventDefault();
                showBanner();
            }
        });
    }

    window.paCookies = { open: showBanner };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
