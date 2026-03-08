/* confetti.js — Shared confetti burst + scattered remains for welcome/update pages */
(function() {
  'use strict';

  var COLORS = ['#06b6d4', '#6366f1', '#7c3aed', '#f59e0b', '#e11d48'];

  /**
   * Launch confetti burst, scatter remains on margins, then call onComplete.
   * Waits for tab to become visible if opened in background (e.g. update tab).
   * @param {Function} [onComplete] — called after animation finishes
   */
  window.launchConfetti = function(onComplete) {
    if (document.hidden) {
      document.addEventListener('visibilitychange', function handler() {
        if (!document.hidden) {
          document.removeEventListener('visibilitychange', handler);
          startConfetti(onComplete);
        }
      });
      return;
    }
    startConfetti(onComplete);
  };

  function startConfetti(onComplete) {
    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.insertBefore(canvas, document.body.firstChild);

    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var particles = [];
    var TOTAL = 280;
    var DURATION = 3800;
    var startTime = Date.now();

    for (var i = 0; i < TOTAL; i++) {
      var isCenterBurst = i < 100;
      var startX = isCenterBurst
        ? W / 2 + (Math.random() - 0.5) * W * 0.3
        : Math.random() * W;
      var startY = isCenterBurst
        ? -10 - Math.random() * 40
        : -10 - Math.random() * H * 0.35;
      var speed = isCenterBurst ? 6 + Math.random() * 8 : 3 + Math.random() * 5;
      var spreadAngle = isCenterBurst
        ? (Math.random() - 0.5) * Math.PI * 0.8
        : (Math.random() - 0.5) * 0.6;

      particles.push({
        x: startX,
        y: startY,
        vx: Math.sin(spreadAngle) * speed,
        vy: isCenterBurst ? 1 + Math.random() * 3 : 1.5 + Math.random() * 2.5,
        w: 3 + Math.random() * 8,
        h: 2 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        shape: Math.random() > 0.25 ? 'rect' : 'circle',
        gravity: 0.05 + Math.random() * 0.04,
        drag: 0.991 + Math.random() * 0.005,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.03 + Math.random() * 0.06
      });
    }

    // Create scattered remains immediately, fade in during confetti fall
    var remainsContainer = scatterRemains();

    function draw() {
      var elapsed = Date.now() - startTime;

      // Fade in remains from 1s to 3s
      if (elapsed > 1000 && elapsed < 3200) {
        remainsContainer.style.opacity = Math.min(1, (elapsed - 1000) / 2000);
      } else if (elapsed >= 3200) {
        remainsContainer.style.opacity = '1';
      }

      if (elapsed > DURATION + 800) {
        canvas.remove();
        if (onComplete) setTimeout(onComplete, 400);
        return;
      }

      ctx.clearRect(0, 0, W, H);

      var fadeStart = DURATION - 600;
      var globalAlpha = elapsed > fadeStart ? Math.max(0, 1 - (elapsed - fadeStart) / 800) : 1;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.x += p.vx + Math.sin(p.wobble) * 0.6;
        p.y += p.vy;
        p.rot += p.rotSpeed;
        p.wobble += p.wobbleSpeed;

        ctx.save();
        ctx.globalAlpha = globalAlpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  function scatterRemains() {
    var pageH = document.documentElement.scrollHeight;
    var container = document.createElement('div');
    container.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:' + pageH + 'px;pointer-events:none;z-index:1;overflow:hidden;opacity:0;';
    document.body.style.position = 'relative';
    document.body.appendChild(container);

    var frag = document.createDocumentFragment();
    var count = 120;

    for (var i = 0; i < count; i++) {
      var el = document.createElement('div');
      var color = COLORS[Math.floor(Math.random() * COLORS.length)];
      var rot = Math.floor(Math.random() * 360);
      var y = 30 + Math.random() * (pageH - 60);

      // Only on margins
      var x;
      if (Math.random() < 0.5) {
        x = Math.random() * 13;
      } else {
        x = 87 + Math.random() * 13;
      }

      // Same shapes as flying confetti
      var shape = Math.random();
      var w, h, radius;
      if (shape < 0.5) {
        w = 8 + Math.random() * 10;
        h = 5 + Math.random() * 6;
        radius = '2px';
      } else if (shape < 0.8) {
        w = 14 + Math.random() * 18;
        h = 4 + Math.random() * 3;
        radius = '2px';
      } else {
        var d = 6 + Math.random() * 8;
        w = d; h = d;
        radius = '50%';
      }

      var opacity = 0.25 + Math.random() * 0.3;

      el.style.cssText = 'position:absolute;pointer-events:none;' +
        'left:' + x + '%;top:' + y + 'px;' +
        'width:' + w + 'px;height:' + h + 'px;' +
        'background:' + color + ';' +
        'border-radius:' + radius + ';' +
        'opacity:' + opacity + ';' +
        'transform:rotate(' + rot + 'deg);';
      frag.appendChild(el);
    }

    container.appendChild(frag);
    return container;
  }
})();
