// slide6.js

(function () {
  const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#01";
  const reduceMotion = { matches: false };

  let tl = null;

  function getRoot() {
    return document.querySelector(".slide.s6");
  }

  function splitTitle(el) {
    if (!el || el.dataset.split === "1") return;
    el.dataset.split = "1";

    function walk(node) {
      Array.from(node.childNodes).forEach(function (child) {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (part === "") return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(" "));
              return;
            }
            const mask = document.createElement("span");
            mask.className = "s6-mask";
            for (const ch of part) {
              const c = document.createElement("span");
              c.className = "s6-char";
              c.textContent = ch;
              mask.appendChild(c);
            }
            frag.appendChild(mask);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    }

    walk(el);
  }

  function scrambleTween(el, duration) {
    const finalText = el.dataset.scramble || el.textContent;
    const state = { p: 0 };

    return gsap.to(state, {
      p: 1,
      duration: duration,
      ease: "none",
      onUpdate: function () {
        const revealed = Math.floor(state.p * finalText.length);
        let out = finalText.slice(0, revealed);
        for (let i = revealed; i < finalText.length; i++) {
          out += finalText[i] === " "
            ? " "
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        el.textContent = out;
      },
      onComplete: function () {
        el.textContent = finalText;
      }
    });
  }

  function formatNumber(value, decimals) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function counterTween(el) {
    const to = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const state = { v: 0 };
    el.textContent = formatNumber(0, decimals);

    return gsap.to(state, {
      v: to,
      duration: 1.4,
      ease: "power3.out",
      onUpdate: function () {
        el.textContent = formatNumber(state.v, decimals);
      },
      onComplete: function () {
        el.textContent = formatNumber(to, decimals);
      }
    });
  }

  function play() {
    if (typeof gsap === "undefined") return;
    const root = getRoot();
    if (!root) return;

    const q = gsap.utils.selector(root);

    splitTitle(root.querySelector(".s6-title"));

    if (tl) tl.kill();

    if (reduceMotion.matches) {
      gsap.set(q(".s6-char"), { clearProps: "all" });
      return;
    }

    tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(q(".s6-eyebrow"), { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);
    tl.add(scrambleTween(q(".s6-eyebrow")[0], 0.7), 0);

    tl.fromTo(q(".s6-title .s6-char"),
      { yPercent: 115, rotate: 8 },
      { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.022 },
      0.15);

    tl.fromTo(q(".s6-rule-line"),
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
      0.5);
    tl.fromTo(q(".s6-rule-label"),
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8 },
      0.8);

    tl.fromTo(q(".s6-col-title"),
      { opacity: 0 },
      { opacity: 1, duration: 0.5, stagger: 1.8 },
      0.9);

    tl.fromTo(q(".s6-reason"),
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.35, ease: "power3.out" },
      1.1);

    tl.fromTo(q(".s6-frame"),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      2.7);
    tl.fromTo(q(".s6-slot-wrap"),
      { clipPath: "inset(0% 0% 100% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.inOut" },
      2.8);

    tl.fromTo(q(".s6-footer"),
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      4.2);
    tl.to(q(".s6-footer"),
      { opacity: 0.45, duration: 1, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }

  function stop() {
    if (tl) {
      tl.kill();
      tl = null;
    }
  }

  window.Slide6 = { play: play, stop: stop };
})();