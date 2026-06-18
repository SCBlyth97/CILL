/* CILL — tiny vanilla JS.
   Rules: no localStorage / sessionStorage / cookies. State lives in memory only
   and resets on refresh. */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.hidden = !open && window.matchMedia("(max-width: 859px)").matches;
    };
    // Ensure correct initial state per viewport.
    var sync = function () {
      if (window.matchMedia("(min-width: 860px)").matches) {
        nav.hidden = false;
        toggle.setAttribute("aria-expanded", "false");
      } else if (toggle.getAttribute("aria-expanded") !== "true") {
        nav.hidden = true;
      }
    };
    sync();
    window.addEventListener("resize", sync);
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });
  }

  /* ---- Submenu toggle (mobile: click; desktop: hover via CSS) ---- */
  document.querySelectorAll(".has-submenu > .submenu-label").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (window.matchMedia("(min-width: 860px)").matches) return;
      var sub = btn.parentElement.querySelector(".submenu");
      var open = sub.getAttribute("data-open") === "true";
      sub.setAttribute("data-open", String(!open));
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

  /* ---- In-memory unit progress (resets on refresh, by design) ---- */
  var readUnits = Object.create(null); // memory only

  var markBtn = document.querySelector(".mark-read");
  if (markBtn) {
    var unitId = markBtn.getAttribute("data-unit");
    markBtn.addEventListener("click", function () {
      var pressed = markBtn.getAttribute("aria-pressed") === "true";
      pressed = !pressed;
      markBtn.setAttribute("aria-pressed", String(pressed));
      markBtn.textContent = pressed ? "✓ Marked as read (this session)" : "Mark this unit as read";
      if (pressed) { readUnits[unitId] = true; } else { delete readUnits[unitId]; }
      // Reflect on the progress strip on this page, if present.
      var chip = document.querySelector('.progress-strip li[data-unit="' + unitId + '"]');
      if (chip && !chip.classList.contains("is-current")) {
        chip.classList.toggle("is-read", pressed);
      }
    });
  }
})();
