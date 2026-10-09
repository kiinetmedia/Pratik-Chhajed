/* Nav-bar haptics.
   Android / Chromium: Vibration API.
   iOS 18+ Safari: no Vibration API, but toggling a native <input switch>
   via its label fires the system haptic tick. Desktop: silently no-op. */
(function () {
  var canVibrate = typeof navigator.vibrate === 'function';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Visible "tactile" feedback, so taps feel physical on every device
  // (desktop has no vibration motor).
  var css = document.createElement('style');
  css.textContent = [
    '.app-header a, .app-header button, #mobileMenu a, #closeMenuBtn {',
    '  -webkit-tap-highlight-color: transparent;',
    '  transition: transform .18s cubic-bezier(.2,.7,.2,1), color .2s ease, background-color .2s ease, border-color .2s ease;',
    '}',
    '.app-header a:active, .app-header button:active, #mobileMenu a:active, #closeMenuBtn:active {',
    '  transform: scale(.94); transition-duration: .06s;',
    '}',
    '.app-header nav a { position: relative; }',
    '.app-header nav a::after {',
    '  content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 2px; border-radius: 2px;',
    '  background: var(--gold, #C9A961); transform: scaleX(0); transform-origin: left;',
    '  transition: transform .28s cubic-bezier(.2,.7,.2,1);',
    '}',
    '.app-header nav a:hover::after, .app-header nav a:focus-visible::after { transform: scaleX(1); }',
    '#mobileMenu nav a { border-radius: 8px; margin: 0 -.75rem; padding-left: .75rem; padding-right: .75rem; }',
    '#mobileMenu nav a:active { background: rgba(15,76,92,.08); color: var(--primary, #0F4C5C); }',
    '.hx-ripple {',
    '  position: fixed; z-index: 9999; pointer-events: none; width: 44px; height: 44px; margin: -22px 0 0 -22px;',
    '  border-radius: 999px; background: rgba(201,169,97,.45); transform: scale(.2); opacity: 1;',
    '  animation: hx-ripple .45s cubic-bezier(.2,.7,.2,1) forwards;',
    '}',
    '@keyframes hx-ripple { to { transform: scale(1.6); opacity: 0; } }',
    '@media (prefers-reduced-motion: reduce) {',
    '  .app-header a:active, .app-header button:active, #mobileMenu a:active, #closeMenuBtn:active { transform: none; }',
    '  .hx-ripple { display: none; }',
    '}'
  ].join('\n');
  document.head.appendChild(css);

  function ripple(e) {
    if (reduce || !e.clientX && !e.clientY) return;
    var r = document.createElement('span');
    r.className = 'hx-ripple';
    r.style.left = e.clientX + 'px';
    r.style.top = e.clientY + 'px';
    document.body.appendChild(r);
    setTimeout(function () { r.remove(); }, 500);
  }

  if (reduce) {
    // Keep only the static styles above; no vibration or motion.
    return;
  }

  var iosLabel = null;
  if (!canVibrate) {
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.setAttribute('switch', '');
    input.id = 'haptic-switch';
    input.tabIndex = -1;
    input.setAttribute('aria-hidden', 'true');
    iosLabel = document.createElement('label');
    iosLabel.htmlFor = 'haptic-switch';
    iosLabel.setAttribute('aria-hidden', 'true');
    var wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;left:-9999px;top:0;';
    wrap.appendChild(input);
    wrap.appendChild(iosLabel);
    document.body.appendChild(wrap);
  }

  function tap(pattern) {
    try {
      if (canVibrate) navigator.vibrate(pattern);
      else if (iosLabel) iosLabel.click();
    } catch (e) { /* ignore */ }
  }

  // Light tick for links, slightly firmer for opening/closing the drawer.
  var LIGHT = 8, MEDIUM = 14;

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest(
      '#menuBtn, #closeMenuBtn, #menuOverlay, .app-header a, .app-header button, #mobileMenu a'
    );
    if (!t) return;
    var strong = t.id === 'menuBtn' || t.id === 'closeMenuBtn' || t.id === 'menuOverlay';
    tap(strong ? MEDIUM : LIGHT);
    ripple(e);
  }, true);
})();
