/* cards.js — Feature card definitions & rendering (single source of truth) */
(function() {
  'use strict';

  var XH = '<svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="7" stroke="#7c3aed" stroke-width="2"/><circle cx="18" cy="18" r="3" stroke="#7c3aed" stroke-width="1.5" opacity=".5"/><line x1="18" y1="2" x2="18" y2="10" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="26" x2="18" y2="34" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="2" y1="18" x2="10" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="26" y1="18" x2="34" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/></svg>';

  var GRAB = '<svg class="wa-grab" viewBox="0 0 56 64" fill="none"><g stroke="#94a3b8" stroke-width="2" fill="#fff" stroke-linejoin="round"><rect x="1" y="22" width="9" height="20" rx="4.5"/><rect x="12" y="8" width="9" height="34" rx="4.5"/><rect x="23" y="2" width="9" height="40" rx="4.5"/><rect x="34" y="10" width="9" height="32" rx="4.5"/><rect x="45" y="18" width="9" height="24" rx="4.5"/><rect x="2" y="36" width="52" height="24" rx="11"/></g></svg>';
  var GRABBING = '<svg class="wa-grabbing" viewBox="0 20 56 44" fill="none"><g stroke="#94a3b8" stroke-width="2" fill="#fff" stroke-linejoin="round"><rect x="1" y="30" width="9" height="10" rx="4.5"/><rect x="12" y="26" width="9" height="14" rx="4.5"/><rect x="23" y="24" width="9" height="16" rx="4.5"/><rect x="34" y="26" width="9" height="14" rx="4.5"/><rect x="45" y="30" width="9" height="10" rx="4.5"/><rect x="2" y="36" width="52" height="24" rx="11"/></g></svg>';

  var CARDS = [
    {
      id: 'widget',
      reversed: false,
      bg: 'linear-gradient(135deg,#ecfeff,#e0f2fe)',
      labelColor: '#06b6d4',
      label: 'ALWAYS ON SCREEN',
      title: 'Floating Widget',
      desc: 'A glassmorphic control panel that lives on your page. Start, stop, add click points, and view live stats &mdash; without ever opening the popup. Drag it anywhere you want.',
      visual: function() {
        return '<div class="wa-scene">' +
          '<div class="wa">' +
            '<div class="wa-grip"><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
            '<div class="wa-btn wa-del"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg></div>' +
            '<div class="wa-row">' +
              '<span>PTS</span><span>CYC</span><span>CLK</span>' +
              '<span class="v"><span class="wa-p0">0</span><span class="wa-p1">1</span><span class="wa-p2">2</span><span class="wa-p3">3</span><i style="visibility:hidden">0</i></span>' +
              '<span class="v"><span class="wa-y0">0</span><span class="wa-y1">1</span><i style="visibility:hidden">0</i></span>' +
              '<span class="v"><span class="wa-c0">0</span><span class="wa-c1">1</span><span class="wa-c2">2</span><span class="wa-c3">3</span><i style="visibility:hidden">0</i></span>' +
            '</div>' +
            '<div class="wa-btn wa-play">' +
              '<svg class="wa-play-i" width="18" height="18" viewBox="0 0 24 24" fill="#fff"><polygon points="6 3 20 12 6 21"/></svg>' +
              '<svg class="wa-pause-i" width="18" height="18" viewBox="0 0 24 24" fill="#fff"><rect x="5" y="4" width="5" height="16" rx="1"/><rect x="14" y="4" width="5" height="16" rx="1"/></svg>' +
            '</div>' +
            '<div class="wa-int"><i>\u2039</i> 1.0 <i>\u203a</i></div>' +
            '<div class="wa-btn wa-add"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg></div>' +
            '<div class="wa-grip"><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
            '<div class="wa-cursor">' +
              GRAB +
              GRABBING +
            '</div>' +
          '</div>' +
          '<div class="wa-edge wa-edge-l"></div>' +
          '<div class="wa-edge wa-edge-r"></div>' +
        '</div>';
      }
    },
    {
      id: 'multipoint',
      reversed: true,
      bg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
      labelColor: '#7c3aed',
      label: 'PRECISION TARGETING',
      title: 'Multi-Point Clicking',
      desc: 'Place up to 100 click targets on any page using crosshair selection. Each target ripples when clicked. Drag markers to reposition. Delete individually or clear all at once.',
      visual: function() {
        return '<div class="xh-demo">' +
          '<div class="ln" style="top:12%"></div><div class="ln" style="top:24%"></div>' +
          '<div class="ln" style="top:36%;width:70%"></div><div class="ln" style="top:48%"></div>' +
          '<div class="ln" style="top:60%;width:80%"></div><div class="ln" style="top:72%"></div>' +
          '<div class="ln" style="top:88%;width:60%"></div>' +
          '<div class="xh xh1">' + XH + '</div>' +
          '<div class="xh xh2">' + XH + '</div>' +
          '<div class="xh xh3">' + XH + '</div>' +
        '</div>';
      }
    },
    {
      id: 'popup',
      reversed: false,
      useImg: true,
      imgSrc: 'popup-demo.png',
      labelColor: '#f59e0b',
      label: 'FULL CONTROL',
      title: 'Popup Control Center',
      desc: 'Click the extension icon to open the popup &mdash; your command center. Set the click interval from 0.1s to any value, toggle Humanize mode, manage points, view real-time statistics, and start/stop with one tap.',
      extraClass: 'popup-reveal'
    },
    {
      id: 'humanize',
      reversed: true,
      bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)',
      labelColor: '#d97706',
      label: 'NATURAL TIMING',
      title: 'Smart Humanize',
      desc: 'Toggle Humanize mode to add &plusmn;10% random variation to every click interval. Instead of perfectly robotic timing, you get natural, human-like clicks that won\u2019t trigger anti-bot detection. Set your base interval from 0.1s to any value &mdash; the randomization adapts automatically.',
      visual: function() {
        return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;align-self:flex-start">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
            '<span style="font-size:12px;font-weight:700;color:#92400e;letter-spacing:.3px">CLICK TIMELINE</span>' +
          '</div>' +
          '<div style="width:100%">' +
            '<div style="font-size:10px;font-weight:600;color:#78716c;margin-bottom:6px">Regular (1.0s)</div>' +
            '<div class="hz-row">' +
              '<div class="hz-line"></div>' +
              '<div class="hz-dot cy r1" style="left:0;top:5px"></div>' +
              '<div class="hz-dot cy r2" style="left:25%;top:5px"></div>' +
              '<div class="hz-dot cy r3" style="left:50%;top:5px"></div>' +
              '<div class="hz-dot cy r4" style="left:75%;top:5px"></div>' +
              '<div class="hz-dot cy r5" style="right:0;top:5px"></div>' +
            '</div>' +
          '</div>' +
          '<div style="width:100%">' +
            '<div style="font-size:10px;font-weight:600;color:#78716c;margin-bottom:6px">Humanized (\u00b110%)</div>' +
            '<div class="hz-row">' +
              '<div class="hz-line"></div>' +
              '<div class="hz-dot am h1" style="left:0;top:5px"></div>' +
              '<div class="hz-dot am h2" style="left:15%;top:5px"></div>' +
              '<div class="hz-dot am h3" style="left:49%;top:5px"></div>' +
              '<div class="hz-dot am h4" style="left:61%;top:5px"></div>' +
              '<div class="hz-dot am h5" style="left:93%;top:5px"></div>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;justify-content:center;gap:12px;margin-top:4px">' +
            '<div style="font-size:20px;font-weight:800;color:#0891b2;font-family:\'SF Mono\',Monaco,monospace">1.0<span style="font-size:11px;color:#9ca3af">s</span></div>' +
            '<div style="color:#d1d5db;font-size:16px;padding-top:4px">\u2192</div>' +
            '<div style="font-size:20px;font-weight:800;color:#d97706;font-family:\'SF Mono\',Monaco,monospace">0.9-1.1<span style="font-size:11px;color:#9ca3af">s</span></div>' +
          '</div>';
      }
    },
    {
      id: 'pause',
      reversed: false,
      bg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)',
      labelColor: '#059669',
      label: 'INSTANT CONTROL',
      title: 'Pause &amp; Resume',
      desc: 'Pause the clicker anytime and resume right where you left off. All state is preserved &mdash; click count, completed cycles, and target positions stay exactly as they were. No need to set everything up again.',
      visual: function() {
        return '<div class="viz-pause">' +
          '<div class="state">' +
            '<div class="ico play"><svg width="28" height="28" viewBox="0 0 24 24" fill="#06b6d4"><polygon points="6 3 20 12 6 21"/></svg></div>' +
            '<div class="pill run">Running</div>' +
          '</div>' +
          '<span style="color:#d1d5db;font-size:22px">\u2194</span>' +
          '<div class="state">' +
            '<div class="ico pau"><svg width="28" height="28" viewBox="0 0 24 24" fill="#d97706"><rect x="5" y="3" width="5" height="18" rx="1.5"/><rect x="14" y="3" width="5" height="18" rx="1.5"/></svg></div>' +
            '<div class="pill pau">Paused</div>' +
          '</div>' +
        '</div>';
      }
    },
    {
      id: 'background',
      reversed: true,
      bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
      labelColor: '#2563eb',
      label: 'TRUE MULTITASK',
      title: 'Works in Background',
      desc: 'Switch to another tab &mdash; clicking keeps going. The extension uses a dedicated offscreen worker that bypasses browser throttling of inactive tabs. Your automation runs uninterrupted, even when you\u2019re browsing elsewhere.',
      visual: function() {
        return '<div class="viz-bg">' +
          '<div class="viz-bg-win">' +
            '<div class="viz-bg-bar"><span class="viz-bg-dot" style="background:#06b6d4"></span><span class="viz-bg-text">Shopping</span></div>' +
            '<div class="viz-bg-content">' +
              '<div class="viz-bg-ripple r1"></div>' +
              '<div class="viz-bg-ripple r2"></div>' +
              '<div class="viz-bg-check"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg> active</div>' +
            '</div>' +
          '</div>' +
          '<div class="viz-bg-win inactive">' +
            '<div class="viz-bg-bar"><span class="viz-bg-dot" style="background:#9ca3af"></span><span class="viz-bg-text">Other Tab</span></div>' +
            '<div class="viz-bg-content">' +
              '<div class="viz-bg-ripple r1"></div>' +
              '<div class="viz-bg-ripple r2"></div>' +
              '<div class="viz-bg-check"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg> running</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
    },
    {
      id: 'throttle',
      reversed: false,
      bg: 'linear-gradient(135deg,#fffbeb,#fef3c7)',
      labelColor: '#d97706',
      label: 'SMART TIMING',
      title: 'Throttle Detection',
      desc: 'Browsers throttle timers in background tabs from milliseconds to seconds. Speed Auto Clicker detects this automatically and compensates &mdash; your set interval stays accurate regardless of browser behavior.',
      visual: function() {
        return '<div class="viz-throttle">' +
          '<div class="vt-icon">' +
            '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>' +
          '</div>' +
          '<div class="vt-rows">' +
            '<div class="vt-row"><span class="vt-dot" style="background:#06b6d4"></span><span class="vt-label">Timer set</span><span class="vt-val">100ms</span></div>' +
            '<div class="vt-row vt-alert"><span class="vt-dot" style="background:#f59e0b"></span><span class="vt-label">Throttled</span><span class="vt-val">1000ms</span></div>' +
            '<div class="vt-row vt-fixed"><span class="vt-dot" style="background:#22c55e"></span><span class="vt-label">Corrected</span><span class="vt-val">100ms \u2713</span></div>' +
          '</div>' +
        '</div>';
      }
    },
    {
      id: 'drag',
      reversed: true,
      bg: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
      labelColor: '#7c3aed',
      label: 'FLEXIBLE PLACEMENT',
      title: 'Drag to Reposition',
      desc: 'Placed a crosshair in the wrong spot? Just drag it. Both click targets and the floating widget are fully draggable &mdash; rearrange your setup without starting over. Works precisely even on complex pages.',
      visual: function() {
        var xs = '<svg width="32" height="32" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="7" stroke="#7c3aed" stroke-width="2"/><line x1="18" y1="4" x2="18" y2="10" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="26" x2="18" y2="32" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="4" y1="18" x2="10" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="26" y1="18" x2="32" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/></svg>';
        return '<div class="viz-drag">' +
          '<' + 'svg class="cross from" width="32" height="32" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="7" stroke="#7c3aed" stroke-width="2"/><line x1="18" y1="4" x2="18" y2="10" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="26" x2="18" y2="32" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="4" y1="18" x2="10" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="26" y1="18" x2="32" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/></svg>' +
          '<svg style="position:absolute;top:16px;left:24px" width="72" height="48" viewBox="0 0 48 32" fill="none"><path d="M4 28C12 24 36 8 44 4" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/><path d="M38 2l8 2-4 7" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '<svg class="cross to" width="32" height="32" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="7" stroke="#7c3aed" stroke-width="2"/><line x1="18" y1="4" x2="18" y2="10" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="26" x2="18" y2="32" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="4" y1="18" x2="10" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/><line x1="26" y1="18" x2="32" y2="18" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"/></svg>' +
        '</div>';
      }
    },
    {
      id: 'persite',
      reversed: false,
      bg: 'linear-gradient(135deg,#f8fafc,#f1f5f9)',
      labelColor: '#64748b',
      label: 'REMEMBERS EVERYTHING',
      title: 'Per-Site Settings',
      desc: 'Your click interval and humanize preferences save automatically for each website. Come back tomorrow &mdash; your setup is exactly where you left it. Factory reset in one click from the options page.',
      visual: function() {
        return '<div class="viz-sites">' +
          '<div class="viz-site">' +
            '<div class="url"><div class="dot" style="background:#4285f4"></div>google.com</div>' +
            '<div class="val">Interval: <b>0.5s</b></div>' +
            '<div class="val">Humanize: <b>ON</b></div>' +
          '</div>' +
          '<div class="viz-site">' +
            '<div class="url"><div class="dot" style="background:#ff4500"></div>reddit.com</div>' +
            '<div class="val">Interval: <b>2.0s</b></div>' +
            '<div class="val">Humanize: <b>OFF</b></div>' +
          '</div>' +
        '</div>';
      }
    },
    {
      id: 'keyboard',
      reversed: true,
      bg: 'linear-gradient(135deg,#ecfeff,#cffafe)',
      labelColor: '#06b6d4',
      label: 'POWER USER',
      title: 'Keyboard Shortcuts',
      desc: 'Start/stop clicking, add new targets, toggle the widget &mdash; all from keyboard without touching the mouse. Fully customizable via Chrome\u2019s built-in extension shortcut settings (chrome://extensions/shortcuts).',
      visual: function() {
        return '<div class="viz-keys">' +
          '<div class="viz-key">Alt</div>' +
          '<span class="viz-key-plus">+</span>' +
          '<div class="viz-key">Shift</div>' +
          '<span class="viz-key-plus">+</span>' +
          '<div class="viz-key">S</div>' +
        '</div>';
      }
    },
    {
      id: 'stats',
      reversed: false,
      bg: 'linear-gradient(135deg,#faf5ff,#f3e8ff)',
      labelColor: '#7c3aed',
      label: 'REAL-TIME DATA',
      title: 'Live Statistics',
      desc: 'Track active click points, completed cycles, total clicks, and elapsed time &mdash; all updating live. Stats display on both the floating widget and the popup, so you always know exactly what\u2019s happening.',
      visual: function() {
        return '<div class="viz-stats">' +
          '<div class="viz-stat"><div class="num vi">3</div><div class="lbl">Points</div></div>' +
          '<div class="viz-stat"><div class="num cy">12</div><div class="lbl">Cycles</div></div>' +
          '<div class="viz-stat"><div class="num am">36</div><div class="lbl">Clicks</div></div>' +
        '</div>';
      }
    },
    {
      id: 'iframe',
      reversed: true,
      bg: 'linear-gradient(135deg,#fff1f2,#ffe4e6)',
      labelColor: '#e11d48',
      label: 'DEEP REACH',
      title: 'Iframe Support',
      desc: 'Click inside embedded frames seamlessly. The extension relays click coordinates across frame boundaries &mdash; works with ads, embedded forms, captcha widgets, and any iframe content without special configuration.',
      visual: function() {
        return '<div class="viz-iframe">' +
          '<div class="frame">' +
            '<div style="font-size:10px;color:#9ca3af;margin-bottom:5px">Your Page</div>' +
            '<div class="inner">&lt;iframe&gt;</div>' +
          '</div>' +
          '<div class="click-dot"></div>' +
        '</div>';
      }
    },
    {
      id: 'badge',
      reversed: false,
      bg: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)',
      labelColor: '#06b6d4',
      label: 'AT A GLANCE',
      title: 'Tab Badge',
      desc: 'See the clicker\u2019s state without opening anything. A cyan dot on the extension icon means it\u2019s running, amber means paused. When adding targets, a violet count shows how many you\u2019ve placed so far.',
      visual: function() {
        return '<div class="viz-badges">' +
          '<div class="viz-badge"><div class="bdot cy"></div>Running</div>' +
          '<div class="viz-badge"><div class="bdot am"></div>Paused</div>' +
          '<div class="viz-badge"><div class="bdot vi"></div>+3 Adding</div>' +
        '</div>';
      }
    },
    {
      id: 'lightweight',
      reversed: true,
      bg: 'linear-gradient(135deg,#f0fdf4,#ecfccb)',
      labelColor: '#16a34a',
      label: 'ZERO OVERHEAD',
      title: 'Lightweight &amp; Fast',
      desc: 'Under 50 KB total. No background processes when idle, no performance impact on your browsing. Activates only when you tell it to &mdash; then gets out of the way.',
      visual: function() {
        return '<div class="viz-light">' +
          '<div class="viz-light-icon">' +
            '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>' +
          '</div>' +
          '<div class="viz-light-stats">' +
            '<div class="viz-light-row"><span class="viz-light-label">Size</span><span class="viz-light-val">&lt; 50 KB</span></div>' +
            '<div class="viz-light-row"><span class="viz-light-label">CPU</span><span class="viz-light-val viz-light-bar"><span></span></span></div>' +
            '<div class="viz-light-row"><span class="viz-light-label">Memory</span><span class="viz-light-val viz-light-bar"><span></span></span></div>' +
          '</div>' +
          '<div class="viz-light-tag">0% idle impact</div>' +
        '</div>';
      }
    }
  ];

  window.renderCards = function(container, ids) {
    var list = ids
      ? ids.map(function(id) { return CARDS.find(function(c) { return c.id === id; }); }).filter(Boolean)
      : CARDS;
    var html = '';
    list.forEach(function(card) {
      var rev = card.reversed ? ' rev' : '';
      var extra = card.extraClass ? ' ' + card.extraClass : '';
      var vis;
      if (card.useImg) {
        vis = '<div class="showcase-img"><img src="' + card.imgSrc + '" alt="' + card.title + '"></div>';
      } else {
        var inner = typeof card.visual === 'function' ? card.visual() : card.visual;
        vis = '<div class="showcase-vis" style="background:' + card.bg + '">' + inner + '</div>';
      }
      html += '<div class="showcase' + rev + extra + '">' +
        vis +
        '<div class="showcase-body">' +
          '<div class="showcase-label" style="color:' + card.labelColor + '">' + card.label + '</div>' +
          '<div class="showcase-title">' + card.title + '</div>' +
          '<div class="showcase-desc">' + card.desc + '</div>' +
        '</div>' +
      '</div>';
    });
    container.innerHTML = html;

    var revealEl = container.querySelector('.popup-reveal');
    if (revealEl) {
      var obs = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          revealEl.classList.add('is-visible');
          obs.disconnect();
        }
      }, { threshold: 0.3 });
      obs.observe(revealEl);
    }
  };

  window.initBrowserAnim = function() {
    var brow = document.getElementById('brow');
    if (!brow) return;
    var loopTimer = null;
    var paused = false;
    var ANIM_DURATION = 20000;
    var RESET_GAP = 800;

    function play() {
      paused = false;
      brow.classList.remove('anim-paused');
      brow.classList.remove('anim-active');
      void brow.offsetWidth;
      brow.classList.add('anim-active');
    }

    function startLoop() {
      play();
      clearInterval(loopTimer);
      loopTimer = setInterval(function() {
        if (paused) return;
        brow.classList.remove('anim-active');
        setTimeout(function() {
          void brow.offsetWidth;
          brow.classList.add('anim-active');
        }, RESET_GAP);
      }, ANIM_DURATION + RESET_GAP);
    }

    brow.addEventListener('click', function() {
      if (paused) {
        paused = false;
        brow.classList.remove('anim-paused');
      } else {
        paused = true;
        brow.classList.add('anim-paused');
      }
    });

    startLoop();
  };
})();
