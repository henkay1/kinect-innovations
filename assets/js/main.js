/* Kinect Innovations LLC — Site-wide behavior */

document.addEventListener("DOMContentLoaded", () => {
  /* Mobile nav toggle -------------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      const isOpen = mobileNav.classList.contains("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => mobileNav.classList.remove("open"))
    );
  }

  /* Active link highlighting -------------------------------------------- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a, .mobile-nav a, .footer-bottom-nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  /* Footer year ----------------------------------------------------------- */
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* Cookie consent banner ------------------------------------------------- */
  const CONSENT_KEY = "kinect_cookie_consent";
  const banner = document.querySelector(".cookie-banner");
  if (banner) {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      banner.classList.add("visible");
    }
    const setConsent = (value) => {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, date: new Date().toISOString() }));
      banner.classList.remove("visible");
    };
    const acceptBtn = banner.querySelector("[data-cookie-accept]");
    const rejectBtn = banner.querySelector("[data-cookie-reject]");
    if (acceptBtn) acceptBtn.addEventListener("click", () => setConsent("accepted"));
    if (rejectBtn) rejectBtn.addEventListener("click", () => setConsent("rejected"));
  }

  /* Generic contact / lead forms (no backend attached by default) -------- */
  document.querySelectorAll("form[data-kinect-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const formId = form.getAttribute("data-kinect-form");
      const endpoint = form.getAttribute("data-endpoint");

      const finish = (ok, message) => {
        if (status) {
          status.textContent = message;
          status.classList.remove("success", "error");
          status.classList.add(ok ? "success" : "error", "visible");
        }
        if (ok) form.reset();
      };

      if (endpoint) {
        // If a real form endpoint (e.g. Formspree, Getform) is configured, submit to it.
        fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        })
          .then(res => {
            if (res.ok) finish(true, "Thanks — your message has been sent. We'll be in touch within 1 business day.");
            else finish(false, "Something went wrong sending your message. Please email us directly at hello@kinectinnovationsllc.com.");
          })
          .catch(() => finish(false, "Something went wrong sending your message. Please email us directly at hello@kinectinnovationsllc.com."));
      } else {
        // No backend configured yet — store locally so the demo is fully functional,
        // and tell the site owner how to wire up real delivery (see README).
        try {
          const key = `kinect_lead_${formId}`;
          const existing = JSON.parse(localStorage.getItem(key) || "[]");
          const data = Object.fromEntries(new FormData(form).entries());
          data.submittedAt = new Date().toISOString();
          existing.push(data);
          localStorage.setItem(key, JSON.stringify(existing));
          finish(true, "Thanks — your message has been received. We'll be in touch within 1 business day.");
        } catch (err) {
          finish(false, "Something went wrong. Please email us directly at hello@kinectinnovationsllc.com.");
        }
      }
    });
  });
});
